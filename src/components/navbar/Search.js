import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searched } from "../../features/filter/tagFilterSlice";
import { useMatch, useNavigate } from "react-router-dom";

export default function Search() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.selectedTag);
  console.log(search);
  const [searchInput, setSearchInput] = useState(search);
  const match = useMatch("/");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(searchInput));
    if (!match) {
      navigate("/");
    }
    setSearchInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
}
