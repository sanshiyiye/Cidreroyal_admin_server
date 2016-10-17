/**
 * Created by gaojun on 15/12/11.
 */

'use strict';

var Brand = nga.entity('Brand');


// list
Brand.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('id')
      .label('ID'),
    nga.field('brandName')
      .label('品牌名称'),
  ])
  .listActions(['edit', 'delete'])
  .filters([
    nga.field('brandName')
      .label('品牌名称'),
  ]);

// add
Brand.creationView()
  .fields([
    nga.field('brandName')
      .label('品牌名称')
      .validation({required: true}),
    nga.field('brandDec')
      .label('品牌描述')
      .validation({required: true}),
  ]);

// edit
Brand.editionView()
  .actions(['list', 'delete'])
  .fields([
    nga.field('brandName')
      .label('品牌名称')
      .validation({required: true}),
    nga.field('brandDec')
      .label('品牌描述')
      .validation({required: true}),
  ]);

module.exports = Brand;