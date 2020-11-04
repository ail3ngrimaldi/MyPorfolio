import React from 'react';

export default function Menu () {

    return (
        <div>
            <div className="overlay-navigation">
                <nav role="navigation">
                    {/* <ul>
                    <li><a href="#" data-content="The beginning">Home</a></li>
                    <li><a href="#" data-content="Curious?">About</a></li>
                    <li><a href="#" data-content="I got game">Skills</a></li>
                    <li><a href="#" data-content="Only the finest">Works</a></li>
                    <li><a href="#" data-content="Don't hesitate">Contact</a></li>
                    </ul> */}
                </nav>
            </div>
            <section className="home">
            {/* <a href="https://codepen.io/fluxus/pen/gPWxXJ" target="_blank">Click for CSS version</a> */}
                <div className="open-overlay">
                    <span className="bar-top"></span>
                    <span className="bar-middle"></span>
                    <span className="bar-bottom"></span>
                </div>
            </section>
        </div>
    )

}