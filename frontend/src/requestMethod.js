import axios from "axios";


// const BASE_URL = "https://backend-ecommerce-new-production.up.railway.app/";

const BASE_URL = "http://localhost:7000/api/"

// localhost:7000/api/auth/login

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDBlZDRkMDRhYzYyNzNlOWQxNzgzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTYwNDE0NSwiZXhwIjoxNjc5ODYzMzQ1fQ.a8fXB1y6PJp1TMUe8Gj96ay4xkncriK9FnTBt5F-TMc"

// Request  which do not require  JWT inside out header
export const publicRequest = axios.create({
    baseURL: BASE_URL,
   
});

// Request  which  require  JWT inside out header

// export const userRequest = axios.create({
//     baseUrl: BASE_URL,
//     header:{token:`Bearer ${TOKEN}`}
// })