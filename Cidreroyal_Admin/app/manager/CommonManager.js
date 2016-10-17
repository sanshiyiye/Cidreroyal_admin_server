/**
 * SwitchsManager.js
 * Created by gaojun on 16/6/15.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 通用信息管理器
 *
 * @constructor
 */
var CommonManager = function () {
  var _this = this;

  /**
   * 获取日志文件信息
   *
   * @param logfile 日志文件名称
   * @param res response对象
   */
  this.getLog = function (logfile, res) {
    var retLogInfo = function (fileInfo) {
      var fileinfo = fileInfo.split('\n');

      // 返回数据
      var data = {
        ret: JF.enums.ret.SUCCESS,
        fileinfo: fileinfo,
      };
      JF.util.http.resBack(res, data);
    };

    JF.util.file.readFile(config.logRoot + '/' + logfile, null)
      .then(retLogInfo)
      .catch(JF.util.http.error.bind(null, res));
  }
};

// 添加继承
util.inherits(CommonManager, BaseManager);

module.exports = new CommonManager();