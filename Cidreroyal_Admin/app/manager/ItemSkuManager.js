/**
 * ItemSkuManager.js
 * Created by auto tool.
 */

'use strict';
var util = require('util');
var BaseManager = require(config.serverRoot + '/manager/base/BaseManager');

/**
 * 商品sku信息表管理器
 *
 * @constructor
 */
var ItemSkuManager = function () {
  var _this = this;

  /**
   * 重写新增前置方法
   * 进行参数提前处理
   * 
   * @param {any} newData 要新增的商品sku信息
   * @returns 修改后的商品sku信息
   */
  this.addNewPre = function (newData) {

    // 将商品sku图片转移到对应文件夹下
    var opath1 = config.uploadPath + JF.enums.base.SEP + newData.simimg;
    var npath1 = config.itemskuImgPath + JF.enums.base.SEP + 'simimg' + JF.enums.base.SEP + newData.simimg;
    JF.util.file.renameFile(opath1, npath1);

    // 将商品sku图片转移到对应文件夹下
    var opath2 = config.uploadPath + JF.enums.base.SEP + newData.img;
    var npath2 = config.itemskuImgPath + JF.enums.base.SEP + 'img' + JF.enums.base.SEP + newData.img;
    JF.util.file.renameFile(opath2, npath2);


    /**
     * 更新商品的品牌id 进行赋值操作
     * 
     * @param {any} entity
     * @returns
     */
    var doRes = function (entity) {
      var itemData = {};
      if (!_.isUndefined(entity) && !_.isNull(entity)) {
        itemData = entity.dataValues;
      }

      // 品牌id 赋值      
      newData.brandId = itemData.brandId;

      return newData;
    };

    // 异步请求商品信息并将品牌id获取到    
    return Q.fcall(JF.ma.ItemManager.getItemById.bind(null, newData.itemId))
      .then(doRes)
      .then(_this.skuDefaultHandle.bind(null, newData));
  };

  /**
   * 重写更新前置方法
   * 进行参数提前处理
   *
   * @param upData 更新数据
   * @return {{}}
   */
  this.updatePre = function (upData) {
    return _this.skuDefaultHandle(upData);
  };

  /**
   * 判断新增或更新数据是否默认绑定商品
   * 如果绑定，则要将其他已绑定关系解除默认绑定
   * 
   * @param {any} newData 商品sku信息
   * @returns promise
   */
  this.skuDefaultHandle = function (newData) {
    var isDefault = newData.default;
    var itemId = newData.itemId;

    /**
     * 如果新数据需要默认关联商品
     * 则查询该商品是否有关联其他商品sku
     * 
     * @returns 
     */
    var defaultJudge = function () {
      // 新的默认，需要把同商品 其他默认的改为非默认
      if (JF.enums.item.SKU_DEFAULT === parseInt(isDefault)) {
        var query = {
          'itemId': JF.util.db.buildQueryParam(itemId, JF.enums.db.e),
          'default': JF.util.db.buildQueryParam(isDefault, JF.enums.db.e),
        };

        var udata = {
          'default': JF.enums.item.SKU_NOT_DEFAULT,
        };

        // 查询该商品已经绑定的默认商品sku        
        return JF.dao.ItemSkuDao.updateAll(query, udata);
      }

      return null;
    };

    var resUpd = function (ret) {
      return newData;
    };

    return Q.fcall(defaultJudge)
      .then(resUpd);
  };

  /**
   * 重写删除数据后置函数
   * 进行特殊处理
   * 
   * @param {any} delData
   * @returns
   */
  this.delByIdSuf = function (delData) {
    // 删除文件夹下商品sku的图片
    var npath1 = config.itemskuImgPath + JF.enums.base.SEP + 'simimg' + JF.enums.base.SEP + newData.simimg;
    JF.util.file.deleteFile(npath1);

    // 删除文件夹下商品sku的图片
    var npath2 = config.itemskuImgPath + JF.enums.base.SEP + 'img' + JF.enums.base.SEP + newData.img;
    JF.util.file.deleteFile(npath2);

    return delData;
  };
};

// 添加继承
util.inherits(ItemSkuManager, BaseManager);

module.exports = new ItemSkuManager();