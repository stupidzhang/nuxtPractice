// import request from "@/plugins/axios";
import axios from '@/plugins/api';
const baseUrl = "http://localhost:8081";
// 获取验证码
export const getVerifyCode = params =>
  axios.get(`${baseUrl}/users/searchById`, params);

  export const saveForm = data =>
  axios.post(`${baseUrl}/users/saveForm`, data);

  export const saveFormData = data =>
  axios.post(`${baseUrl}/users/saveFormData`, data);

  export const uploadFile = data =>
  axios.post(`${baseUrl}/users/uploadFile`, data);
