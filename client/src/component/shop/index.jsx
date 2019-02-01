import React, { Component } from 'react';
import PageTop from '../../utils/page_top';
import { getBrands, getWoods } from '../../actions/products_actions';

import { connect } from 'react-redux';

class Shop extends Component {

    componentDidMount = () => {
        this.props.dispatch(getBrands());
        this.props.dispatch(getWoods());
    }

    state = {  }
    render() {
        const products = this.props.products
        return (
            <div>
                <PageTop
                title="Browse Products"
            />
            <div className='container'>
                <div className='shop_wrapper'>
                    <div className="left">
                        Left
                    </div>
                    <div className="right">
                        Right
                    </div>
                </div>
            </div>
            </div>
        );
    } 

}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Shop);

