import { ISearchQuery } from "../../_types/search";
import { fetchPostData } from "../httpService";

export async function searchContacts(data: ISearchQuery) {
  return await fetchPostData("api/contacts/search?include=phones", data);
}
