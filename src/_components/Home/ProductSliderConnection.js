import React, {Component} from 'react';
import ProductSlider from "./ProductSlider";
import axios from "axios";

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
const camera = [
    {
        id: 1,
        altText: 'Slide 1',
        caption: 'Slide 1',
        src: 'https://nikonrumors.com/wp-content/uploads/2017/11/Nikon-D850-review.jpg',

    },
    {
        id: 2,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://d25tv1xepz39hi.cloudfront.net/2016-08-24/files/eos-5d-mark-iv_1377b.jpg',
    },
    {
        id: 3,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://i.ytimg.com/vi/2HP4MlS3Ypw/maxresdefault.jpg',
    },
    {
        id: 4,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://www.slrlounge.com/wp-content/uploads/2017/04/Nikon-d7500-d500-dx-d7200-800x496.jpg',
    },
    {
        id: 5,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'http://1.bp.blogspot.com/-8TReBK9DVtw/VJA4feESx2I/AAAAAAAAKFc/z4Nn5t5bU44/s1600/Canon-6D-2.jpg',
    },
    {
        id: 6,
        altText: 'Slide 1',
        caption: 'Slide 1',
        src: 'https://1.bp.blogspot.com/-PJkZHPGHpBM/WPn_xdlpOgI/AAAAAAAAISI/d0PheTRHsl4nOJxqfXRcKKmt0-J4IBNXQCLcB/s1600/Nikon%2BD3400%2Breview.jpg',

    },
    {
        id: 7,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://3.img-dpreview.com/files/p/articles/4986684422/canon_handson_39.jpeg',
    },
    {
        id: 8,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://petapixel.com/assets/uploads/2014/10/d750review1.jpg',
    },
    {
        id: 9,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://i.ytimg.com/vi/fSk2_-FRgpo/maxresdefault.jpg',
    },
    {
        id: 10,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://icdn2.digitaltrends.com/image/nikon-d810-review-editors-choice-award-640x640.jpg?ver=1.jpg',
    }
];
const phone = [
    {
        id: 1,
        altText: 'Slide 1',
        caption: 'Slide 1',
        src: 'https://www.theinquirer.net/w-images/50c7ab8a-addf-429b-bd2e-e0563a823198/2/Note9official-580x358.png',

    },
    {
        id: 2,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://img-new.cgtrader.com/items/886905/707c455ce1/huawei-p20-pro-twilight-3d-model-max-obj-3ds-fbx-lwo-lw-lws-ma-mb.jpg',
    },
    {
        id: 3,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://cdn.wccftech.com/wp-content/uploads/2017/10/Galaxy-S9-and-Galaxy-S9-Plus.jpeg',
    },
    {
        id: 4,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iPhone_X.JPG',
    },
    {
        id: 5,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUhqiw0vsCThy44h15-AxJ8iEtYtsSegKEcmnWVl8lMISkWl5',
    },
    {
        id: 6,
        altText: 'Slide 1',
        caption: 'Slide 1',
        src: 'https://r3.whistleout.com.au/public/images/articles/2018/05/lg_g7.jpg',

    },
    {
        id: 7,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://boygeniusreport.files.wordpress.com/2017/06/google-pixel-2-concept.jpg?quality=98&strip=all&w=782',
    },
    {
        id: 8,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://www.xda-developers.com/files/2018/07/OnePlus-6-Alternate-Image.jpg',
    },
    {
        id: 9,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://ksassets.timeincuk.net/wp/uploads/sites/54/2017/09/iphone-8-3-920x477.png',
    },
    {
        id: 10,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzlNQitObMWAs6IhpqjGTZY6WFhY2ZQNCF39TpQvYuknuIhgc',
    }
];
var watchP = "https://www.fhinds.co.uk/Images/Editor/Sale%202017/Hinds%202017_Saver%20POS_Header%20Banner_945x315_5WATCH.jpg";
var cameraP ="https://www.dccameras.com.au/media/wysiwyg/porto/homepage/content/04/categories/christmas/dslr.jpg";
var phoneP = "https://cdn.shopify.com/s/files/1/1739/1083/files/sales-icon-18218.png?v=1497179392";

var abc=[];

class ProductSliderConnection extends Component {

   constructor(props){
       super(props);
       this.state = {
           dataSource: [],
           dto:[],
       }
   }


    componentWillMount() {
        var json = '["1"]';
        axios.post('https://api.elixir.ausgrads.academy/products_micro/products/getBySubCategory', json, {
            headers: {
                'Content-Type': 'application/json',
            }})
            .then(res => {
                // console.log(res.data);
                const dataSource = res.data;
                abc = dataSource.map((dataSource) => dataSource.list[0]);
                console.log(abc);
                this.setState({ dataSource });
            })

    }
    render() {

        return (
            <div>
                <ProductSlider name={abc} promotion={watchP}/>
                {/*{this.state.dataSource[0].product.id}*/}
                {/*{ this.state.dataSource.map(dataSource => <li>{dataSource.list[0]}</li>)}*/}
                {/*<ProductSlider name={camera} promotion={cameraP}/>*/}
                {/*<ProductSlider name={phone} promotion={phoneP}/>*/}
            </div>
        );
    }
}

export default ProductSliderConnection;