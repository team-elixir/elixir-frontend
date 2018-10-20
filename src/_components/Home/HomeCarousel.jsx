import React, { Component } from 'react';
import '../../assets/css/carousel.css'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from 'reactstrap';
const items = [
    {id: 1, src: 'https://elixir.ausgrads.academy/carousel/01.gif',},
    {id: 2, src: 'https://elixir.ausgrads.academy/carousel/02.gif',},
    {id: 3, src: 'https://elixir.ausgrads.academy/carousel/03.gif',},
    {id: 4, src: 'https://elixir.ausgrads.academy/carousel/04.gif',},
    {id: 5, src: 'https://elixir.ausgrads.academy/carousel/05.gif',},
    {id: 6, src: 'https://elixir.ausgrads.academy/carousel/06.gif',}
];

export class HomeCarousel extends Component {
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
                <CarouselItem className="carousel-tag" tag="div" onExiting={this.onExiting} onExited={this.onExited} key={item.id}>
                    <img id="carousel-img" src={item.src} alt={item.id} className="carousel-img"/>
                </CarouselItem>
            );
        });

        return (
            <div id="tcarousel_icon" style={{marginBottom: "30px", marginTop: "10px"}}>
                <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} className='carousel' interval='2700'>
                    <CarouselIndicators id="Cindicator" items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}

export default HomeCarousel