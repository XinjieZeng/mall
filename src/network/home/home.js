import axios from 'axios';

export function getHomeMultidata() {
  const instance = axios.create({
    baseURL: 'https://813e810c-6137-4936-94f7-0dc452688537.mock.pstmn.io/bestseller/women-fashion',
    // params: {
    //   api_key:'D17BCF1EABDC4F2DB39BFBF2FCA6677F',
    //   type: 'bestsellers',
    //   url: 'https%3A%2F%2Fwww.amazon.com%2FBest-Sellers-Womens-Fashion/zgbs/fashion%2Fzgbs%2Fpc%2F516866'
    // }
  })
  return instance();
}

