<template>
  <div class="content">
    <div class="title">{{ current }}</div>
    <div class="box">
      <select v-model="current">
        <option
          v-for="(item, index) in items"
          :key="index"
          >{{ item }}</option
        >
      </select>
      <ul>
        <li>Что?</li>
        <li>Тут?</li>
        <li>Должно?</li>
        <li>Быть?</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: ['BTCUSDT', 'BNBBTC', 'ETHBTC'],
    current: 'BTCUSDT',
  }),
  watch: {
    current(symbol) {
      this.$bus.$emit('symbol', symbol);
    },
  },
};
</script>
