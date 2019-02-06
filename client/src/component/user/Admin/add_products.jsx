import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddProducts extends Component {

    state = {  }

    render() { 
        return (
            <div>
                add products
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        prop: state.prop
    }
}
 
export default connect(mapStateToProps) (AddProducts);