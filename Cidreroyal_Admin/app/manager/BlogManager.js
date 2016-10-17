/**
 * BlogManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * blog信息表管理器
 *
 * @constructor
 */
var BlogManager = function () {
  var _this = this;

  /**
     * 重写新增前置方法
     * 进行参数提前处理
     * 
     * @param {any} newData 要新增的酒类信息
     * @returns 修改后的酒类信息
     */
  this.addNewPre = function (newData) {
    // 将酒类图片转移到对应文件夹下
    var opath = config.uploadPath + JF.enums.base.SEP + newData.img;
    var npath = config.blogImgPath + JF.enums.base.SEP + newData.img;
    JF.util.file.renameFile(opath, npath);

    return newData;
  };

  /**
   * 重写删除数据后置函数
   * 进行特殊处理
   * 
   * @param {any} delData
   * @returns
   */
  this.delByIdSuf = function (delData) {
    // 删除文件夹下blog的图片
    var npath = config.blogImgPath + JF.enums.base.SEP + delData.img;
    JF.util.file.deleteFile(npath);

    return delData;
  };
};

// 添加继承
util.inherits(BlogManager, BaseManager);

module.exports = new BlogManager();