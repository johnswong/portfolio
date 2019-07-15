import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-education" data-section="education">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Education</span>
                                <h2 className="colorlib-heading animate-box fadeInUp animated">Education</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <div className="fancy-collapse-panel">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingOne">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Bachelor Degree of Computer Science</a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                                <div className="panel-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>San Francisco State University<br></br>
                                                            San Francisco State, CA<br></br>
                                                            2017 - 2019<br></br>
                                                            GPA: 3.27</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
