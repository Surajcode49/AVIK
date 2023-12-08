import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUserGraduate } from "react-icons/fa6";

const Process = () => {
    return (
        <div>
            <VerticalTimeline lineColor='grey'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    // date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h4 className="vertical-timeline-element-subtitle">Expertise and Experience </h4>
                    {/* <h3 className="vertical-timeline-element-title">Explore 50,000+ expert articles and university profiles</h3> */}
                    <p>
                        Benefit from our team of experienced education consultants who possess in-depth knowledge of various study destinations, universities, and programs.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // date="2010 - 2011"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h4 className="vertical-timeline-element-subtitle">Personalized Guidance</h4>
                    {/* <h3 className="vertical-timeline-element-title">Find your Right-Fit Universities and Courses</h3> */}
                    <p>
                        Receive customized guidance tailored to your academic background, career goals, and preferences to ensure you make informed decisions.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // date="2008 - 2010"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h4 className="vertical-timeline-element-subtitle">Comprehensive Services</h4>
                    {/* <h3 className="vertical-timeline-element-title">Get Expert Advice from our Counsellors</h3> */}
                    <p>
                        We offer end-to-end support, from helping you choose the right program and institution to assist with application submissions, visa processing, and pre-departure preparations.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // date="2006 - 2008"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h4 className="vertical-timeline-element-subtitle">Vast Network</h4>
                    {/* <h3 className="vertical-timeline-element-title">Ace IELTS, TOEFL and other standardized tests</h3> */}
                    <p>
                        Leverage our extensive network of partner universities and institutions, ensuring you have access to a wide range of high-quality educational options.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    // date="April 2013"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h4 className="vertical-timeline-element-subtitle">Scholarship and Funding Assistance</h4>
                    {/* <h3 className="vertical-timeline-element-title">Stay Ahead with Real-Time Updates on your Applications</h3> */}
                    <p>
                        Maximize your financial opportunities with our assistance in identifying scholarships, grants, and financial aid to help make your study abroad dreams affordable.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    // date="November 2012"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h4 className="vertical-timeline-element-subtitle">Visa Expertise</h4>
                    {/* <h3 className="vertical-timeline-element-title">Engage with 650+ World-Renowned Universities</h3> */}
                    <p>
                        Navigate the often complex visa application process with ease, thanks to our experienced visa consultants who guide you every step of the way.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    // date="2002 - 2006"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h4 className="vertical-timeline-element-subtitle">Cultural Preparation </h4>
                    {/* <h3 className="vertical-timeline-element-title">Finance your Study Abroad Dream</h3> */}
                    <p>
                        Prepare for a successful international experience with our cultural orientation sessions, helping you adapt to your new environment and thrive academically and personally.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    // date="2002 - 2006"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h4 className="vertical-timeline-element-subtitle">Test Preparation</h4>
                    {/* <h3 className="vertical-timeline-element-title">Pay Tuition Fees in Foreign Currency with Ease</h3> */}
                    <p>
                        Benefit from our test preparation resources and guidance to excel in language proficiency exams like IELTS, PTE, SAT and Spoken English.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    // date="2002 - 2006"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h4 className="vertical-timeline-element-subtitle">Resume Building</h4>
                    {/* <h3 className="vertical-timeline-element-title">Prepare for a smooth journey</h3> */}
                    <p>
                        Receive support in building a compelling academic and extracurricular profile to enhance your chances of admission to competitive institutions.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    // date="2002 - 2006"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h4 className="vertical-timeline-element-subtitle">Career Counseling</h4>
                    {/* <h3 className="vertical-timeline-element-title">Find Your Home Away from Home</h3> */}
                    <p>
                        Our career advisors can help you align your study choices with your long-term career aspirations, ensuring your educational investment pays off in the future.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    // date="2002 - 2006"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h4 className="vertical-timeline-element-subtitle">24/7 Support</h4>
                    {/* <h3 className="vertical-timeline-element-title">Soar and Thrive at Your Dream University</h3> */}
                    <p >
                        Access round-the-clock support, whether you have questions about your application, need assistance during emergencies, or simply seek advice.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<FaUserGraduate />}
                />
            </VerticalTimeline>
        </div>
    )
}

export default Process

