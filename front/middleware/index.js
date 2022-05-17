export default ({ store, route, redirect, params, query, req, res }) => {
  // context 服务端上下文
  // 全局守卫业务
  console.log("middleware nuxt.config.js outside", route);
  let isServer = process.server;
  console.log(isServer, process);
};
