/**
 * 连接NAMI服务端寺址
 **/

 const HOST = "https://scholes.gzriver.com";

 /**
  * 是否需要获取unionid
  *若此项为为true,则登录时候会多做一步服务端完全资料获取(包括获取unionid)
  */

  const FULL_LOGIN = 1;

  module.exports = {
      host: HOST,
      fullLogin: FULL_LOGIN
  }