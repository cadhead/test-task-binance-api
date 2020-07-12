<template>
  <div class="content">
    <p class="title">{{ symbol }}</p>
    <hr>
    <div class="wrapper">
      <div class="tile is-ancestor">
        <div class="tile">
          <glassStateTable :items="glass.bids"><p class="title">Bids</p></glassStateTable>
        </div>
        <div class="tile">
          <glassStateTable :items="glass.asks"><p class="title">Asks</p></glassStateTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import table from './table-component.vue';

export default {
  components: {
    glassStateTable: table,
  },
  data: () => ({
    glass: {
      bids: null,
      asks: null,
    },
    symbol: 'BTCUSDT',
    socket: null,
  }),
  async created() {
    await this.snapshot();

    this.listenChanges();

    this.$bus.$on('symbol', (symbol) => {
      this.symbol = symbol;

      this.socket.close();
      this.listenChanges();
    });
  },
  methods: {
    async snapshot() {
      const glass = await this.$binanceAPI.getGlassBySymbol(this.symbol);

      glass.bids = glass.bids.reverse();
      glass.asks = glass.asks.reverse();

      this.glass = glass;
    },
    listenChanges() {
      this.socket = this.$binanceAPI.subscribe(this.symbol);
      this.socket.onmessage = async (event) => {
        const data = JSON.parse(event.data);
        const asks = data.data.a ? data.data.a.filter((item) => item[1] !== 0) : [];
        const bids = data.data.a ? data.data.b.filter((item) => item[1] !== 0) : [];

        asks.reverse();
        bids.reverse();

        this.glass.asks.splice(this.glass.asks.length - asks.length, asks.length);
        this.glass.bids.splice(this.glass.bids.length - bids.length, bids.length);
        this.glass.asks = [...asks, ...this.glass.asks];
        this.glass.bids = [...bids, ...this.glass.bids];
      };
    },
  },
};
</script>
