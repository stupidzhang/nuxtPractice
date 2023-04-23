import axios from "axios";
import { Message, Notification } from "element-ui";

axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
let service = axios.create({
  // baseURL: '/',
  timeout: 10000,
});
service.interceptors.request.use(
  config => {
    if(config.method==='post'){
      config.headers['Content-Type']='application/x-www-form-urlencoded'
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// 响应拦截 对响应消息作初步的处理
service.interceptors.response.use(
  resp => {
    if (resp.data) {
      if (resp.data.code !== "000000") {
        Message({
          type: "error",
          message: resp.data.message,
          duration: 5000
        });
      }
      return {
        code: resp.data.code,
        data: resp.data.data,
        msg: resp.data.message
      };
    } else {
      return resp;
    }
  },
  error => {
    if (error.response) {
      switch (error.response.states) {
        case 400: {
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            Notification.error({
              title: "400错误",
              message: error.response.data.message,
              duration: 5000,
              closable: true
            });
          }
          break;
        }

      }
    }
    Notification.error({
      title: "错误",
      message: error,
      duration: 5000,
      closable: true
    });
    return Promise.reject(error)
  }
);

export default service;
