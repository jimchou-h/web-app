import React, { Component } from 'react'
import './style.css'

class SearchHistory extends Component {
  shouldComponentUpdate(preProps) {
    if (preProps.data.length !== this.props.data.length) {
      return true
    }
    return false
  }

  render() {
    const { data, onClaerHistory } = this.props
    return (
      <div className="searchHistory">
        <div className="searchHistory__header">搜索记录</div>
        <ul className="searchHistory__list">
          {data.map((item, index) => {
            return (
              <li
                key={index}
                onClick={this.handleClick}
                className="searchHistory__item"
              >
                {item.keyword}
              </li>
            )
          })}
        </ul>
        <div
          className="searchHistory__clear"
          onClick={() => onClaerHistory()}
        >
          清除搜索记录
                </div>
      </div>
    )
  }

  handleClick = () => { }
}

export default SearchHistory
