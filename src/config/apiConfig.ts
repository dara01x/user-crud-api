import axios from "axios";
import dotenv from 'dotenv'; 


dotenv.config();
console.log(process.env.EXTERNAL_API_URL);

export const apiClient = axios.create({
    baseURL: process.env.EXTERNAL_API_URL, 
    headers:{
        "Content-Type": "application/json"
    },
});