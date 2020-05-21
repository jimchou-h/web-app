import React, { Component } from 'react'
import './style.css'

class PopularSearch extends Component {
  shouldComponentUpdate() {
    // 流行关键词已经加载了就不必再重绘
    if (this.props.data.length > 0) {
      return false
    } else {
      return true
    }
  }

  render() {
    const { data, onClickKeyword } = this.props
    return (
      <div className="popularSearch">
        {data.map(item => {
          return (
            <span
              key={item.id}
              className="popularSearch__item"
              onClick={() => onClickKeyword(item)}
            >
              {item.keyword}
            </span>
          )
        })}
      </div>
    )
  }
}

export default PopularSearch
