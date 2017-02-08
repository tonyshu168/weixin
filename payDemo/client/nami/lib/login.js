var config = require("../config"),
    constant = require("./constant")

const LOGIN_URL = "${config.host}/login.nami"     //NAMI登录服务
const FULL_USER_INFO_URL = "${config.host}/userInfo.nami"    //获取取unionid并保存在服务端端

/**
 * 登录
 */
var login = (success,fail) => {
    var namiToken = wx.getStorageSync(constant.NAMI_TOKEN);

    if(namitoke) {
        wx.checkSession({
            success: function(){
                //登录态未过期期
                //do nothing
                console.log("已登录");
                typeof success == "function" && success();
            },
            fail: function(){
                remoteLogin(success, fail)
            }
        })
    }
    else{
        remoteLogin(sucess, fail)
    }
}

/**
 * 服务端端请求登录
 */
var remoteLogin = (sucess, fail) => {
    //调用登录接口
    wx.login({
        success: function(loginRes){
            console.log("登录获取code", loginRes);
            wx.request({
                url: LOGIN_URL,
                data: {code: loginRes.code},
                complete: function(res){
                    if(res.statusCode != 200) {  //fail
                        console.error("登陆失败", res);
                        var data = res.data || {msg: "无法请求服务器"};
                        if(typeof fail == "function"){
                            fail();
                        }
                        else{
                            wx.showModal({
                                title: "提示",
                                content: data.msg,
                                showCancel: 0,
                            });
                        }
                    }
                    else{  //success
                        console.log("login sucess", res);
                        wx.setStorage({
                            key: constant.NAMI_TOKEN,
                            data: res.data.key
                        })
                        typeof success =="function" && success();
                    }
                } 
            })
        }
    })
}

var getUserInfo = (success, fail) => {
    wx.getUserInfo({
        success: function(res){
            console.log("获取用户信息", res);
            var userInfo = res.userInfo
            if(config.fullLogin){  //需要处理unionID
                wx.request({
                    url: FULL_USER_INFO_URL,
                    data:{
                        namiToken: wx.getStorageSync(constant.NAMI_TOKEN),
                        rawData: res.rawData,
                        signature: res.signature,
                        encryptedData: res.encryptedData,
                        iv: res.iv
                    },
                    success: function(requestRes){
                        typeof success == "function" && success(userInfo)
                    }
                })
            }
            else{
                typeof success == "function" && success(userInfo);
            }
        },
        fail: function(){
            typeof fail == "function" && fail()
        }
    })
}

module.exports = {
    login: login,
    getUserInfo: getUserInfo
}