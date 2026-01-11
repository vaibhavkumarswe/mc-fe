import { useEffect, useRef, useState, useCallback } from "react";

const STATE = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultsObj, setResultsObj] = useState({
    results: [],
    state: STATE.LOADING,
  });
  const cache = useRef({});

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const updateCache = useCallback((term, data) => {
    const keys = Object.keys(cache.current);
    if (keys.length >= 10) {
      const leastPriorityKey = keys.reduce((worst, current) => {
        const worstItem = cache.current[worst];
        const currentItem = cache.current[current];

        if (worstItem.count !== currentItem.count) {
          return worstItem.count < currentItem.count ? worst : current;
        }

        return worstItem.lastAccessed < currentItem.lastAccessed
          ? worst
          : current;
      });

      delete cache.current[leastPriorityKey];
    }

    cache.current[term] = {
      data,
      count: 1,
      lastAccessed: Date.now(),
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const abortSignal = abortController.signal;

    const fetchData = async () => {
      try {
        setResultsObj((prev) => ({ ...prev, state: STATE.LOADING }));
        if (cache.current[searchTerm]) {
          cache.current[searchTerm].count++;
          setResultsObj((prev) => ({
            ...prev,
            results: cache.current[searchTerm].data,
            state: STATE.SUCCESS,
          }));
          return;
        }
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}&limit=5`,
          { signal: abortSignal }
        );
        const data = await res.json();
        // cache.current[searchTerm] = { data: data.products, count: 1 };
        updateCache(searchTerm, data.products);
        setResultsObj((prev) => ({
          ...prev,
          results: data.products,
          state: STATE.SUCCESS,
        }));
      } catch (err) {
        if (err.name === "AbortError") return;
        setResultsObj((prev) => ({ ...prev, state: STATE.ERROR }));
      }
    };

    const timeoutId = setTimeout(fetchData, 1500);

    return () => {
      clearTimeout(timeoutId);
      abortController.abort();
    };
  }, [searchTerm]);

  console.log("Cache:", cache.current);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Search Bar Component</h1>
      <p>This is a placeholder for the Search Bar component.</p>
      <div className="flex flex-col mt-6">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded-l-md"
          value={searchTerm}
          onChange={handleSearch}
        />

        <div className="flex flex-col mt-4">
          <label className="mb-2 font-medium">Search Results:</label>
          <div className="border border-gray-300 rounded-md p-4 w-96 h-48 overflow-y-auto bg-white">
            {resultsObj.state === STATE.LOADING && (
              <p className="text-orange-500 font-semibold">
                Loading Search Results...
              </p>
            )}

            {resultsObj.state === STATE.ERROR && (
              <p className="text-red-500 font-bold">Error fetching results!</p>
            )}

            {resultsObj.state === STATE.SUCCESS &&
              resultsObj.results.length === 0 && (
                <p className="text-yellow-900 font-bold">
                  OOPS! No results found.
                </p>
              )}

            {resultsObj.state === STATE.SUCCESS &&
              resultsObj.results.length > 0 && (
                <ul>
                  {resultsObj.results.map((item) => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </ul>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
