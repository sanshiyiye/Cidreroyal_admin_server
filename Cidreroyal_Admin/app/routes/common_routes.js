/**
 * Created by gaojun on 16/5/26.
 */

'use strict';

var express = require('express');
var router = express.Router();

var getLog = require(config.serverRoot + '/api/common/getLog');

// 获取日志信息
router.post('/getlog', function (req, res, next) {
  getLog(req, res);
});

module.exports = router;