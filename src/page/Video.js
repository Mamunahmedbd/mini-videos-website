import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Player from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import { fetchVideo } from "../features/video/videoSlice";
import Loading from "../components/utils/Loading";

export default function Video() {
  const dispatch = useDispatch();
  const { video, loading, isError, error } = useSelector(
    (state) => state.video
  );
  console.log(video);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchVideo(id));
  }, [dispatch, id]);

  let content = null;
  if (loading) content = <Loading />;
  if (!loading && isError) content = <div className="col-span-12">{error}</div>;
  if (!loading && !isError && !video?.id)
    content = <div className="col-span-12">Not Video Found</div>;
  if (!loading && !isError && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <Player link={video.link} title={video.title} />

          <VideoDescription video={video} />
        </div>

        <RelatedVideoList currentVideoId={video.id} tags={video.tags} />
      </div>
    );
  }

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
}
