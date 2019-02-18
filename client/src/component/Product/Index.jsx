import React, { Component } from 'react';
import PageTop from '../../utils/page_top';

import ProdInfo from './prodImg';
import ProdImg from './prodInfo';

import { connect } from 'react-redux';
import { getProductDetail, clearProductDetail } from '../../actions/products_actions';

class ProductPage extends Component {

    state = {  }

    componentDidMount = () => {
        const id = this.props.match.params.id;
        this.props.dispatch(getProductDetail(id)).then(esponse => {
            if(!this.props.products.prodDetail){
                console.log('no article found');
                this.props.history.push('/');
            }
        })
    }

    componentWillMount = () => {
        this.props.dispatch(clearProductDetail())
    }

    render() { 
        return (
            <div>
                <PageTop
                    title="Product detail"
                />
                <div className='container'>
                {
                    this.props.products.prodDetail ?
                    <div className="product_detail_wrapper">
                        <div className="left">
                            <div style={{width:'400px'}}>
                                <ProdImg
                                    detail={this.props.products.prodDetail}
                                />
                            </div>
                        </div>
                        <div className="right">
                            <ProdInfo
                                addToCart={(id)=> this.addToCartHandler(id)}
                                detail={this.props.products.prodDetail}
                            />
                        </div>
                    </div>
                    : 'Loading'
                }
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

export default connect(mapStateToProps)(ProductPage);