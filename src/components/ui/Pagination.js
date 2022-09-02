import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage } from "../../features/filter/tagFilterSlice";

export default function Pagination() {
  const { videos } = useSelector((state) => state.videos);
  const { postPerPage, currentPage } = useSelector(
    (state) => state.selectedTag
  );
  const dispatch = useDispatch();
  let pages = [];

  for (let i = 1; i <= Math.ceil(videos.length / postPerPage); i++) {
    pages.push(i);
  }
  const handleCurrentPage = (getPage) => {
    dispatch(getCurrentPage(getPage));
  };

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {pages.map((page, index) => (
          <div
            key={index}
            onClick={() => handleCurrentPage(page)}
            className={`${
              currentPage === page && "bg-blue-600 text-white "
            } text-blue-600 cursor-pointer px-4 py-1 rounded-full`}
          >
            {page}
          </div>
        ))}
      </div>
    </section>
  );
}
