import React, { Component } from 'react';
import PageTop from '../../utils/page_top';
import { getBrands, getWoods } from '../../actions/products_actions';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';

import {frets} from '../../utils/Form/fixed_categories';
import { connect } from 'react-redux';
import CollapsCheckBox from '../../utils/collapsCheckBox';

class Shop extends Component {

    state = {
        grid:'',
        limit:6,
        skip:0,
        filters:{
            brand:[],
            frets:[],
            wood:[],
            price:[]
        }
    }

    componentDidMount = () => {
        this.props.dispatch(getBrands());
        this.props.dispatch(getWoods());
    }

    handleFilters = (filters, category) => {
        const newFilters = {... this.state.filters};
        newFilters[category] = filters;

        this.setState({
            filters: newFilters
        })
    }

    state = {  }
    render() {
        console.log(this.state.filters);
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
                        <CollapsCheckBox
                            initState={false}
                            title='Frets'
                            list={frets}
                            handleFilters={(filters) => {this.handleFilters(filters, 'brand')}}
                        />
                        <CollapsCheckBox
                            initState={true}
                            title='Woods'
                            list={products.woods}
                            handleFilters={(filters) => {this.handleFilters(filters, 'woods')}}
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

