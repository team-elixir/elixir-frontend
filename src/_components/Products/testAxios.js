import React, {Component} from 'react';
import axios from 'axios';

export class TestAxios extends Component {
    // State will apply to the posts object which is set to loading by default
    state = {
        hosts: [],
        isLoading: true,
        errors: null
    };

    // Now we're going to make a request for data using axios
    componentDidMount() {
        axios
        // This is where the data is hosted
            .post("https://api.elixir.ausgrads.academy/products_micro/products/getBySubCategory/", ['1'])
            // Once we get a response and store data, let's change the loading state
            // .then(res => {
            //     console.log(res)
            // })
            .then(res => {
                this.setState({
                    isLoading: false,
                    hosts: res.data,
                });
            })
            // If we catch any errors connecting, let's update accordingly
            .catch(error => this.setState({error, isLoading: false}));
    }

    // Putting that data to use               <div key={id.value}>
    render() {
        const {isLoading, hosts} = this.state;
        console.log(hosts);
        // console.log(hosts.list);
        return (

            <React.Fragment>
                <h2>Axios JSON Test</h2>
                <div>
                    {!isLoading ? (
                        hosts.map(post => {
                            const {gender, email, id, phone, picture} = post;
                            return (
                                <div>
                                    <h2>111</h2>
                                    {/*<img src={picture.thumbnail}/>*/}
                                    <hr/>
                                </div>
                            );
                        })
                    ) : (
                        <h2>Loading...</h2>
                    )}
                </div>
            </React.Fragment>
        );
    }
}
