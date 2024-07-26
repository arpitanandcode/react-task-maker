import { BASEURL } from "../../consts/BASEURL";
import ApiHandler from "../utils"



export const RegisterService = (data) => {
  return ApiHandler(`${BASEURL}/auth/register`, 'POST', data);
}

export const LoginService = (data) => {
  return ApiHandler(`${BASEURL}/auth/login`, 'POST', data);
}