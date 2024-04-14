import axios from "axios";
const LocalBASE_URL = "https://noteshareserver.vercel.app/api/";
const BASE_URL = "https://noteshareserver.vercel.app/api/";

export const pf = "https://noteshareserver.vercel.app/images";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});