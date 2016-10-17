/**
 * GM_Olog.js
 * Created by auto tool.
 */

'use strict';

var Sequelize = require('sequelize');

function db_init(sequelize) {
  // 用户信息表
  var GM_Olog = sequelize.define('gm_olog', {
    
      id: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: true,
        field: "id",
        
        comment: "唯一ID",
        primaryKey: true,
        autoIncrement: true,
      },
    
      opertype: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        unique: false,
        field: "opertype",
        defaultValue: 0,
        comment: "操作类型",
        
      },
    
      channelid: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: false,
        field: "channelid",
        defaultValue: 0,
        comment: "渠道id",
        
      },
    
      pubcode: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: false,
        field: "pubcode",
        defaultValue: "",
        comment: "渠道发布code",
        
      },
    
      logfile: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: false,
        field: "logfile",
        defaultValue: "",
        comment: "日志文件名称",
        
      },
    
      flag: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        unique: false,
        field: "flag",
        defaultValue: 0,
        comment: "标识(0操作中 1成功 2失败)",
        
      },
    
      otime: {
        type: Sequelize.BIGINT(13),
        allowNull: true,
        unique: false,
        field: "otime",
        defaultValue: 0,
        comment: "操作时间",
        
      },
    
      remark: {
        type: Sequelize.STRING(255),
        allowNull: true,
        unique: false,
        field: "remark",
        defaultValue: "{}",
        comment: "备注",
        
      },
    
  }, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      
    ],
  });

  GM_Olog.sync();

  return GM_Olog;
}

exports.GM_Olog = function (sequelize) {
  return db_init(sequelize);
};