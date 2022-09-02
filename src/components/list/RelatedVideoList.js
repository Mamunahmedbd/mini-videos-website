import React, { useEffect } from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../utils/Loading";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";

export default function RelatedVideoList({ currentVideoId, tags }) {
  console.log(tags);
  const dispatch = useDispatch();
  const { relatedVideos, loading, error, isError } = useSelector(
    (state) => state.relatedVideos
  );

  console.log(relatedVideos);

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [tags, currentVideoId, dispatch]);

  let content = null;

  if (loading) content = <Loading />;
  if (!loading && isError) content = <div className="col-span-12">{error}</div>;
  if (!loading && !isError && !relatedVideos?.length === 0)
    content = <div className="col-span-12">Video Not Found</div>;
  if (!loading && !isError && relatedVideos?.length > 0)
    content = relatedVideos.map((relatedVideo) => (
      <RelatedVideoListItem key={relatedVideo.id} relatedVideo={relatedVideo} />
    ));

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}
