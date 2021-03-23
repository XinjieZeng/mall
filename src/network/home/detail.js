import axios from 'axios';

export function getProductDetailInfo(asin) {
  const instance = axios.create({
    baseURL: "https://813e810c-6137-4936-94f7-0dc452688537.mock.pstmn.io/product-details",
    params: {
      asin
    }
  })

  return instance();
}