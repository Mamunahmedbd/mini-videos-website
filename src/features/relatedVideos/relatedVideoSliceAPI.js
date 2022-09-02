import axios from "../../components/utils/axios";

const getRelatedVideo = async ({ tags, id }) => {
  let limit = 5;
  const quaryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne${id}&_limit=${limit}`
      : `&id_ne${id}&_limit=${limit}`;

  const res = await axios.get(`/videos?${quaryString}`);
  return res.data;
};

export default getRelatedVideo;
