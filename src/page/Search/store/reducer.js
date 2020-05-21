import { fromJS } from 'immutable';
import { constants } from '.';

const defaultState = fromJS({
  inputText: '',
  popularKeywordData: [],
  relatedKeywordData: [],
  historyKeywordData: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.POPULAR_KEYWORD_DATA:
      return getPopularKeywordData(state, action);
    case constants.TEXT_DATA:
      return setTextData(state, action);
    case constants.RELATED_KEYWORD_DATA:
      return getRelatedKeywordData(state, action);
    case constants.ADD_HISTORY_KEYWORD:
      return addHistoryKeyword(state, action);
    case constants.CLEAR_KEYWORD:
      return clearHistoryKeyword(state, action);
    // 不加会报错
    default:
      return state;
  }
}

const getPopularKeywordData = (state, action) => {
  return state.merge({
    popularKeywordData: action.popularKeywordData
  })
}

const setTextData = (state, action) => {
  return state.merge({
    inputText: action.inputText
  })
}

const getRelatedKeywordData = (state, action) => {
  return state.merge({
    relatedKeywordData: action.relatedKeywordData
  })
}

const addHistoryKeyword = (state, action) => {
  const { keyword } = action;
  let arr = state.get('historyKeywordData');
  arr = arr.filter(item => {
    return item !== keyword
  })
  return state.merge({
    historyKeywordData: [keyword, ...arr]
  })
}

const clearHistoryKeyword = (state) => {
  return state.merge({
    historyKeywordData: []
  })
}