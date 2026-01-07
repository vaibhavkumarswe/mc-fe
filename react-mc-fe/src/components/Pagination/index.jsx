import { useEffect, useState } from "react";
import axios from "axios";
import PaginationControls from './PaginationControls';

const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(`https://picsum.photos/v2/list?page=${page}&limit=5`)
      .then((res) => setData(res.data));
  }, [page]);
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 h-screen self-center flex flex-col items-center">
      <h1>Pagination Component</h1>
      <p>This is a placeholder for the Pagination component.</p>
      <div className="border p-20 mt-10 flex flex-row items-center gap-4">
        {data.map((item) => (
          <div key={item.id} className="mb-4">
            <img
              src={item.download_url}
              alt={item.author}
              className="w-64 h-64 object-cover"
            />
            <p>Author: {item.author}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <PaginationControls page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Pagination;
