var utils = require('../utils');

module.exports = {
    getList (req, res) {
        utils.doRequest({
            path: '/training?ignoreHide=1'
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
    get (req, res) {
        utils.doRequest({
            path: `/training/${req.params.id}`
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
