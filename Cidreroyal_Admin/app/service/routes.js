/**
 * Created by gaojun on 15/10/26.
 */

'use strict';

var routes = require('../routes/index');
var common = require('../routes/common_routes');
var olog = require('../routes/olog_routes');

module.exports = function (app) {
  app.use('/', routes);

  // 基础模块
  app.use('/common', common);

  // 操作日志模块
  app.use('/olog', olog);
};