var request = require('request');
var config = require('../config');

module.exports = {

    /* 请求共用方法
     * options.method  请求方法，默认GET
     * options.path  请求路径例如 /managers/login ， get请求还需要加入 ? 后附带参数
     * options.form  POST请求需要加入form表单数据
    */
    doRequest (options) {
        options.method = options.method ? options.method : 'GET';
        options.headers = options.headers ? options.headers : {};
        options.headers['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36 el fuck the world';
        return new Promise((resolve, reject) => {
            let callback = function (err, response, body) {
                if (err) {
                    reject({
                        success: false,
                        msg: `后台接口异常：${err}`,
                        data: null,
                        code: 500
                    });
                    return;
                }
                if (response.statusCode === 200) {
                    resolve(JSON.parse(body));
                } else {
                    console.log(body);
                    reject({
                        success: false,
                        msg: `服务器错误`,
                        data: null,
                        code: 500
                    });
                }
            };

            if (options.method === 'GET') {
                request.get({
                    url: config.serverHost + options.path,
                    headers: options.headers
                }, callback);
            } else if (options.method === 'POST') {
                request.post({
                    url: config.serverHost + options.path,
                    form: options.form,
                    headers: options.headers
                }, callback);
            }
        });
    },

    // 获取客户端ip地址
    getClientIp (req) {
        let forwardedIpsStr = req.header('x-forwarded-for');
        var ipAddress = forwardedIpsStr ? forwardedIpsStr.split(',')[0] : req.connection.remoteAddress;
        return ipAddress;
    }
}
