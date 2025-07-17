export default function Pagination({ totalPages, currentPage, onPageChange }) {
  if (totalPages === 0) return null;
  return (
    <div className="flex justify-center mt-6 gap-2">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 border rounded ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
}
