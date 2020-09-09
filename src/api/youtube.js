import axios from "axios";

const KEY = "AIzaSyDBNWvDnWO1Qba3LoJDCD0RSksSl4Kx1Sc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    type: "video",
    key: KEY,
  },
});
