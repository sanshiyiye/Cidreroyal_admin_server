/**
 * Created by gaojun on 16/04/13.
 */

'use strict';

var Item = nga.entity('Item');

// list
Item.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('id')
      .label('ID'),
    nga.field('itemName')
      .label('商品名称'),
    nga.field('brandId', 'reference')
      .label('品牌名称')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('brandName')),
    nga.field('flag', 'choice')
      .label('状态')
      .choices([
        { value: '1', label: '正常' },
        { value: '2', label: '下架' },
      ]),
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('itemName')
      .label('商品名称'),
    nga.field('flag', 'choice')
      .label('状态')
      .choices([
        { value: '1', label: '正常' },
        { value: '2', label: '下架' },
      ]),
  ]);

// add
Item.creationView()
  .fields([
    nga.field('itemName')
      .label('商品名称')
      .validation({required: true}),
    nga.field('itemDec', 'wysiwyg')
      .label('商品描述'),
    nga.field('brandId', 'reference')
      .label('品牌名称')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('brandName'))
      .validation({required: true}),
    nga.field('flag', 'choice')
      .label('状态')
      .choices([
        { value: '1', label: '正常' },
        { value: '2', label: '下架' },
      ])
      .validation({required: true}),
  ]);

// edit
Item.editionView()
  .actions(['list'])
  .fields([
    nga.field('id')
      .label('商品id')
      .editable(false),
    nga.field('itemName')
      .label('商品名称')
      .validation({required: true}),
    nga.field('itemDec', 'wysiwyg')
      .label('商品描述'),
    nga.field('brandId', 'reference')
      .label('品牌名称')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('brandName'))
      .validation({required: true}),
    nga.field('flag', 'choice')
      .label('状态')
      .choices([
        { value: '1', label: '正常' },
        { value: '2', label: '下架' },
      ])
      .validation({required: true}),
  ]);

module.exports = Item;