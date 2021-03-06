import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Post extends Component {
    render() {
        const post = this.props.data;
        // console.log(this.props.data.product.id);
        return (
            <div className="col-lg-4">
            <div className="card p-3 text-center" style={{width:"300px", marginBottom: "25px"}}>
                <Link id='linkButton'
                      to={`/product/view/${post.product.id}`}>
                <img className="card-img-top" id="YuAdded" src={post.list[0]} alt=" " style={{height: "250px", width: "250px"}}/>
                <div className="card-body">
                    <h6 className="card-title text-secondary font-italic">{post.product.name}</h6>
                    <p className="card-text text-dark" style={{marginTop:"-10px"}}>{post.product.brand}</p>
                    <p className="card-text text-dark font-weight-bold" style={{marginTop:"-10px", marginBottom: "-25px"}}>${post.product.price}</p>
                    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                </div>
                </Link>
            </div>
            </div>
        );
    }
}

export default Post;