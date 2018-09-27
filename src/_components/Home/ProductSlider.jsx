import React, {Component} from 'react';
import '../../assets/css/productSlider_rowCategory.css';

import axios from 'axios';

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
        src: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    },
    {
        id: 2,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://images.pexels.com/photos/68201/male-watch-wrist-watch-packshot-time-68201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        id: 3,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        id: 4,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        id: 5,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        id: 6,
        altText: 'Slide 1',
        caption: 'Slide 1',
        src: 'https://images.pexels.com/photos/164641/pexels-photo-164641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    },
    {
        id: 7,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://images.pexels.com/photos/66226/wrist-watch-watch-clock-time-66226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        id: 8,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://images.pexels.com/photos/128206/pexels-photo-128206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        id: 9,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://images.pexels.com/photos/1044458/pexels-photo-1044458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        id: 10,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://images.pexels.com/photos/280324/pexels-photo-280324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    }
];

class ProductSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            category:[],
        };

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data);
                const category = res.data;
                this.setState({ category });
            })
    }

    next() {
        if (this.animate) return;
        const nextIndex = this.state.activeIndex === items.length - 5 ? 0 : this.state.activeIndex + 5;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animate) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 5 : this.state.activeIndex - 5;
        this.setState({ activeIndex: nextIndex });
    }
    dataSouce = () =>{
        var indents = [];

        for (var i = this.state.activeIndex; i < this.state.activeIndex+5; i++) {

            indents.push(
                <div className="col-xl-2">
                    <a href="#">
                        <img id="image" src={this.props.name[i]} alt="Image"/>
                    </a>
                </div>
            );
        }
        return indents;
    }
    style1 =
        {

            marginLeft: "5%",
            // borderRadius: 20,
            width: "19%",
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
                                {this.dataSouce()}
                            </div>

                        </div>
                    </div>
                    {/*<CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />*/}
                </CarouselItem>
            );
        });

        return (

            <div  className="d-flex justify-content-center m-3">
                <div style={this.style1}>
                    <a href="#">
                        <img id="image"  src={this.props.promotion} alt="Image"/>
                    </a>
                </div>
                <div id ="carousel_icon" className="col-md-10">
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        interval={false}
                        keyboard={false}
                    >
                        {/*<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />*/}
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}>

                        </CarouselControl>
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                </div>
                {/*<ul>*/}
                {/*hello*/}
                {/*{ this.state.category.map(category => <li>{category.name}</li>)}*/}
                {/*</ul>*/}

            </div>


        );
    }
}
export default ProductSlider ;
