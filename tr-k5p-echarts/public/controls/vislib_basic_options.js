define(function (require) {
  var _ = require('lodash');
  var $ = require('jquery');
  var module = require('ui/modules').get('kibana');

  module.directive('vislibBasicOptions', function ($parse, $compile) {
    return {
      restrict: 'E',
      template: require('plugins/tr-k5p-echarts/controls/vislib_basic_options.html'),
      replace: true
    };
  });
});
