import React, { Component } from 'react';
import PageTop from '../../utils/page_top';
import { getBrands, getWoods } from '../../actions/products_actions';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';

import { connect } from 'react-redux';
import CollapsCheckBox from '../../utils/collapsCheckBox';

class Shop extends Component {

    componentDidMount = () => {
        this.props.dispatch(getBrands());
        this.props.dispatch(getWoods());
    }

    handleFilters = (filters) => {

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
                        {/* Left */}
                        <CollapsCheckBox
                            initState={true}
                            title='Brands'
                            list={products.brands}
                            handleFilters={(filters) => {this.handleFilters(filters, 'brand')}}
                        />
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

