var express = require('express');
let controllers = require('../controllers');
var router = express.Router();

// 课程中心-课程列表
router.get('/classes/getList', controllers.classes.getList);
// 课程中心-获取单个课程，用于回填表单
router.get('/classes/get/:id', controllers.classes.get);

// 通用字典接口--课程类型数据
router.get('/common/getClassesType', controllers.common.getClassesType);
// 通用字典接口--课程子分类数据
router.get('/common/getClassesTypeWithSub', controllers.common.getClassesTypeWithSub);

module.exports = router;

