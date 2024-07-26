import { BASEURL } from "../../consts/BASEURL";
import ApiHandler from "../utils";

export const GetTaskService = () => {
  const headers = {
    'Authorization': 'Bearer ' + localStorage.getItem("token"),
  }
  return ApiHandler(`${BASEURL}/task/get`, 'GET', null, headers);
};

export const DeleteService = (id) => {
  const headers = {
    'Authorization': 'Bearer ' + localStorage.getItem("token"),
  }
  return ApiHandler(`${BASEURL}/task/${id}/delete`, 'DELETE', null, headers);
};

export const AddTaskService = (title) => {
  const headers = {
    'Authorization': 'Bearer ' + localStorage.getItem("token"),
  }
  return ApiHandler(`${BASEURL}/task/create`, 'POST', { title }, headers);
}