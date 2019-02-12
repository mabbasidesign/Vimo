import React, { Component } from 'react';
import PageTop from '../../utils/page_top';

import { connect } from 'react-redux';
import { getProductDetail, clearProductDetail } from '../../actions/products_actions';

class ProductPage extends Component {

    state = {  }

    componentDidMount = () => {
        const id = this.props.match.params.id;

        console.log('id', id);
    }

    render() { 
        return (
            <div>
                Products
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect()(ProductPage);