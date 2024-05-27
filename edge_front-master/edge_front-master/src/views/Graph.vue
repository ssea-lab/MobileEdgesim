<template>
<div >
    <h1><a href="ex_data.json">Click to Download Experimental Data</a></h1>
   <div class="outer">
        
        <div class="container">
            <div id="1"  class="item"></div>
            <h2>Server Resource Consumption under Different Algorithms</h2>

        </div>
         <div class="container">
            <div id="2"  class="item"></div>
            <h2>User Allocation Ratios under Different Algorithms</h2>

        </div>
       
    </div>
</div>
 

</template>

<script>
import echarts from "echarts";

export default {
  name: "graph",
  mounted() {
    this.drawLine();
  },

  methods: {
    drawLine() {
      let myChart = echarts.init(document.getElementById("1"));
      let myChart2 = echarts.init(document.getElementById("2"));
      let option1 = {
        xAxis: {
          type: "category",
          data: ["random", "greedy", "optimize"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [120, 200, 50],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.8)"
            }
          }
        ]
      };

      let option2 = {
        xAxis: {
          type: "category",
          data: ["random", "greedy", "optimize"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [50, 60, 90],
            type: "bar",
            showBackground: true,

            color: "blue"
          }
        ]
      };

      myChart.setOption(option1);
      myChart2.setOption(option2);
    }
  }
};
</script>

<style>
.outer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.container {
  display: flex;
  flex-direction: column;
}
.item {
  width: 600px;
  height: 600px;
}
</style>
