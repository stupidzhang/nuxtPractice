// import request from "@/plugins/axios";
import axios from "axios";
const baseUrl = "http://localhost:3000";
// 获取验证码
export const getVerifyCode = params =>
  axios.get(`${baseUrl}/users`, params);