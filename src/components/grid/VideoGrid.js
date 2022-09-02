import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videoSlice";
import Loading from "../utils/Loading";
import VideoGridItem from "./VideoGridItem";

export default function VideoGrid() {
  const dispatch = useDispatch();
  const { videos, loading, isError, error } = useSelector(
    (state) => state.videos
  );
  const { tags, search, author, currentPage, postPerPage } = useSelector(
    (state) => state.selectedTag
  );
  console.log(author);

  useEffect(() => {
    dispatch(fetchVideos({ tags, search, author }));
  }, [dispatch, tags, search, author]);

  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const allVideos = videos.slice(firstIndex, lastIndex);

  let content;
  if (loading) content = <Loading />;
  if (!loading && isError) content = <div className="col-span-12">{error}</div>;
  if (!loading && !isError && allVideos?.length === 0)
    content = <div className="col-span-12">Video Not Found</div>;
  if (!loading && !isError && allVideos?.length > 0)
    content = allVideos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
}
