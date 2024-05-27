<template>
  <div class="layout">
    <Sider :style="{height: '2500px',float:'left' }">
      <Menu theme="dark" width="auto" :open-names="['1','2']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            Mobile Service Deployment
          </template>
          <MenuItem @click="goToMap" name="1-1"><span @click="goToMap">ResultDisplay</span></MenuItem>
          <MenuItem @click="goToConfig" name="1-2"><span @click="goToConfig">RunSimulation</span></MenuItem>
          <MenuItem @click="goToSta" name="1-4"><span @click="goToSta">AnalyzeData</span></MenuItem>
        </Submenu>

        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            User Assignment
          </template>
          <MenuItem @click="goToUserEnv" name="2-1"><span @click="goToUserEnv">ResultDisplay</span></MenuItem>
          <MenuItem @click="goToExp" name="2-3"><span @click="goToExp">RunSimulation</span></MenuItem>
          <MenuItem @click="goToGraph" name="2-4"><span @click="goToGraph">AnalyzeData</span></MenuItem>
        </Submenu>

      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px',height: '1500px'}">

      <Content :style="{padding: '0 16px 16px'}">

        <Card>
          <div style="minHeight: 2500px">

            <component :is="compo"></component>



          </div>
        </Card>

      </Content>

    </Layout>
  </div>
</template>
<script>
  import Home from "./Home";
  import Config from "./Config";
  import Statistic from "./Statistic";
  import Exp from "./Exp";
  import Env from "./Env";
  import Graph from "./Graph";
  import Res from "./Res";
  export default {
    name: "Main",
    components: {
      Home,
      Statistic,
      Config,
      Exp,
      Env,
      Graph,
      Res
    },
    data() {
      return {
        compo: "home"
      };
    },
    methods: {
      goToMap() {
        this.compo = "home";
      },
      goToConfig() {
        this.compo = "config";
      },
      goToExp() {
        this.compo = "exp";
      },
      goToSta() {
        this.compo = "res";
      },
      goToUserEnv() {
        this.compo = "env";
      },
      goToGraph() {
        this.compo = "graph";
      }
    }
  };
</script>
<style scoped>
  .layout {
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
</style>