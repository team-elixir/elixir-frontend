import React, {Component} from 'react';
import '../../assets/css/footer.css'

class Footer extends Component {
    render() {
        return (
            <section id="footer">
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left" style={{width:1140}}>
                        <div className="col">
                            <h5>ABOUT GRIZZLY</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right" />About us</a></li>
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right" />Careers</a></li>
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right" />Grizzly Rewards</a></li>
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right" />Discount Codes</a></li>
                                {/*<li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Videos</a></li>*/}
                            </ul>
                        </div>
                        <div className="col">
                            <h5>CUSTOMER SERVICE</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right" />Contact Us</a></li>
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right" />Return Policy</a></li>
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right" />Shipping Policies</a></li>
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right" />Order Status</a></li>
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right" />FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2> NEED HELP?</h2>
                            <br/>
                            <h4>ALWAYS LOOKING TO IMPROVE</h4>
                            <a>Tell us what you love or what we need to fix.</a>
                            <br/>
                            <br/>
                            <button style={{borderRadius:10, width:260, height:50}}>Leave Feedback.</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;