import React, { Component } from 'react';
import '../css/carousel.css'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
} from 'reactstrap';
import images01 from '../img/01.gif';
import images02 from '../img/02.gif';
import images03 from '../img/03.gif';
import images04 from '../img/04.gif';
import images05 from '../img/05.gif';
import images06 from '../img/06.gif';

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
    {
        id: 3,
        src: images03,
        altText: 'Test 003',
        caption: 'panigale 1299 final Edition'
    },
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
                    className="carousel-tag"
                    tag="div"
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.id}
                >
                    <img id="carousel-img" src={item.src} alt={item.altText} className="carousel-img"/>
                    {/*<CarouselCaption className="text-capitalize" captionText={item.caption} captionHeader={item.altText} />*/}
                </CarouselItem>
            );
        });

        return (
            <div id="tcarousel_icon">
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    className='carousel-fade'
                    interval='5000'
                >
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}

export default Tcarousel