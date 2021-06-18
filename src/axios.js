import axios from "axios";

//base url to make requests to the movie db

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

//instance.get('/foo-bar');    //get req to append this to the baseurl


export default instance;