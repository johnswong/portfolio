import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">experience</span>
                                <h2 className="colorlib-heading animate-box">Work Experience</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Technical Specialist at Apple Inc. <span>Oct 2018 - present</span></h2>
                                                <p><li>Troubleshoot customers’ mobile device(s) such as iPhone, iPad and Apple Watch, as well as iCloud related issues</li>
                                                <li>Present options and solutions to customers after troubleshooting in order for them to make an informed decision</li>
                                                <li>Multi-task by attending to different customers in a timely manner</li>
                                                <li>Assist peers with troubleshooting customer devices</li>
                                                <li>Share feedback amongst peers to improve external and internal customer experience</li></p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>DevOps/IT Intern at Jobvite <span>Jun 2018 - Aug 2018</span></h2>
                                                <p><li>Responded to help desk tickets that involved office-related technical issues in a timely manner </li>
                                                <li>Configured computers for new hires according to company needs and standards </li>
                                                <li>Helped migrate a local server, where builds for the mobile platform took place, to the cloud, and insured specific build tools were installed and running properly </li>
                                                <li>Managed the company’s active directory by organizing and updating users and groups </li></p>
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
