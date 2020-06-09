import axios from "axios";

axios({
    "method":"GET",
    "url":"https://api-football-v1.p.rapidapi.com/v2/countries",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"api-football-v1.p.rapidapi.com",
    "x-rapidapi-key":"1edb81f0cbmsh5e57769c8bf2faap17ec69jsn8dc26e3e5119",
    "useQueryString":true
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })