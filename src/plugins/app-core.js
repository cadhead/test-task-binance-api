import EventBus from './EventBus';
import Api from './binanceAPI';

export default {
  install(Vue) {
    Object.defineProperties(Vue.prototype, {
      $bus: {
        get() {
          return EventBus;
        },
      },
      $binanceAPI: {
        get() {
          return Api;
        },
      },
    });
  },
};
