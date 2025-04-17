const Pagination = ({
  goToNextPage,
  goToPrevPage,
  handlePageChange,
  nuOfPages,
  currentPage,
}) => {
  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 0}
        className="page-number"
        onClick={goToPrevPage}
      >
        ⬅️
      </button>

      {[...Array(nuOfPages).keys()].map((n) => (
        <span
          className={"page-number " + (n === currentPage ? "active" : "")}
          key={n}
          onClick={() => handlePageChange(n)}
        >
          {n}
        </span>
      ))}

      <button
        disabled={currentPage === nuOfPages - 1}
        className="page-number"
        onClick={goToNextPage}
      >
        ➡️
      </button>
    </div>
  );
};

export default Pagination;
