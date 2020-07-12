<template>
  <div class="content">
    <div class="title">{{ current }}</div>
    <div class="box">
      <p class="subtitle">Выберите символ: </p>
      <select v-model="current">
        <option
          v-for="(item, index) in items"
          :key="index"
          >{{ item }}</option
        >
      </select>
      <ul>
        <li
          v-for="(change, index) in changes"
          :key="index"
        >
          [{{ change.date }}] Символ изменён на
          <span class="tag is-info">{{ change.symbol }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: ['BTCUSDT', 'BNBBTC', 'ETHBTC'],
    current: 'BTCUSDT',
    changes: [],
  }),
  watch: {
    current(symbol) {
      this.$bus.$emit('symbol', symbol);

      this.changes.push({
        symbol,
        date: new Date().toLocaleString('ru', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timezone: 'UTC',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        }),
      });
    },
  },
};
</script>
