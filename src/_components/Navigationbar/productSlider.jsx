import React, {Component} from 'react';
import './productSlider_rowCategory.css';


import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
const items = [
    {
        id: 1,
        altText: 'Slide 1',
        caption: 'Slide 1',


    },
    {
        id: 2,
        altText: 'Slide 2',
        caption: 'Slide 2'
    }
];
class ProductSlider extends Component {


    constructor(props) {
        super(props);
        this.state = {activeIndex: 0};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

    }
    next() {
        if (this.animate) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animate) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }
    style1 =
        {
            borderRadius: 20,
            width: "11%",
            height: "auto",

        };
    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    className="custom-1"
                    tag="div"
                    key={item.id}
                    //  onExiting={this.onExiting}
                    // onExited={this.onExited}
                >
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <div className="row d-flex justify-content-center" >
                                <div className="col-md-2">
                                    <a href="#">
                                        <img id="image" src="http://www.jonathanswatchbuyer.com/wp-content/uploads/2013/05/rolex_7.jpg" alt="Image"/>
                                    </a>
                                </div>
                                <div className="col-md-2">
                                    <a href="#">
                                        <img id="image" src="http://www.jonathanswatchbuyer.com/wp-content/uploads/2013/05/rolex_7.jpg" alt="Image"/>
                                    </a>
                                </div>
                                <div className="col-md-2">
                                    <a href="#">
                                        <img id="image" src="http://www.jonathanswatchbuyer.com/wp-content/uploads/2013/05/rolex_7.jpg" alt="Image"/>
                                    </a>
                                </div>
                                <div className="col-md-2">
                                    <a href="#">
                                        <img id="image" src="http://www.jonathanswatchbuyer.com/wp-content/uploads/2013/05/rolex_7.jpg" alt="Image"/>
                                    </a>
                                </div>
                                <div className="col-md-2">
                                    <a href="#">
                                        <img id="image" src="http://www.jonathanswatchbuyer.com/wp-content/uploads/2013/05/rolex_7.jpg" alt="Image"/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*<CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />*/}
                </CarouselItem>
            );
        });


        return (

                <div  className="d-flex justify-content-center m-3">
                    <div className="btn-warning" style={this.style1}>
                        <a href="#">
                            <img id="image"  src="http://www.jonathanswatchbuyer.com/wp-content/uploads/2013/05/rolex_7.jpg" alt="Image"/>
                        </a>
                    </div>
                    <div className="col-md-9">
                        <Carousel
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}
                            interval={false}
                            keyboard={false}
                        >
                            {/*<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />*/}
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>
                    </div>
                </div>


        );
    }
}
export default ProductSlider ;