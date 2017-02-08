var login = require("./lib/login.js"),
    http = require("./lib/http.js")

module.exports = {
    login: login.login,
    getUserInfo: login.getUserInfo,
    request: http.request
}