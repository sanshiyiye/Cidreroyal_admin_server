/**
 * Created by gaojun on 16/6/27.
 */

'use strict';

// 获取操作日志详细信息
module.exports = function (req, res) {
  // 先判断入参
  var ologId = req.body.ologId;
  var needLog = req.body.needLog;

  // 有传参
  if (!_.isUndefined(ologId) && !_.isEqual('', ologId)
    && !_.isUndefined(needLog)) {
    JF.ma.GM_OlogManager.getOlog(ologId, needLog, res);
  } else {

  }
};