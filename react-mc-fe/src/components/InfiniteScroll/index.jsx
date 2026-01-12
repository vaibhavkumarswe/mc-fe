import React, { useCallback, useEffect, useState } from "react";

export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${pageNo}&limit=10`
        );
        const result = await response.json();
        setData((prevData) => [...prevData, ...result]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pageNo]);

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (documentHeight - 300 < scrollTop + windowHeight) {
      setPageNo((prevPageNo) => prevPageNo + 1);
    }
  }, []);

  const debouncedScrollHandler = useCallback(debounce(handleScroll, 200), [
    handleScroll,
  ]);

  //   useEffect(() => {
  //     window.addEventListener("scroll", debouncedScrollHandler, true);
  //     return () => {
  //       window.removeEventListener("scroll", debouncedScrollHandler, true);
  //     };
  //   }, [debouncedScrollHandler]);

  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
      if (param[0].isIntersecting) {
        observer.unobserve(lastElement);
        setPageNo((prevPageNo) => prevPageNo + 1);
      }
    });

    const lastElement = document.querySelector(".image-post:last-child");
    if (lastElement) {
      observer.observe(lastElement);
    }

    return () => {
      if (lastElement) {
        observer.unobserve(lastElement);
      }
    };
  }, [data]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Infinite Scroll Component</h1>
      <p>This is a placeholder for the Infinite Scroll component.</p>
      <div className="flex flex-col items-center w-3/4 overflow-y-auto h-full mt-10">
        {data.map((item) => (
          <div key={item.id} className="mb-4 image-post">
            <img
              className="w-64 h-64 object-cover"
              src={item.download_url}
              alt={item.author}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
