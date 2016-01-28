module.exports = function(kibana) {
  return new kibana.Plugin({
    uiExports: {
      visTypes: ['plugins/tr-k5p-echarts/tr-k5p-echarts']
    }
  });
};
