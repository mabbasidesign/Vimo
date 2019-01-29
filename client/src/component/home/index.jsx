import React, { Component } from 'react';
import HomeSlider from './home_slider';
import HomePromotion from './home_promotions';

class Home extends Component {
    state = {  }

    render() { 
        return (
            <div>
                <HomeSlider />
                <HomePromotion />
            </div>
        );
    }
}
 
export default Home;