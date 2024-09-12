import React, { useContext } from "react";
import { PaginationContext } from "../PaginationContext";

const Pagination = () => {
  const { currectPage, setCurrectPage, paginationCount } = useContext(PaginationContext);
  const itemElements = [];

  const makePagination = (count) => {
    for (let i = 0; i < count; i++) {
      itemElements.push(
        <button
          key={i}
          className={`px-3 py-1 border rounded mx-1 ${
            currectPage === i ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
          }`}
          onClick={() => setCurrectPage(i)}
        >
          {i + 1}
        </button>
      );
    }
  };

  makePagination(paginationCount);

  return <>{itemElements}</>;
};

export default Pagination;
      