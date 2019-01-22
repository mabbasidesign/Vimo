import React, { Component } from 'react';

import Header from '../component/Header_Footer/Header/Index';
import Footer from '../component/Header_Footer/Footer/Inex';

class Layout extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Header />
                <div className="page_container">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default Layout;