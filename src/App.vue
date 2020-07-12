<template>
  <div class="container">
    <h1 class="title">SDK для взимодействия с биржей binance</h1>
    <p class="subtitle">Ориентировочное время выполнения 4-8 часов</p>
    <div class="pt-6">
      <navTabs
        :data="navTabsList"
        v-on:switchTab="tab => (this.navTabsList.current = tab)"
      />

      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import navTabs from '@/components/navtabs-component.vue';

export default {
  name: 'App',
  components: {
    navTabs,
    GlassState: () => import('./components/glassState-component.vue'),
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
      return this.navTabsList.current;
    },
  },
};
</script>
