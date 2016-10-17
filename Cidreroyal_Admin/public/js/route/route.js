/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var route = function ($urlRouterProvider, $stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'loginCtrl',
  });

  /* 打包模块 start */

  $stateProvider.state('pubtag', {
    parent: 'main',
    url: '/pubtag',
    templateUrl: '/views/package/pubtag.html',
    controller: 'tagCtrl',
  });

  /* 打包模块 end */


  /* 开关模块 start */

  $stateProvider.state('switch/view', {
    parent: 'main',
    url: '/switch/view',
    templateUrl: '/views/switch/view.html',
    controller: 'switchCtrl',
  });

  $stateProvider.state('switch/edit', {
    parent: 'main',
    url: '/switch/edit',
    templateUrl: '/views/switch/edit.html',
    controller: 'switchCtrl',
    params: {'switchs': null, 'switchCommons': null, 'schannel': null, 'szone': null},
  });

  $stateProvider.state('switch/editend', {
    parent: 'main',
    url: '/switch/editend',
    templateUrl: '/views/switch/editend.html',
    controller: 'switchCtrl',
    params: {'logfile': null, 'schannel': null, 'szone': null},
  });

  $stateProvider.state('switch/publish', {
    parent: 'main',
    url: '/switch/publish',
    templateUrl: '/views/switch/publish.html',
    controller: 'switchCtrl',
  });

  $stateProvider.state('switch/publishend', {
    parent: 'main',
    url: '/switch/publishend',
    templateUrl: '/views/switch/publishend.html',
    controller: 'switchCtrl',
    params: {'logfile': null, 'schannel': null},
  });

  /* 开关模块 end */


  /* 操作日志模块 start */

  $stateProvider.state('olog/logdetail', {
    parent: 'main',
    url: '/olog/logdetail',
    templateUrl: '/views/olog/ologDetail.html',
    controller: 'ologCtrl',
    params: {'olog': null},
  });

  /* 操作日志模块 end */

  $stateProvider.state('404', {
    url: '/404',
    templateUrl: '/views/404.html',
  });

  $urlRouterProvider.when('', '/login');
  $urlRouterProvider.otherwise('/404');
};

module.exports = route;