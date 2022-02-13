import { ILoginData } from "../../_types/auth";
import { fetchPostData } from "../httpService";

export async function loginService({ email, password }: ILoginData) {
  return await fetchPostData("login", { email, password });
}
