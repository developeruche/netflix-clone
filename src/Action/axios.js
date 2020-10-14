import axios from "axios"

//Introducting the base url
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;