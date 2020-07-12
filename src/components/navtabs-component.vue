<template>
  <div class="tabs">
    <ul>
      <li
        v-for="(tab, index) in data.items"
        :key="index"
        :class="[{ 'is-active': data.current === tab.name }]"
        @click="switchTab(tab)"
      ><a>{{ tab.niceName }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    switchTab(tab) {
      this.$emit('switchTab', tab);
    },
  },
};
</script>
