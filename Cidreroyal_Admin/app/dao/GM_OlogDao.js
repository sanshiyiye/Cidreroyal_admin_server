/**
 * GM_OlogDao.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseDao = require(config.serverRoot + '/dao/base/BaseDao');

/**
 * 操作日志表数据库层操作类
 *
 * @constructor
 */
var GM_OlogDao = function (GM_OlogModel) {
  this.model = GM_OlogModel;

};

// 添加继承
util.inherits(GM_OlogDao, BaseDao);

module.exports = GM_OlogDao;