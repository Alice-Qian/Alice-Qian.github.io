import * as config from "./config";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

axios.defaults.baseURL = config.baseURL;
axios.defaults.timeout = config.TIMEOUT;

// 添加拦截器
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

const request = {
  async get(url: string, getData = {}) {
    let params = JSON.parse(JSON.stringify(getData));
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(
        (response: AxiosResponse) => {
          if (response.status === config.STATUS_OK) {
            resolve(response.data);
          }
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  },
  async post(url: string, postData = {}) {
    let datas = JSON.parse(JSON.stringify(postData));
    return new Promise((resolve, reject) => {
      axios.post(url, datas).then(
        (response: AxiosResponse) => {
          if (response.status === config.STATUS_OK) {
            resolve(response.data);
          }
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }
};

export default request;
