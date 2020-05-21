import * as constants from './constants';
import { get } from '../../../assets/service';

export const popularKeywordsData = (popularKeywordData) => ({
  type: constants.POPULAR_KEYWORD_DATA,
  popularKeywordData
})

export const textData = (inputText) => ({
  type: constants.TEXT_DATA,
  inputText
})

const relatedKeywordsData = (relatedKeywordData) => ({
  type: constants.RELATED_KEYWORD_DATA,
  relatedKeywordData
})

const historyKeyword = (keyword) => ({
  type: constants.ADD_HISTORY_KEYWORD,
  keyword
})

const clearHistory = () => ({
  type: constants.CLEAR_KEYWORD,
})

export const getPopularKeywords = () => {
  return (dispatch) => {
    get(`/keywords/popular.json`).then(data => {
      return dispatch(popularKeywordsData(data))
    })
  }
}

export const setInputText = (text) => {
  console.log(text)
  return (dispatch) => {
    return dispatch(textData(text))
  }
}

export const getRelatedKeywords = (text) => {
  text = encodeURIComponent(text);
  return (dispatch) => {
    get(`/keywords/related.json?keyword=${text}`).then(data => {
      return dispatch(relatedKeywordsData(data))
    })
  }
}

export const addHistoryKeyword = (keyword) => {
  return (dispatch) => {
    return dispatch(historyKeyword(keyword))
  }
}

export const clearHistoryKeywords = () => {
  return (dispatch) => {
    return dispatch(clearHistory())
  }
}
