import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import SearchBox from './components/SearchBox';
import PopularSearch from './components/PopularSearch';
import SearchHistory from './components/SearchHistory';

class Search extends Component {
  render() {
    const {
      inputText,
      popularKeywords,
      relatedKeywords,
      historyKeywords
    } = this.props
    return (
      <div>
        <SearchBox
          inputText={inputText}
          relatedKeywords={relatedKeywords}
          onChange={this.handleChangeInput}
          onClear={this.handleClearInput}
          onCancel={this.handleCancelInput}
          onClickKeyword={this.handleClickKeyword}
        />
        <PopularSearch
          data={popularKeywords}
          onClickKeyword={this.handleClickKeyword}
        />
        <SearchHistory
          data={historyKeywords}
          onClaerHistory={this.handleClearHistory.bind(this)}
        />
      </div>
    )
  }

  componentDidMount() {
    // 组件挂载后加载流行词
    this.props.loadPopularKeywords()
  }

  // 搜索框文本变化
  handleChangeInput = text => {
    // 1. 更新搜索框文本状态 2. 发送请求关键词
    const { setInputText, loadRelatedKeywords } = this.props;
    setInputText(text);
    loadRelatedKeywords(text);
  }

  // 清除搜索框文本信息
  handleClearInput = () => {
    this.props.setInputText('');
  }

  // 取消输入，
  handleCancelInput = () => {
    // 1. 清除输入框内容。 2. 返回到主页
    this.props.setInputText('');
    this.props.history.goBack();
  }

  // 处理点击关键词
  handleClickKeyword = keyword => {
    // 1. 添加到历史记录 2. 加载搜索结果页的商品列表 3. 跳转到新页面
    this.props.addHistoryKeyword(keyword);
    // const { loadSearchResult } = this.props
    // loadSearchResult(keyword)
    // this.props.history.push('/search_result')
  }

  // 清除历史记录
  handleClearHistory() {
    console.log(this)
    this.props.clearHistoryKeywords()
  }
}

const mapStateToProps = state => ({
  inputText: state.getIn(['search', 'inputText']),
  popularKeywords: state.getIn(['search', 'popularKeywordData']),
  relatedKeywords: state.getIn(['search', 'relatedKeywordData']),
  historyKeywords: state.getIn(['search', 'historyKeywordData']),
})

const mapDispatchToProps = dispatch => ({
  setInputText: (text) => dispatch(actionCreators.setInputText(text)),
  loadPopularKeywords: () => dispatch(actionCreators.getPopularKeywords()),
  loadRelatedKeywords: (text) => dispatch(actionCreators.getRelatedKeywords(text)),
  addHistoryKeyword: (keyword) => dispatch(actionCreators.addHistoryKeyword(keyword)),
  clearHistoryKeywords: () => dispatch(actionCreators.clearHistoryKeywords())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
