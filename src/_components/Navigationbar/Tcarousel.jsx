import React, { Component } from 'react';
import '../css/carousel.css'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    // CarouselIndicators,
    // CarouselCaption
} from 'reactstrap';
import images01 from '../img/01.jpg';
import images02 from '../img/02.jpg';
// import images03 from '../img/03.jpg';
import images04 from '../img/04.jpg';
import images05 from '../img/05.jpg';
import images06 from '../img/06.jpg';

// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }
// const images = importAll(require.context('./img', false, '/\.jpg/'));

const items = [
    {
        id: 1,
        src: images01,
        altText: 'Test 001',
        caption: 'Panigale 1299 Final Edition',
    },
    {
        id: 2,
        src: images02,
        altText: 'Test 002',
        caption: 'panigale 1299 Final Edition'
    },
    // {
    //     id: 3,
    //     src: images03,
    //     altText: 'Test 003',
    //     caption: 'panigale 1299 final Edition'
    // },
    {
        id: 4,
        src: images04,
        altText: 'Test 003',
        caption: 'panigale 1299 final Edition'
    },
    {
        id: 5,
        src: images05,
        altText: 'Test 003',
        caption: 'panigale 1299 final Edition'
    },
    {
        id: 6,
        src: images06,
        altText: 'Test 003',
        caption: 'panigale 1299 final Edition'
    }
];

export class Tcarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    className="custom-tag"
                    tag="div"
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.id}
                >
                    <img src={item.src} alt={item.altText} className="carousel-img"/>
                    {/*<CarouselCaption className="text-capitalize" captionText={item.caption} captionHeader={item.altText} />*/}
                </CarouselItem>
            );
        });

        return (
            <div>
                <style>
                    {
                        `.custom-tag {
                width: 90%;
                height: 120px;
                margin-left: 5%;
                background: white;
              }`
                    }
                </style>
                <Carousel id="1234"
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    className='carousel-fade'
                    // interval='5000'
                >
                    {/*<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />*/}
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}

export default Tcarousel