define(function (require) {
  var _ = require('lodash');
  var $ = require('jquery');
  var module = require('ui/modules').get('kibana');
  require('ui/directives/inequality');

  module.directive('pointSeriesOptions', function ($parse, $compile) {
    return {
      restrict: 'E',
      template: require('plugins/tr-k5p-echarts/controls/point_series_options.html'),
      replace: true
    };
  });
});
