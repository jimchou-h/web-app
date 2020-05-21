import React, { PureComponent } from 'react'
import './style.css'


class SearchBox extends PureComponent {
  render() {
    const { inputText, onClear, onChange, onCancel } = this.props
    const visiable = inputText.length > 0 ? true : false
    return (
      <div className="searchBox">
        <div className="searchBox__container">
          <input
            className="searchBox__text"
            value={inputText}
            onChange={(e) => onChange(e.target.value)}
          />
          {visiable ? (
            <span
              className="searchBox__clear"
              onClick={() => onClear()}
            />
          ) : null}
          <span className="searchBox__cancel" onClick={() => onCancel()}>取消</span>
        </div>
        {visiable ? this.renderSuggestList() : null}
      </div>
    )
  }

  renderSuggestList() {
    const { relatedKeywords, onClickKeyword } = this.props
    return (
      <ul className="searchBox__list">
        {relatedKeywords.map(item => {
          return (
            <li className="searchBox__item" key={item.id} onClick={() => onClickKeyword(item)}>
              <span className="searchBox__itemKeyworkd">
                {item.keyword}
              </span>
              <span className="searchBox__itemQuantity">
                约{item.quantity}个结果
                            </span>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default SearchBox
