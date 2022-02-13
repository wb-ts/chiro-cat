import axios from "axios";
import { BACKEND_URL } from "../config";

const app = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

export async function fetchPostData(addedUrl: string, body: unknown) {
  try {
    await app.get("/sanctum/csrf-cookie");
    const { data } = await app.post(addedUrl, body);
    return data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (e.response) {
        return { errors: [e.response.data.message] };
      }
      if (e.request) {
        return { errors: [e.request.data.message] };
      }
    } else {
      const err = e as Error;
      return { errors: [err.message] };
    }
  }
}

export const fetchGetData = async (addedUrl: string) => {
  try {
    await axios.get("/sanctum/csrf-cookie");
    const { data } = await app.get(addedUrl);
    return data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (e.response) {
        return e.response.data;
      }
      if (e.request) {
        return e.request.data;
      }
    } else {
      const err = e as Error;
      return { errors: [err.message] };
    }
  }
};
