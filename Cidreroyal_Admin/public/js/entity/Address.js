/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var Address = nga.entity('Address');


// list
Address.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('id')
      .label('ID'),
    nga.field('userId', 'reference')
      .label('用户昵称')
      .targetEntity(admin.getEntity('UserInfo'))
      .targetField(nga.field('nickname')),
    nga.field('city', 'reference')
      .label('城市')
      .targetEntity(admin.getEntity('City'))
      .targetField(nga.field('name')),
    nga.field('receiver')
      .label('收件人名称'),
    nga.field('telephone')
      .label('联系电话'),
    nga.field('default', 'choice')
      .label('是否默认')
      .choices([
        { value: '0', label: '否' },
        { value: '1', label: '是' },
      ]),
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('userId', 'reference')
      .label('用户昵称')
      .targetEntity(admin.getEntity('UserInfo'))
      .targetField(nga.field('nickname')),
  ]);


// edit
Address.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('id')
      .label('地址id')
      .editable(false),
    nga.field('userId', 'reference')
      .label('用户昵称')
      .targetEntity(admin.getEntity('UserInfo'))
      .editable(false),
    nga.field('city', 'reference')
      .label('城市')
      .targetEntity(admin.getEntity('City'))
      .targetField(nga.field('name'))
      .validation({ required: true }),
    nga.field('address', 'wysiwyg')
      .label('详细地址')
      .validation({ required: true }),
    nga.field('zip', 'number')
      .label('邮编')
      .validation({ required: true }),
    nga.field('receiver')
      .label('收件人名称')
      .validation({ required: true }),
    nga.field('telephone', 'number')
      .label('联系电话')
      .validation({ required: true }),
    nga.field('default', 'choice')
      .label('是否默认')
      .choices([
        { value: '0', label: '否' },
        { value: '1', label: '是' },
      ])
      .validation({ required: true }),
  ]);

module.exports = Address;