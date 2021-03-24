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

export class GoodsInfo {
  constructor(itemInfo) {
    this.title = itemInfo.title;
    this.description = itemInfo.description;
    this.rating = itemInfo.rating;
    this.price = itemInfo.buybox_winner.price;
    this.availability = itemInfo.buybox_winner.availability;
    this.shipping = itemInfo.buybox_winner.shipping;
  }
}
