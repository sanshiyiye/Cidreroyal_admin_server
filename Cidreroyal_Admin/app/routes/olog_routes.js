/**
 * Created by gaojun on 16/5/26.
 */

'use strict';

var express = require('express');
var router = express.Router();

var getOlog = require(config.serverRoot + '/api/olog/getOlog');

// 获取操作信息详细信息
router.post('/getOlog', function (req, res, next) {
  getOlog(req, res);
});

module.exports = router;