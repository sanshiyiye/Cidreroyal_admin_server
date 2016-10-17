/**
 * 数据库模块service类
 * Created by auto tool.
 */

'use strict';

var address = require(config.serverRoot + "/model/Address");
var gm_menu = require(config.serverRoot + "/model/GM_Menu");
var gm_olog = require(config.serverRoot + "/model/GM_Olog");
var gm_role = require(config.serverRoot + "/model/GM_Role");
var gm_user = require(config.serverRoot + "/model/GM_User");
var blog = require(config.serverRoot + "/model/Blog");
var brand = require(config.serverRoot + "/model/Brand");
var cart = require(config.serverRoot + "/model/Cart");
var city = require(config.serverRoot + "/model/City");
var item = require(config.serverRoot + "/model/Item");
var itemsku = require(config.serverRoot + "/model/ItemSku");
var userinfo = require(config.serverRoot + "/model/UserInfo");
var wine = require(config.serverRoot + "/model/Wine");



// 数据库model绑定映射
module.exports = function (sequelize, serverSequelize) {
  var dbModels = {
    Address: address.Address(serverSequelize),
    GM_Menu: gm_menu.GM_Menu(sequelize),
    GM_Olog: gm_olog.GM_Olog(sequelize),
    GM_Role: gm_role.GM_Role(sequelize),
    GM_User: gm_user.GM_User(sequelize),
    Blog: blog.Blog(serverSequelize),
    Brand: brand.Brand(serverSequelize),
    Cart: cart.Cart(serverSequelize),
    City: city.City(serverSequelize),
    Item: item.Item(serverSequelize),
    ItemSku: itemsku.ItemSku(serverSequelize),
    UserInfo: userinfo.UserInfo(serverSequelize),
    Wine: wine.Wine(serverSequelize),
    
  };

  // 关联关系

  return dbModels;
};