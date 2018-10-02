import React, {Component} from 'react';
import '../../assets/css/footer.css'

class Footer extends Component {
    render() {
        return (
            <section id="footer">
                <div className="container-flux">
                    <div className="row text-center text-xs-center text-sm-left text-md-left" >
                        <div className="col-md-2 pl-md-5">
                            <h5>ABOUT GRIZZLY</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right"/>About
                                    us</a></li>
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right"/>Careers</a>
                                </li>
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right"/>Grizzly
                                    Rewards</a></li>
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right"/>Discount
                                    Codes</a></li>
                                {/*<li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Videos</a></li>*/}
                            </ul>
                        </div>
                        <div className="col-md-3 pl-md-5">
                            <h5>CUSTOMER SERVICE</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right"/>Contact
                                    Us</a></li>
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right"/>Return
                                    Policy</a></li>
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right"/>Shipping
                                    Policies</a></li>
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right"/>Order
                                    Status</a></li>
                                <li><a href="https://elixir.ausgrads.academy"><i className="fa fa-angle-double-right"/>FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 pl-md-2">
                            <h2> NEED HELP?</h2>
                            <br/>
                            <h4>ALWAYS LOOKING TO IMPROVE</h4>
                            <a>Tell us what you love or what we need to fix.</a>
                            <br/>
                            <br/>
                            <button style={{borderRadius: 10, width: 260, height: 50}}>Leave Feedback.</button>
                        </div>
                        <div className="col-md-4 pl-md-3">
                            <iframe title='Location' width={400} height='100%' frameBorder={0} style={{border: 0}}
                                    src="https://www.google.com/maps/embed/v1/view?key=AIzaSyAVk4NSVeHTQ1yU7yBpbku5ezU72raWJNQ
                                    &center=-37.818861, 144.959294
                                    &zoom=18
                                    &maptype=roadmap"
                                    //&maptype=satellite"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;