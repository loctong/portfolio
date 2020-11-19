import React, {Component} from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box"
                                     data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p><strong>Hi I'm Tống Bảo Lộc</strong>, a father, developer from
                                                beautiful
                                                City, Can Tho City, Viet Nam</p>
                                            <p>I am around 30 years old, I was born in Long Xuyen City,
                                                It is about 60km from Long Xuyen to Can Tho.
                                            </p>
                                            <p>I spent more than 10 years studying and working at Can Tho City.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
