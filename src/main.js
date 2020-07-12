import Vue from 'vue';
import axios from 'axios';

import Core from './plugins/app-core';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Core);

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://www.binance.com/api/v3/';

new Vue({
  render: (h) => h(App),
}).$mount('#app');
