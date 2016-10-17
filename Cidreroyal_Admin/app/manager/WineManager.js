/**
 * WineManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 酒类型信息表管理器
 *
 * @constructor
 */
var WineManager = function () {
  var _this = this;


  /**
   * 重写新增前置方法
   * 进行参数提前处理
   * 
   * @param {any} newData 要新增的酒类信息
   * @returns 修改后的酒类信息
   */
  this.addNewPre = function (newData) {
    // 酒类规格信息不为空
    if (!_.isUndefined(newData)) {
      var norm = "";
      // 拼接起来
      _.forEach(newData.norm, function (ninfo) {
        norm = norm + ninfo.ntype + '_' + ninfo.nvalue + ',';
      });

      newData.norm = norm;
    }

    // 将酒类图片转移到对应文件夹下
    var opath = config.uploadPath + JF.enums.base.SEP + newData.img;
    var npath = config.wineImgPath + JF.enums.base.SEP + newData.img;
    JF.util.file.renameFile(opath, npath);

    return newData;
  };

  /**
   * 重写更新前置方法
   * 进行参数提前处理
   * 
   * @param {any} upData 要更新的酒类信息
   * @returns 修改后的酒类信息
   */
  this.updatePre = function (upData) {
    // 酒类规格信息不为空
    if (!_.isUndefined(upData)) {
      var norm = "";
      // 拼接起来
      _.forEach(upData.norm, function (ninfo) {
        norm = norm + ninfo.ntype + '_' + ninfo.nvalue + ',';
      });

      upData.norm = norm;
    }

    return upData;
  };

  /**
   * 重写id查找后置函数
   * 进行参数的特殊处理
   * 
   * @param {any} reData 查询出来的数据对象
   * @returns 处理后的数据对象
   */
  this.getByIdSuf = function (reData) {
    var norm = [];
    // 拆分字段
    var ninfos = _.split(reData.norm, ',');
    if (!_.isUndefined(ninfos) && !_.isEmpty(ninfos)) {
      // 遍历每个规格信息，进行处理
      _.forEach(ninfos, function (ninfo) {
        if (!_.isUndefined(ninfo) && !_.isNull(ninfo) && !_.isEqual('', ninfo)) {
          var infos = _.split(ninfo, '_');
          var snorm = {
            ntype: infos[0],
            nvalue: infos[1]
          };

          norm.push(snorm);
        }
      });
    }

    reData.norm = norm;

    return reData;
  };

  /**
   * 重写删除数据后置函数
   * 进行特殊处理
   * 
   * @param {any} delData
   * @returns
   */
  this.delByIdSuf = function (delData) {
    // 删除文件夹下酒的图片
    var npath = config.wineImgPath + JF.enums.base.SEP + delData.img;
    JF.util.file.deleteFile(npath);

    return delData;
  };
};

// 添加继承
util.inherits(WineManager, BaseManager);

module.exports = new WineManager();