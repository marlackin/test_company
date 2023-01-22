import axios from "axios";

export const getImages = async () => {
  return await axios.get("https://picsum.photos/v2/list?page=1&limit=12");
};
