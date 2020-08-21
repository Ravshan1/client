import axios from "axios";
import { API_URL } from "./api.settings";
import ReduxStorage from "../reducer/dispatch";

const createApiUrl = (controllerName: any) => {
  return API_URL + controllerName;
};

export const fetchData = (controllerName: string) => {
  return axios
    .get(createApiUrl(controllerName))
    .then((response) => { 
      return response.data; 
    })
    .catch((err) => {
      console.log(err);
    });
};

//`http://localhost:3000/users/${id}`
export const deleteData = (controllerName: string, id: any) => {
  return axios
    .delete(createApiUrl(controllerName) + `/${id}`)
    .then((response) => {
      return response.data;
    });
};

export const postData = (controllerName: string, data: any, window:any, setData:any) => {

  if (controllerName == "user") {
    data["userRoleId"] = parseInt(data["userRoleId"]);
    data["userGroupId"] = parseInt(data["userGroupId"]);
    data["status"] = parseInt(data["status"]);
  }

  axios
    .post(createApiUrl(controllerName), data)
    .then(function (response) {
      console.log(response);  
      window(false)
      setData()
    })
    .catch(function (error) {
      console.log(error);
    });
};
