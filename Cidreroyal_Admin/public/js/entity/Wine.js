/**
 * Created by gaojun on 16/04/13.
 */

'use strict';

var Wine = nga.entity('Wine');

// list
Wine.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('id')
      .label('ID'),
    nga.field('name')
      .label('西打酒名称'),
  ])
  .listActions(['edit', 'delete']);

// add
Wine.creationView()
  .fields([
    nga.field('name')
      .label('西打酒名称')
      .validation({ required: true, minlength: 1, maxlength: 50 }),
    nga.field('content')
      .label('含量信息')
      .validation({ required: false }),
    nga.field('desc', 'wysiwyg')
      .label('详细描述')
      .validation({ required: false }),
    nga.field('img', 'file')
      .label('展示图片')
      .uploadInformation(config.default_file_upload),
    nga.field('norm', 'embedded_list')
      .label('规格信息')
      .targetFields([ // choose another set of fields
        nga.field('ntype', 'choice')
          .label('容量类型')
          .choices([
            { value: '1', label: '玻璃瓶装' },
            { value: '2', label: '大玻璃瓶装' },
            { value: '3', label: '酒桶装' },
          ])
          .validation({ required: true }),
        nga.field('nvalue')
          .label('容量值')
          .attributes({ placeholder: '0.7升、30-50升 等格式' })
          .validation({ required: true })
      ]),
  ]);

// edit
Wine.editionView()
  .actions(['list'])
  .fields([
    nga.field('id')
      .label('酒id')
      .editable(false),
    nga.field('name')
      .label('西打酒名称')
      .validation({ required: true, minlength: 1, maxlength: 50 }),
    nga.field('content')
      .label('含量信息')
      .validation({ required: false }),
    nga.field('desc', 'wysiwyg')
      .label('详细描述')
      .validation({ required: false }),
    nga.field('img')
      .label('展示图片')
      .template('<img src="' + config.CLIENT_URL + 'files/wine/{{ entry.values[field.name()] }}" class="img-responsive" alt="Responsive image">')
      .editable(false),
    nga.field('norm', 'embedded_list')
      .label('规格信息')
      .targetFields([ // choose another set of fields
        nga.field('ntype', 'choice')
          .label('容量类型')
          .choices([
            { value: '1', label: '玻璃瓶装' },
            { value: '2', label: '大玻璃瓶装' },
            { value: '3', label: '酒桶装' },
          ])
          .validation({ required: true }),
        nga.field('nvalue')
          .label('容量值')
          .attributes({ placeholder: '0.7升、30-50升 等格式' })
          .validation({ required: true })
      ]),
  ]);

module.exports = Wine;