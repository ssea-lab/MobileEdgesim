import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(ViewUI);

Vue.use(BaiduMap, {
    ak: 'YqIZWCd4x5gpYX4bWt8GqgPbacvrpIgi',
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')