import axios from 'axios';

export default {
  async getGlassBySymbol(symbol) {
    const glass = await axios.get(`/depth?symbol=${symbol}`);

    return glass.data;
  },
  subscribe(symbol) {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/stream?streams=${symbol.toLowerCase()}@depth@1000ms`,
    );

    return ws;
  },
};
