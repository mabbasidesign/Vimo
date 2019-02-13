import React, { Component } from 'react';

class ProdImg extends Component {

    state = {
        lightBox: false,
        imagePos: 0,
        lightBoxImages: [],        
    }

    componentDidMount(){
        if(this.props.detail.images.length > 0){
            let lightBoxImages = [];

            this.props.detail.images.forEach(item => {
                lightBoxImages.push(item.url)
            })
            this.setState({
                lightBoxImages
            })
        }
    }

    render() {
        const {detail} = this.props.detail
        return (
            <div className='product_image_container'>
                <div className='main_pic'>

                </div>
            </div>
        );
    }
}
 
export default ProdImg;