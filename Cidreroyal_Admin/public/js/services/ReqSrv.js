/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var reqSrv = function ($http) {
  var host = config.local_url;
  //alert(host);

  return {
    // 重置服务端url方法
    resetHost: function (newhost) {
      config.local_url = newhost;
      host = newhost;
    },


    // login request
    login: function (user) {
      return $http.post(host + 'login', {user: user}
        , {ignoreAuthModule: true});
    },

    // logout request
    logout: function () {
      return $http.post(host + 'logout', {}, {ignoreAuthModule: true});
    },

    // loadChannels request
    loadChannels: function () {
      return $http.post(host + 'channel/loadChannels', {});
    },

    // querySwitch request
    querySwitch: function (channel, zone) {
      return $http.post(host + 'switchs/query',
        {channel: channel, zone: zone});
    },

    // editSwitch request
    editSwitch: function (channel, zone, editSwitchs) {
      return $http.post(host + 'switchs/edit',
        {channel: channel, zone: zone, editSwitchs: editSwitchs});
    },

    // pubSwitch request
    pubSwitch: function (channel) {
      return $http.post(host + 'switchs/publish', {channel: channel});
    },

    // reqLog request
    reqLog: function (logfile) {
      return $http.post(host + 'common/getlog', {logfile: logfile});
    },

    // getLastVersions request
    getLastVersions: function (channelId, dataNum) {
      return $http.post(host + 'version/getLastVersions',
        {channelId: channelId, num: dataNum});
    },

    // pubtag request
    pubtag: function (schannel, nversion, sversion, remark) {
      return $http.post(host + 'version/pubtag',
        {channelId: schannel, newver: nversion, srcver: sversion, remark: remark});
    },

    // reqOlog request
    getOlog: function (ologId, needLog) {
      return $http.post(host + 'olog/getOlog', {ologId: ologId, needLog: needLog});
    },

    // game request
    game: function () {
      return $http.post(host + 'game', {});
    },

  }
};

reqSrv.$inject = ['$http'];

module.exports = reqSrv;