import React, {Component} from 'react';
import {fetchAllCat, fetchAllSub, fetchPosts, fetchProducts, fetchSubCategories} from "../actions/postActions";
import connect from "react-redux/es/connect/connect";
import Posts from "./Posts";

class SubCategories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subCatArray:[],
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.name);
        if(this.props.match.params.name !== "all")
        {
            this.props.fetchSubCategories(this.props.match.params.name);
        }
        this.setState({subCatArray: this.props.subCategories});
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
        // console.log("SubCats are "+ this.props.subCategories)
        return (
            <div>
                {(this.props.match.params.name !== "all") ?
                    <Posts data={subArray}/> :
                    <Posts data={[]}/>
                }
            </div>

        );
    }
}

const mapStateToProps = state => ({
    subCategories: state.posts.subCategories,
    userData:state.posts.userData
});

const mapDispatchToProps = {
    fetchSubCategories,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(SubCategories);
