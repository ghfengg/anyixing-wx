import * as echarts from '../../components/ec-canvas/echarts';

Page({
  data: {
    ec: {
      onInit: initChart
    },
    interpretation: '这里是指标的解读内容。'
  }
});

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });
  canvas.setChart(chart);

  const option = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2024-08-28', '2024-08-29', '2024-08-30', '2024-08-31', '2024-09-01']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '指标值',
      type: 'line',
      data: [120, 132, 101, 134, 90]
    }]
  };

  chart.setOption(option);
  return chart;
}
