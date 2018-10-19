import React, {Component} from 'react';
import "./Row.css";
import {Link} from "react-router-dom";
import {fetchAllCat, fetchPosts, fetchProducts, fetchSubCategories} from "../../actions/postActions";
import connect from "react-redux/es/connect/connect";

class NewRow extends Component {
    componentDidMount() {
        this.props.fetchAllCat();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.catList !== this.props.catList) {
            //   this.props.fetchAllCat();
        }
    }
    render() {
        const catArray = this.props.catList;
        console.log(catArray);
        return (
            <div>
            <div className="container d-flex justify-content-center" style={{marginBottom: "-10px"}}>
                <div className="dropdown">
                    <Link to="/category/all" className="text-dark m-4" style={{fontSize: "20px"}}>Shop all</Link>
                </div>
                {catArray.map(category => (
                <div className="dropdown">
                    <Link to={"/category/" + category.name} className="text-dark m-4" style={{fontSize: "20px"}}>{category.name}</Link>
                    <ul style={{listStyle:"none"}}>
                    <div className="dropdown-content">
                        {category.subcategories.map(subCategory => (
                            <li>
                            <Link to={"/subCategory/" + subCategory.subId} className="text-dark" style={{fontSize: "15px"}}>
                                {subCategory.name}
                            </Link>
                            </li>
                            ))}
                    </div>
                    </ul>
                </div>
                    ))}
            </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchPosts,
    fetchProducts,
    fetchSubCategories,
    fetchAllCat
};

const mapStateToProps = state => ({
    catList: state.posts.catList
    // subCatDet: state.posts.subCatDet,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewRow);
