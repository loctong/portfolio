import React, {Component} from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="what-do-i-want">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I Want</span>
                                <h2 className="colorlib-heading animate-box">To-Do List</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">

                                            <div className="timeline-icon color-1">
                                                <i className="icon-pen2"></i>
                                            </div>

                                            <div className="timeline-label">
                                                <h2><b>Healthier</b></h2>
                                                <p>Work Out Every Day to make my healthy better</p>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-2">
                                                <i className="icon-pen2"></i>
                                            </div>
                                            <div className="timeline-label">
                                                <h2><b>Improve English Language Skill</b></h2>
                                                <p>When my english is better I can support more to my team</p>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2"></i>
                                            </div>
                                            <div className="timeline-label">
                                                <h2><b>Listen and learn</b></h2>
                                                <p>Always need to listen and learn new technologies to help my
                                                    teammate</p>
                                            </div>
                                        </div>
                                    </article>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
