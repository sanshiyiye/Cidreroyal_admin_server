/**
 * Created by gaojun on 16/04/13.
 */

'use strict';

var Blog = nga.entity('Blog');

// list
Blog.listView()
  .perPage(config.default_perpage)
  .sortDir(config.default_order)
  .fields([
    nga.field('id')
      .label('ID'),
    nga.field('name')
      .label('blog名称'),
  ])
  .listActions(['edit', 'delete']);

// add
Blog.creationView()
  .fields([
    nga.field('name')
      .label('blog名称')
      .validation({ required: true, minlength: 1, maxlength: 100 }),
    nga.field('fpart', 'wysiwyg')
      .label('blog第一段信息')
      .validation({ required: false }),
    nga.field('bpart', 'wysiwyg')
      .label('blog剩余正文')
      .validation({ required: false }),
    nga.field('img', 'file')
      .label('展示图片')
      .uploadInformation(config.default_file_upload),
  ]);

// edit
Blog.editionView()
  .actions(['list'])
  .fields([
    nga.field('id')
      .label('blogId')
      .editable(false),
    nga.field('name')
      .label('blog名称')
      .validation({ required: true, minlength: 1, maxlength: 50 }),
    nga.field('fpart', 'wysiwyg')
      .label('blog第一段信息')
      .validation({ required: false }),
    nga.field('bpart', 'wysiwyg')
      .label('blog剩余正文')
      .validation({ required: false }),
    nga.field('img')
      .label('展示图片')
      .template('<img src="' + config.CLIENT_URL + 'files/Blog/{{ entry.values[field.name()] }}" class="img-responsive" alt="Responsive image">')
      .editable(false),
  ]);

module.exports = Blog;