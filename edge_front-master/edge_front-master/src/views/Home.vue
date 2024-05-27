<template>
  <div class="container">
    <baidu-map
      :center="center"
      :zoom="zoom"
      @ready="handler"
      class="bm-view"
      :scroll-wheel-zoom="true"
    >
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-circle
        v-for="(item) in circleList"
        :key="item.id"
        :center="item.center"
        :radius="item.radius"
        stroke-color="red"
        :stroke-opacity="0.5"
        :stroke-weight="1"
      ></bm-circle>
      <bm-polyline
        v-for="(item,index) in polylineList"
        :key="index"
        :path="item"
        stroke-color="blue"
        :stroke-opacity="0.5"
        :stroke-weight="3"
      ></bm-polyline>
      <bm-point-collection
        :points="markerList"
        shape="BMAP_POINT_SHAPE_STAR"
        color="red"
        size="BMAP_POINT_SIZE_SMALL"
      ></bm-point-collection>
      <!-- <bml-curve-line v-for="(item,index) in polylineList" :key="index" :points="item" ></bml-curve-line> -->
    </baidu-map>
  </div>
</template>

<script>
// @ is an alias to /src
// import {BmlCurveLine} from 'vue-baidu-map'
import axios from "axios";
export default {
  name: "Home",
  components: {
    // BmlCurveLine
  },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 10,
      circleList: [],
      markerList: [],
      polylineList: [
        [
          { lng: 116.404, lat: 39.915 },
          { lng: 116.405, lat: 39.92 },
          { lng: 116.423493, lat: 39.907445 }
        ]
      ]
    };
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.35176;
      this.center.lat = 39.98483;
      this.zoom = 14;
    },
    shuffle(a) {
      var len = a.length;
      for (var i = 0; i < len; i++) {
        var end = len - 1;
        var index = (Math.random() * (end + 1)) >> 0;
        var t = a[end];
        a[end] = a[index];
        a[index] = t;
      }
      return a;
    },
    getServer() {
      axios
        .get("server.json")
        .then(res => {
          let sum = 100;
          for (const server of this.shuffle(res.data)) {
            if (sum < 0) break;
            sum = sum - 1;
            // if (sum % 2 != 0) continue;
            let id = server.id;
            let center = {
              lng: server.longitude,
              lat: server.latitude
            };
            let radius = server.coverage;

            let item = {
              id: id,
              center: center,
              radius: radius
            };

            this.circleList.push(item);
            this.markerList.push(center);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    getPolyline() {
      axios
        .get("trajectory.json")
        .then(res => {
          this.polylineList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getServer();
    this.getPolyline();
  }
};
</script>

<style>
.bm-view {
  width: 100%;
  height: 1000px;
  margin: 0 auto;
}
</style>
