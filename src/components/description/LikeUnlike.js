import React from "react";
import { useDispatch } from "react-redux";

import likeImage from "../../assets/like.svg";
import UnlikeImage from "../../assets/unlike.svg";
import { likeAsync, unLikeAsync } from "../../features/video/videoSlice";
export default function LikeUnlike({ id, like, unlikes }) {
  const dispatch = useDispatch();

  const handleLike = (id) => {
    let countLike = like;
    countLike++;
    dispatch(likeAsync({ id, countLike }));
  };
  const handleUnLike = (id) => {
    let countUnLike = unlikes;
    countUnLike++;
    dispatch(unLikeAsync({ id, countUnLike }));
  };
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div onClick={() => handleLike(id)} className="shrink-0">
          <img className="w-5 block" src={likeImage} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{like}</div>
      </div>
      <div className="flex gap-1">
        <div onClick={() => handleUnLike(id)} className="shrink-0">
          <img className="w-5 block" src={UnlikeImage} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikes}
        </div>
      </div>
    </div>
  );
}
