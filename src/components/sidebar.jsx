import React, {Component} from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                <div className="text-center">
                    <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}}></div>
                    <h1 id="colorlib-logo"><a href="index.html">Tống Bảo Lộc</a></h1>
                    <span className="position"><a href="#">Full-Stack Developer</a> at PTNGlobal</span>
                </div>
                <nav id="colorlib-main-menu" role="navigation" className="navbar">
                    <div id="navbar" className="collapse">
                        <ul>
                            <li><a href="#" data-nav-section="about">About</a></li>
                            <li><a href="#" data-nav-section="work">Work</a></li>
                            <li><a href="#" data-nav-section="what-do-i-want">What do I want?</a></li>
                            <li><a href="#" data-nav-section="hobbies">My hobbies</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="colorlib-footer">
                    <p><small>&copy;
                        Copyright &copy;
                        <script>document.write(new Date().getFullYear());</script>
                        All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a
                            href="https://colorlib.com" target="_blank">Colorlib</a>
                    </small>
                    </p>
                </div>

            </aside>


        )
    }
}
