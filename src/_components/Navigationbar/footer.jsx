import React, {Component} from 'react';
import '../css/footer.css'

class Footer extends Component {
    render() {
        return (
        <section id="footer">
            <div className="container">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                    <div className="col">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><a href="https://www.google.com.au"><i className="fa fa-angle-double-right" />Home</a></li>
                            <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />About</a></li>
                            <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />FAQ</a></li>
                            <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Get Started</a></li>
                            <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Videos</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Home</a></li>
                            <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />About</a></li>
                            <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />FAQ</a></li>
                            <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Get Started</a></li>
                            <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Videos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Footer;