import Vue from 'vue';
import axios from 'axios';

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import Core from './plugins/app-core';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Core);
Vue.use(Buefy);

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://www.binance.com/api/v3/';

new Vue({
  render: (h) => h(App),
}).$mount('#app');
