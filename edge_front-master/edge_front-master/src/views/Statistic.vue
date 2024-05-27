<template>

<div class="outer">
  <div class="container" v-for="(mydata) in data" :key="mydata.id">  
        <H1 class="title">{{mydata.type}} </H1>
        <div class="diagram_container">
           <diagram class="diagram" v-for="(item) in mydata.data " 
        :id='mydata.type+item.id' 
        :title="item.title" 
        :xAxis='item.xAxis'
        :series='item.series' 
        :key="mydata.type+item.id">
        </diagram>
        </div>
       
    </div>
</div>


</template>

<script>
import Diagram from "../components/Diagram";
import axios from "axios";

export default {
  name: "statistic",
  components: {
    Diagram: Diagram
  },
  data() {
    return {
      data: []
    };
  },
  created() {
    axios
      .get("result.json")
      .then(res => {
        this.data = res.data;
        console.log(this.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.outer {
  height: 2000px;
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.title {
  order: 0;
}
.diagram_container {
  order: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.diagram {
}
</style>
