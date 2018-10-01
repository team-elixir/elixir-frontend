import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

const ProductCarousel = (productImages) => {

    let slides = productImages.productImage.map((image) => {
        return(
            <div key={image}>
                <img src={image} alt="ProductImage" width="auto" height="350"/>
            </div>
        )
    });
    return(
        <Carousel autoPlay={false}
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}>
            {slides}
        </Carousel>
    )
};

export default ProductCarousel;