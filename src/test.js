const axios = require("axios");

const BASE_URL = `https://movie-database-imdb-alternative.p.rapidapi.com/`

module.exports = {
    getCompatibility: (movieName) => axios({
        method:"GET",
        url : BASE_URL,
        headers: {
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com",
            "x-rapidapi-key":"1edb81f0cbmsh5e57769c8bf2faap17ec69jsn8dc26e3e5119",
            "useQueryString":true
        },
        params: {
            s: movieName,

        }
    })
}