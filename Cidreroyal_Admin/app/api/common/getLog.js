/**
 * Created by gaojun on 16/6/12.
 */

'use strict';

// 根据平台和区 查询开关信息
module.exports = function (req, res) {
  // 先判断入参
  var logfile = req.body.logfile;

  // 有传参
  if (!_.isUndefined(logfile) && !_.isEqual('', logfile)) {
    JF.ma.CommonManager.getLog(logfile, res);
  } else {

  }
};