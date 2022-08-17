import React from "react";

const Pagination = ({ previous, next, onPrevious, onNext }) => {
  const handlePrev = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };
  return (
    <>
      <nav aria-label="">
        <ul className="pagination m-5  justify-content-center ">
          {previous  ? (
            <li className="page-item m-2">
              <button className=" btn btn-dark text-warning" onClick={handlePrev}>
                Prev
              </button>
            </li>
          ) :  null
          }
          {next ? (
            <li className="page-item m-2">
              <button className="btn btn-dark text-warning" onClick={handleNext}>
                Next
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </>
  );
};
export default Pagination;
