var fs = require('fs');
var request = require('request');
var utils = require('../utils');

module.exports = {
    getClassesType (req, res, next) {
        utils.doRequest({
            path: '/training/types'
        }).then((d) => {
            let data = {
                code: 200,
                data: d.data ? d.data : null,
                success: d.success ? d.success : false,
                msg: d.msg ? d.msg : ''
            };
            res.json(data);
        }, (d) => {
            res.json(d);
        });
    },
    getClassesTypeWithSub (req, res, next) {
        utils.doRequest({
            path: `/training/types?needSubTypes=true`
        }).then((d) => {
            let data = {
                code: 200,
                data: d.data ? d.data : null,
                success: d.success ? d.success : false,
                msg: d.msg ? d.msg : ''
            };
            res.json(data);
        }, (d) => {
            res.json(d);
        });
    }
};
