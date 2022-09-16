// import request from "@/plugins/axios";
import axios from '@/plugins/api';
const baseUrl = "http://localhost:8081";
// 获取验证码
export const getVerifyCode = params =>
  axios.get(`${baseUrl}/users/searchById`, params);

  export const saveForm = data =>
  axios.post(`${baseUrl}/users/saveForm`, data);
