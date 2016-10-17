/**
 * Created by gaojun on 16/6/21.
 */

'use strict';


var noticeSrv = function (notification) {
  function successLog(noticeInfo) {
    notification.log(noticeInfo, { addnCls: 'humane-flatty-success' });
  }

  function errorLog(noticeInfo) {
    notification.log(noticeInfo, { addnCls: 'humane-flatty-error' });
  }

  return {
    successLog: successLog,
    errorLog: errorLog,
  };
};

noticeSrv.$inject = ['notification'];

module.exports = noticeSrv;