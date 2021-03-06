define(function (require) {
  var _ = require('lodash');
  var $ = require('jquery');
  var module = require('ui/modules').get('kibana');

  module.directive('lineInterpolationOption', function ($parse, $compile) {
    return {
      restrict: 'E',
      template: require('plugins/tr-k5p-echarts/controls/line_interpolation_option.html'),
      replace: true
    };
  });
});
