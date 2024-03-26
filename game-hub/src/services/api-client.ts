import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "118be4ef723a4c51a661318aee54c078",
  },
});
