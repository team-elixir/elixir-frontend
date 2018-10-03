import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import {Link, withRouter} from 'react-router-dom'
import '../../assets/css/suggestProduct.css'

const CategoryCarousel = (categoryImages) => {
    let slides = categoryImages.categoryImage.map((info) => {
        return (
            <div className='col-sm-9 offset-sm-3 col-md-10 offset-md-1 pt-3' key={info.product.id}>
                {/*<Link className="btn btn-outline-info cog-radius pl-4 pr-4 mr-2 pt-1 pb-1"*/}
                <Link className="btn btn-outline-info rounded-200" id='linkButton'
                      to={`/product/view/${info.product.id}`}>
                    {/*<Link className="btn btn-outline-info cog-radius pl-4 pr-4 mr-2 pt-1 pb-1" to={`/product/view/`}>*/}
                    <img src={info.list[0]} alt="ProductImage" height="180"/>
                </Link>
                <p className="legend">{info.product.name}</p>
            </div>
        )
    });
    return (
        <Carousel centerMode
                  centerSlidePercentage={20}
            // emulateTouch
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

export default withRouter(CategoryCarousel);