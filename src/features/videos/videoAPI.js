import axios from "../../components/utils/axios";

const getVidoes = async (tags, search, author) => {
  let quaryString = "";
  if (author?.length > 0) {
    quaryString += `author_like=${author}&`;
  }
  if (tags?.length > 0) {
    quaryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (search !== "") {
    quaryString += `q=${search}`;
  }
  const res = await axios.get(`/videos?${quaryString}`);
  return res.data;
};

export default getVidoes;
