/**
 * Created by gaojun on 16/6/27.
 */

'use strict';

var ologCtrl = function ($rootScope, $scope, $state, $timeout, reqSrv, noticeSrv) {

  // 操作日志对象
  $scope.olog = $stateParams.olog || {};
  $scope.logInfo = [];
  $scope.logIng = true;

  var timer = null;
  var reqLogCron = function () {
    if (!_.isNull(timer)) {
      $timeout.cancel(timer);
    }
    timer = $timeout(reqOlog, 5000);
  };

  // 向服务器请求开关日志
  var reqOlog = function () {
    console.log("request olog send, log file->", $scope.logfile);

    // 发送请求
    var promise = reqSrv.getOlog($scope.olog.id, true);
    // 返回处理
    promise.success(function (data, status) {
      if (0 == data.ret) {
        $scope.olog = data.olog;
        $scope.logInfo = data.fileinfo;

        // 判断是否完成
        if (enums.olog.LOG_SUCCESS === $scope.olog.flag) {
          $scope.logIng = false;
          $scope.logSuccess = true;
          noticeSrv.successLog('操作已成功结束，可继续进行操作！');
        } else if (enums.olog.LOG_FAIL === $scope.olog.flag) {
          $scope.logIng = false;
          $scope.logError = true;
          noticeSrv.errorLog('操作失败，请联系管理员查看问题！');
        } else {
          reqLogCron();
        }
      } else {
        reqLogCron();
      }
    })
      .error(function (data, status) {
        reqLogCron();
      });
  };


  /**
   * 获取操作日志信息
   */
  $scope.initOLog = function () {
    // 5秒后向服务器获取一次日志信息
    reqLogCron();

    // crontroller 摧毁的时候检查 timer，如果还有则移除掉
    $scope.$on(
      "$destroy",
      function (event) {
        if (!_.isNull(timer)) {
          $timeout.cancel(timer);
        }
      }
    );
  };
};

ologCtrl.$inject = ['$rootScope', '$scope', '$state', '$timeout', 'reqSrv', 'noticeSrv'];

module.exports = ologCtrl;