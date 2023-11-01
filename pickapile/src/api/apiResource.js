import axios from "axios";

export const api = axios.create({
    baseURL: 'www.picka-pile.vercel.app'
})
