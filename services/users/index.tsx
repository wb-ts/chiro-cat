import { fetchGetData } from "../httpService";

export async function getAllUsers() {
  return await fetchGetData("api/users");
}
