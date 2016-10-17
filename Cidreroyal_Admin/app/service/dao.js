/**
 * dao实例类
 * Created by auto tool.
 */

'use strict';

var AddressDao = require(config.serverRoot + '/dao/AddressDao');
var GM_MenuDao = require(config.serverRoot + '/dao/GM_MenuDao');
var GM_OlogDao = require(config.serverRoot + '/dao/GM_OlogDao');
var GM_RoleDao = require(config.serverRoot + '/dao/GM_RoleDao');
var GM_UserDao = require(config.serverRoot + '/dao/GM_UserDao');
var BlogDao = require(config.serverRoot + '/dao/BlogDao');
var BrandDao = require(config.serverRoot + '/dao/BrandDao');
var CartDao = require(config.serverRoot + '/dao/CartDao');
var CityDao = require(config.serverRoot + '/dao/CityDao');
var ItemDao = require(config.serverRoot + '/dao/ItemDao');
var ItemSkuDao = require(config.serverRoot + '/dao/ItemSkuDao');
var UserInfoDao = require(config.serverRoot + '/dao/UserInfoDao');
var WineDao = require(config.serverRoot + '/dao/WineDao');


module.exports = function (dbs) {
  var dao = {};

  dao.AddressDao = new AddressDao(dbs.Address);
  dao.GM_MenuDao = new GM_MenuDao(dbs.GM_Menu);
  dao.GM_OlogDao = new GM_OlogDao(dbs.GM_Olog);
  dao.GM_RoleDao = new GM_RoleDao(dbs.GM_Role);
  dao.GM_UserDao = new GM_UserDao(dbs.GM_User);
  dao.BlogDao = new BlogDao(dbs.Blog);
  dao.BrandDao = new BrandDao(dbs.Brand);
  dao.CartDao = new CartDao(dbs.Cart);
  dao.CityDao = new CityDao(dbs.City);
  dao.ItemDao = new ItemDao(dbs.Item);
  dao.ItemSkuDao = new ItemSkuDao(dbs.ItemSku);
  dao.UserInfoDao = new UserInfoDao(dbs.UserInfo);
  dao.WineDao = new WineDao(dbs.Wine);
  

  return dao;
};