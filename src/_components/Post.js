import React, {Component} from 'react';

class Post extends Component {
    render() {
        const post = this.props.data;
        return (
            <div className="card p-3 text-center">
                <img className="card-img-top" src={post.list[0]} alt=" " />
                <div className="card-body">
                    <h6 className="card-title text-secondary font-italic">{post.product.name}</h6>
                    <p className="card-text" style={{marginTop:"-10px"}}>{post.product.brand}</p>
                    <p className="card-text font-weight-bold" style={{marginTop:"-10px"}}>${post.product.price}</p>
                    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                </div>
            </div>
        );
    }
}

export default Post;