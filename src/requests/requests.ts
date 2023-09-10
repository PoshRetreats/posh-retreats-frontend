// import { getAuthCookie } from 'utilities/helpers';
import axios from "axios";

function getAuthCookie(){
  return null
}

function forceLogOut(){
  return null
}

export interface GeneralResponseType {
  error: string | null;
  status: string;
  message: string | null;
  data: any;
  success: boolean;
  statusCode: number | any;
}

export enum CONTENT_TYPES {
  FILE = "file",
  NORMAL = "normal",
}

export function handleUnauthorizedUser(response: any) {
  if (response.data.statusCode === 403) {
    alert("user forbidden");
    forceLogOut();
  }
  if (response.data.statusCode === 401) {
    alert("user unauthorized");
    forceLogOut();
  }
}

export async function makePostRequest(
  url: string,
  body: any,
  content: CONTENT_TYPES = CONTENT_TYPES.NORMAL
) {
  const promise = new Promise((resolve, reject) => {
    axios
      .post(url, body, {
        headers: {
          "Content-Type": content === CONTENT_TYPES.FILE ? 'multipart/form-data' : 'application/json',
          Authorization: `Bearer ${getAuthCookie()}`,
        },
      })
      .then((res: any) => {
        resolve(res?.data);
      })
      .catch(({ response }) => {
        handleUnauthorizedUser(response);
        reject(response?.data);
      });
  });
  return promise;
}

export async function makePutRequestWithAxios(url: string, body: any) {
  const promise = new Promise((resolve, reject) => {
    axios
      .put(url, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAuthCookie()}`,
        },
      })
      .then((res) => {
        resolve(res?.data?.response);
      })
      .catch(({ response }) => {
        reject(response?.data);
      });
  });
  return promise;
}

export async function makeDeleteRequestWithAxios(url: string) {
  const promise = new Promise((resolve, reject) => {
    axios
      .delete(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAuthCookie()}`,
        },
      })
      .then((res) => {
        resolve(res.data?.response);
      })
      .catch(({ response }) => {
        reject(response?.data);
      });
  });
  return promise;
}

export async function makeGetRequestWithToken(url: string) {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAuthCookie()}`,
        },
      })
      .then((res) => {
        resolve(res?.data);
      })
      .catch(({ response }) => {
        handleUnauthorizedUser(response);
        reject(response?.data?.data?.message);
      });
  });
  return promise;
}
