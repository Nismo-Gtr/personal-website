import React, { Component } from 'react';
import Footer from 'react-materialize';


class PageFooter extends Component {
    render() {
        return (
            <Footer copyrights="2018 Copyright TheNicholasCowan.com"
                moreLinks={
                    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                }
                links={
                    <ul>
                        <li><a className="grey-text text-lighten-3" href="#!" id="footerLinks">Link 1</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!" id="footerLinks">Link 2</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!" id="footerLinks">Link 3</a></li>
                    </ul>
                }
                className='example grey'
            >
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">Let me build something wonderful for you.</p>
            </Footer>
        )
    }
}

export default PageFooter;
