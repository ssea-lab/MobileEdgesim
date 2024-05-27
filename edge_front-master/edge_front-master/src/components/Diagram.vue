<template>
    <div>
        <div :id="id" :style="{width: '600px', height: '500px'}"></div>
    </div>

</template>

<script>
import echarts from "echarts";

export default {
  name: "diagram",
  mounted() {
    this.drawLine();
  },
  props: ["id", "title", "series", "xAxis"],
  methods: {
    drawLine() {
      let myChart = echarts.init(document.getElementById(this.id));
      let option = {
        title: {
          text: this.title,
          left: "center",
          bottom: "0",
          textStyle: {
            color: "blue",
            fontStyle: "normal",
            fontWeight: "lighter",
            fontSize: "15"
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["Normal", "Random", "Greedy", "Optimize"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "50",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xAxis
        },
        yAxis: {
          type: "value"
        },
        series: this.series
      };

      myChart.setOption(option);
    }
  }
};
</script>

<style>
</style>
