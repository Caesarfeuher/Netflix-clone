import axios from "axios";

// base url make requests to the movie database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
export default instance;
