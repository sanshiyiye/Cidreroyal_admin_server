/**
 * GM_OlogManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 操作日志表管理器
 *
 * @constructor
 */
var GM_OlogManager = function () {
  var _this = this;

  /**
   * 添加新的操作日志信息
   * ::异步接口，返回promise
   *
   * @param logtype 日志类型
   * @param params 日志额外参数
   * @param channel 所属平台
   * @return promise对象
   */
  this.addNewLog = function (logtype, params, channel) {
    // 验证平台数据
    if (_.isUndefined(channel) || _.isNull(channel)) {
      throw new Error('channel is not exist');
    }

    // 初始化日志数据
    var logdata = {
      channelId: channel.id,
      pubcode: channel.pubcode,
      opertype: logtype,
      logfile: JF.util.random.getRndFileTag(JF.enums.olog.LOG_FILE_TAG_PUB),
      flag: JF.enums.olog.LOG_RUNNING,
      otime: new Date().getTime(),
      remark: JSON.stringify(params),
    };

    // 构造实体
    var entity = JF.dbs.GM_Olog.build(logdata);

    // 保存
    return JF.dao.GM_OlogDao.save(entity);
  };

  /**
   * 更新日志方法
   * ::异步接口，返回promise
   *
   * @param oid 操作日志id
   * @param ologData 新的日志数据
   * @return promise
   */
  this.updateLog = function (oid, ologData) {
    var getById = function () {
      return JF.dao.GM_OlogDao.get(oid);
    };

    var modifyEntity = function (entity) {
      if (!_.isUndefined(entity) && !_.isNull(entity)) {
        // 更新
        return JF.dao.GM_OlogDao.update(entity, ologData);
      } else {
        throw new Error(JF.enums.ret.ERROR);
      }
    };

    return Q.fcall(getById).then(modifyEntity);
  };

  /**
   * 获取操作日志详细信息
   *
   * @param ologId 操作日志id
   * @param needLog 是否需要日志文件内容
   * @param res response对象
   */
  this.getOlog = function (ologId, needLog, res) {
    var ologData;

    var getById = function () {
      return JF.dao.GM_OlogDao.get(ologId);
    };

    // 读取文件信息
    var readLogFile = function (olog) {
      ologData = olog;

      // 如果需要日志文件信息
      if (needLog && olog.logfile) {
        return JF.util.file.readFile(config.logRoot + '/' + olog.logfile, null);
      }
    };

    // 构建返回数据
    var buildResData = function (fileInfo) {
      var fileinfo = fileInfo.split('\n');

      // 返回数据
      var data = {
        ret: JF.enums.ret.SUCCESS,
        olog: ologData,
        fileinfo: fileinfo,
      };
      JF.util.http.resBack(res, data);
    };

    Q.fcall(getById)
      .then(readLogFile)
      .then(buildResData)
      .catch(JF.util.http.error.bind(null, res));
  };
};

// 添加继承
util.inherits(GM_OlogManager, BaseManager);

module.exports = new GM_OlogManager();