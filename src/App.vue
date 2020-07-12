<template>
  <div class="container">
    <h1 class="title">SDK для взимодействия с биржей binance</h1>
    <p class="subtitle">Ориентировочное время выполнения 4-8 часов</p>
    <div class="pt-6">
      <navTabs :data="navTabsList" />
      <p>content here</p>
    </div>
  </div>
</template>

<script>
import navTabs from '@/components/navtabs-component.vue';

export default {
  name: 'App',
  components: {
    navTabs,
  },
  data() {
    return {
      navTabsList: {
        items: [
          { name: 'GlassState', niceName: 'Стаканы' },
        ],
        current: 'GlassState',
      },
    };
  },
  computed: {
    currentTabComponent() {
      return this.navTabs.current;
    },
  },
};
</script>
