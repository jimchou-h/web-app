import * as constants from './constants';
import { get } from '../../../assets/service';

export const discountsData = (discountData) => ({
  type: constants.DISCOUNT_DATA,
  discountData
})

export const likesData = (likeData) => ({
  type: constants.LIKE_DATA,
  likeData
})

export const getDiscountsData = () => {
  return (dispatch) => {
    get(`/products/discounts.json`).then(data => {
      return dispatch(discountsData(data))
    })
  }
}

export const getLikesData = () => {
  return (dispatch) => {
    get(`/products/likes.json`).then(data => {
      return dispatch(likesData(data))
    })
  }
}