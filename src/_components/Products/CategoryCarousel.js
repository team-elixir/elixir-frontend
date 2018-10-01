import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

const CategoryCarousel = (categoryImages) => {

    let slides = categoryImages.categoryImage.map((info) => {
        return(
            <div key={info.product.id}>
                <img src={info.list[0]} alt="ProductImage" width="250" height="350"/>
                <p className="legend">{info.product.name}</p>
            </div>
        )
    });
    return(
        <Carousel centerMode
                  centerSlidePercentage={20}
                  emulateTouch
                  autoPlay={false}
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={false}
                  showArrows={true}
        >
            {slides}
        </Carousel>
    )
};

export default CategoryCarousel;