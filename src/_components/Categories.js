import React, {Component} from 'react';
import {fetchAllCat, fetchAllSub, fetchPosts, fetchProducts, fetchSubCategories} from "../actions/postActions";
import connect from "react-redux/es/connect/connect";
import Posts from "./Posts";

class Categories extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log(this.props.match.params.name);
        if(this.props.match.params.name !== "all")
        {
            this.props.fetchSubCategories(this.props.match.params.name);
        }
    }
    componentDidUpdate(prevProps){

        if(this.props.match.params.name !== prevProps.match.params.name)
        {
            if(this.props.match.params.name !== "all")
            {
                this.props.fetchSubCategories(this.props.match.params.name);
            }
        }
    }

    render() {
        const subArray = this.props.subCategories;
        const subCatArray = [];
        subArray.forEach(function(subCategory) {
                         subCatArray.push(subCategory.subId);
                     });
        return (
            <div>
                {(this.props.match.params.name !== "all") ?
                    <Posts data={subCatArray}/> :
                    <Posts data={[]}/>
                }
            </div>

        );
    }
}

const mapStateToProps = state => ({
    subCategories: state.posts.subCategories,
});

const mapDispatchToProps = {
    fetchSubCategories,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);
