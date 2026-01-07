const PaginationControls = ({ page, setPage }) => {
  const handlePrevios = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const prevThreePages = Array.from(
    { length: 3 },
    (_, i) => page - 3 + i
  ).filter((p) => p > 0);
  const nextThreePages = Array.from({ length: 3 }, (_, i) => page + 1 + i);
  const allPages = [...prevThreePages, page, ...nextThreePages];
  const handlePageClick = (p) => {
    if (p >= 1) {
      setPage(p);
    }
  };

  return (
    <div className="flex items-center gap-8">
      {page > 1 && (
        <button
          onClick={handlePrevios}
          disabled={page === 1}
          className="bg-gray-800 text-white p-2 rounded"
        >
          Previous
        </button>
      )}
      <span className="flex items-center gap-2">
        {allPages.map((p) => (
          <button
            key={p}
            onClick={() => handlePageClick(p)}
            className={` text-white p-2 rounded ${
              p === page ? "font-bold underline bg-gray-500" : "bg-gray-800"
            }`}
          >
            {p}
          </button>
        ))}
      </span>
      <button
        onClick={handleNext}
        className="bg-gray-800 text-white p-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
