import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/filter/tagFilterSlice";
import { fetchTag } from "../../features/tags/tagsSlice";
import Tag from "./tag";

export default function Tags() {
  const { tags } = useSelector((state) => state.tags);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTag());
  }, [dispatch]);

  const handleReset = () => {
    dispatch(reset());
  };
  return tags.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags.map((tag) => (
          <Tag key={tag.id} title={tag.title} />
        ))}
        <button
          type="button"
          onClick={() => handleReset()}
          className="mx-auto bg-red-600 text-white px-4 py-1"
        >
          Reset All
        </button>
      </div>
    </section>
  ) : null;
}

// eslint-disable-next-line
{
  /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
  redux
</div> */
}
