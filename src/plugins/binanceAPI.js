import axios from 'axios';

export default {
  async getGlassBySymbol(symbol) {
    const glass = await axios.get(`/depth?symbol=${symbol}`);

    return glass.data;
  },
  subscribe(symbol) {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/stream?streams=${symbol}@depth@1000ms`,

      // АПИ даёт выбор между 1000 и 100 мс,
      // не вижу смысла пилить костыли таймаутом и делать 500.
    );

    return ws;
  },
};
