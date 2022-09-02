import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/tagFilterSlice";

export default function Tag({ title }) {
  const { tags } = useSelector((state) => state.selectedTag);
  const dispatch = useDispatch();
  const isSelected = tags.includes(title) ? true : false;

  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };
  return (
    <div>
      <div onClick={handleSelect} className={style}>
        {title}
      </div>
    </div>
  );
}
