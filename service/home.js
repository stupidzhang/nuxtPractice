// import request from "@/plugins/axios";
import axios from "axios";
const baseUrl = "http://localhost:8080";
// 获取验证码
export const getVerifyCode = params =>
  axios.get(`${baseUrl}/user/getVerifyCode`, params);
