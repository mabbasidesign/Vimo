import React, { Component, useReducer } from 'react';
import UserLayout from '../../hoc/user';
import { connect } from 'react-redux';
import { getCartItems } from '../../actions/user_actions';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown';
import faSmile from '@fortawesome/fontawesome-free-solid/faSmile';

class UserCard extends Component {

    state = {
        loading: true,
        total: 0,
        showTotal: false,
        showSucces: false
    }

    componentDidMount = () => {
        let carttItem = [];
        let user = this.props.user;

        if(user.userData.cart){
            if(user.userData.cart.length > 0){
                user.userData.cart.forEach(item => {
                    carttItem.push(item.id)
                });
                this.props.dispatch(getCartItems(carttItem, user.userData.cart))
                .then(() => {
                    
                })
            }
        }
    }

    render() { 
        return (
            <UserLayout>
                <div>
                    cart
                </div>
            </UserLayout>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

 
export default connect(mapStateToProps)(UserCard);