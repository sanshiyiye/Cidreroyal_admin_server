/**
 * Created by gaojun on 16/6/24.
 */

'use strict';

/**
 * Edition field for a multiline HTML string - a rich text editor.
 *
 * @example <jf-wysiwyg-field field="field" value="value"></jf-wysiwyg-field>
 */
var jfWysiwygField = function () {
  return {
    scope: {
      field: '=',
      value: '='
    },
    restrict: 'E',
    link: function (scope, element) {
    },
    template: '<div text-angular ta-unsafe-sanitizer="true" ng-model="field" ' +
    'ta-text-editor-class="border-around" ta-html-editor-class="border-around">' +
    '</div>'
  };
};

jfWysiwygField.$inject = [];

module.exports = jfWysiwygField;