import React, { PureComponent } from 'react'
import Slider from 'react-slick'
import dataSource from './dataSource'
import './style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Category extends PureComponent {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      slidesToShow: 1,
      swipeToSlide: true,
      autoplay: true
    }
    return (
      <div className="category">
        <Slider {...settings}>
          {dataSource.map((section, index) => {
            return (
              <div key={index}>
                {section.map((item, i) => {
                  return (
                    <div
                      className="category__section"
                      key={i}
                    >
                      <img
                        className="category__icon"
                        src={item.src}
                        alt="加载图片"
                      />
                      <div>
                        <span className="category__text">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default Category
