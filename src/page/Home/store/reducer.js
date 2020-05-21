import { fromJS } from 'immutable';
import { constants } from '.';

const defaultState = fromJS({
  discountData: [],
  likeData: [],
  pageCount: 0
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.DISCOUNT_DATA:
      return getDiscountData(state, action);
    case constants.LIKE_DATA:
      return getLikeData(state, action);
    // 不加会报错
    default:
      return state;
  }
}

const getDiscountData = (state, action) => {
  return state.merge({
    discountData: action.discountData
  })
}

const getLikeData = (state, action) => {
  let pageCount = state.get('pageCount') + 1,
    likeData = state.get('likeData').concat(action.likeData)
  return state.merge({
    likeData,
    pageCount
  })
}