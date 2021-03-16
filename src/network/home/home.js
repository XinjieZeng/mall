import axios from 'axios';

export function getHomeMultidata() {
  const instance = axios.create({
    baseURL: 'https://api.rainforestapi.com/request',
    params: {
      api_key:'D17BCF1EABDC4F2DB39BFBF2FCA6677F',
      type: 'bestsellers',
      url: 'https://www.amazon.com/s/zgbs/pc/516866'
    }
  })
  return instance();
}