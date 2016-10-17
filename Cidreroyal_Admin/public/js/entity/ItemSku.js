/**
 * Created by gaojun on 16/04/13.
 */

'use strict';

var ItemSku = nga.entity('ItemSku');

// list
ItemSku.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('id')
      .label('ID'),
    nga.field('brandId', 'reference')
      .label('品牌名称')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('brandName')),
    nga.field('itemId', 'reference')
      .label('商品名称')
      .targetEntity(admin.getEntity('Item'))
      .targetField(nga.field('itemName')),
    nga.field('price')
      .label('价格(￥)'),
    nga.field('size')
      .label('商品尺寸'),
    nga.field('stock')
      .label('商品库存'),
    nga.field('flag', 'choice')
      .label('状态')
      .choices([
        { value: 1, label: '正常' },
        { value: 2, label: '下架' },
      ]),
    nga.field('default', 'choice')
      .label('是否默认关联商品')
      .choices([
        { value: 0, label: '否' },
        { value: 1, label: '是' },
      ]),
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('itemId', 'reference')
      .label('商品名称')
      .targetEntity(admin.getEntity('Item'))
      .targetField(nga.field('itemName')),
    nga.field('brandId', 'reference')
      .label('品牌名称')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('brandName')),
    nga.field('flag', 'choice')
      .label('状态')
      .choices([
        { value: 1, label: '正常' },
        { value: 2, label: '下架' },
      ]),
  ]);

// add
ItemSku.creationView()
  .fields([
    nga.field('itemId', 'reference')
      .label('商品名称')
      .targetEntity(admin.getEntity('Item'))
      .targetField(nga.field('itemName'))
      .validation({ required: true }),
    nga.field('oldPrice', 'float')
      .label('原价格(￥)')
      .validation({ required: true }),
    nga.field('price', 'float')
      .label('现价格(￥)')
      .validation({ required: true }),
    nga.field('size', 'float')
      .label('商品尺寸')
      .validation({ required: true }),
    nga.field('stock', 'number')
      .label('商品库存')
      .attributes({ placeholder: '无数量限制则填-1' })
      .validation({ required: true }),
    nga.field('simimg', 'file')
      .label('商品缩略图')
      .uploadInformation(config.default_file_upload),
    nga.field('img', 'file')
      .label('商品原图')
      .uploadInformation(config.default_file_upload),
    nga.field('flag', 'choice')
      .label('状态')
      .choices([
        { value: 1, label: '正常' },
        { value: 2, label: '下架' },
      ])
      .validation({ required: true }),
    nga.field('default', 'choice')
      .label('是否默认关联商品')
      .choices([
        { value: 0, label: '否' },
        { value: 1, label: '是' },
      ])
      .validation({ required: true }),
  ]);

// edit
ItemSku.editionView()
  .actions(['list'])
  .fields([
    nga.field('id')
      .label('商品id')
      .editable(false),
    nga.field('brandId', 'reference')
      .label('品牌名称')
      .targetEntity(admin.getEntity('Brand'))
      .targetField(nga.field('brandName'))
      .editable(false),
    nga.field('itemId', 'reference')
      .label('商品名称')
      .targetEntity(admin.getEntity('Item'))
      .targetField(nga.field('itemName'))
      .validation({ required: true }),
    nga.field('oldPrice', 'float')
      .label('原价格(￥)')
      .validation({ required: true }),
    nga.field('price', 'float')
      .label('现价格(￥)')
      .validation({ required: true }),
    nga.field('size', 'float')
      .label('商品尺寸')
      .validation({ required: true }),
    nga.field('stock', 'number')
      .label('商品库存')
      .attributes({ placeholder: '无数量限制则填-1' })
      .validation({ required: true }),
    nga.field('simimg', 'file')
      .label('商品缩略图')
      .template('<img src="' + config.CLIENT_URL + 'files/itemsku/simimg/{{ entry.values[field.name()] }}" class="img-responsive" alt="Responsive image">')
      .editable(false),
    nga.field('img')
      .label('商品原图')
      .template('<img src="' + config.CLIENT_URL + 'files/itemsku/img/{{ entry.values[field.name()] }}" class="img-responsive" alt="Responsive image">')
      .editable(false),
    nga.field('flag', 'choice')
      .label('状态')
      .choices([
        { value: 1, label: '正常' },
        { value: 2, label: '下架' },
      ])
      .validation({ required: true }),
    nga.field('default', 'choice')
      .label('是否默认关联商品')
      .choices([
        { value: 0, label: '否' },
        { value: 1, label: '是' },
      ])
      .validation({ required: true }),
  ]);

module.exports = ItemSku;