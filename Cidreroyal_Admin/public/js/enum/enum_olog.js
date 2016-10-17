/**
 * Created by gaojun on 16/6/23.
 */

'use strict';

module.exports = {
  // 操作行为状态
  LOG_RUNNING: 0,       // 运行中
  LOG_SUCCESS: 1,       // 成功
  LOG_FAIL: 2,          // 失败

  // 日志类型
  LOG_TYPE_SWITCH_GEN: 1,       // 开关生成
  LOG_TYPE_SWITCH_PUB: 2,       // 开关发布
  LOG_TYPE_TAG_PUB: 3,          // tag发布

  // 日志文件名前缀
  LOG_FILE_SWITCH_GEN: 'switch.generate',       // 开关生成日志记录文件前缀
  LOG_FILE_SWITCH_PUB: 'switch.publish',        // 开关发布日志记录文件前缀
  LOG_FILE_TAG_PUB: 'tag.publish',              // tag发布日志记录文件前缀
};