/**
 * Created by gaojun on 16/04/13.
 */

'use strict';

var UserInfo = nga.entity('UserInfo');

// list
UserInfo.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('id')
      .label('ID'),
    nga.field('username')
      .label('用户名'),
    nga.field('email')
      .label('邮箱'),
    nga.field('telephone')
      .label('手机号'),
    nga.field('nickname')
      .label('昵称'),
    nga.field('state', 'choice')
      .label('状态')
      .choices([
        { value: '0', label: '禁用' },
        { value: '1', label: '正常已激活' },
      ]),
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('id')
      .label('ID'),
    nga.field('username')
      .label('用户名'),
    nga.field('email')
      .label('邮箱'),
    nga.field('telephone')
      .label('手机号'),
    nga.field('nickname')
      .label('昵称')
  ]);

// edit
UserInfo.editionView()
  .actions(['list'])
  .fields([
    nga.field('id')
      .label('用户ID')
      .editable(false),
    nga.field('username')
      .label('用户名')
      .editable(false),
    nga.field('email', 'email')
      .label('邮箱')
      .validation({ required: true }),
    nga.field('telephone', 'number')
      .label('手机号')
      .validation({ required: true }),
    nga.field('nickname')
      .label('昵称')
      .validation({ required: true }),
    nga.field('state', 'choice')
      .label('状态')
      .choices([
        { value: '0', label: '禁用' },
        { value: '1', label: '正常已激活' },
      ])
      .validation({ required: true }),
  ]);

module.exports = UserInfo;