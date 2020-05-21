import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Category from './components/Category';
import HomeHeader from './components/HomeHeader';
import Banner from './components/Banner';
import Discount from './components/Discount';
import LikeList from './components/LikeList';
import Footer from '../../components/Footer';


class Home extends Component {
  render() {
    const { discountData, likeData, pageCount, getLikes } = this.props
    return (
      <div>
        <HomeHeader />
        <Banner />
        <Category />
        <Discount data={discountData} />
        <LikeList data={likeData} pageCount={pageCount} loadLikes={getLikes}/>
        <Footer></Footer>
      </div>
    );
  }

  componentDidMount() {
    this.props.getDiscounts();
  }
}

const mapStateToProps = state => ({
  discountData: state.getIn(['home', 'discountData']),
  likeData: state.getIn(['home', 'likeData']),
  pageCount: state.getIn(['home', 'pageCount'])
})

const mapDispatchToProps = (dispatch) => ({
  getDiscounts() {
    dispatch(actionCreators.getDiscountsData())
  },
  getLikes() {
    dispatch(actionCreators.getLikesData())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
