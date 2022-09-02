import React from "react";
import Search from "./Search";
import SearchImage from "../../assets/search.svg";
import Logo from "../../assets/lws.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../../features/filter/tagFilterSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link to="/">
          <img
            onClick={handleReset}
            className="h-10"
            src={Logo}
            alt="Learn with Sumit"
          />
        </Link>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          <Search />
          <img
            className="inline h-4 cursor-pointer"
            src={SearchImage}
            alt="Search"
          />
        </div>
      </div>
    </nav>
  );
}