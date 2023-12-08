import React from 'react'
import { Link } from 'react-router-dom'

const SucessSection = () => {
    return (
        <div>
            <section id="timeline">
                <div className='sucess-section-heading'>Sucess Story</div>
                {/* <p className="leader">All cards must be the same height and width for space calculations on large screens.</p> */}
                {/* <div className="demo-card-wrapper">
                    <div className="demo-card demo-card--step1">
                        <div className="head">
                            <div className="number-box">
                                <span>01</span>
                            </div>
                            <h2>
                                <span className="small">Subtitle</span> Technology
                            </h2>
                        </div>
                        <div className="body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur,
                                laudantium odio dolorum laboriosam.
                            </p>
                            <img
                                src="https://b2059438.smushcdn.com/2059438/wp-content/uploads/2018/08/Fotolia_88471055_Subscription_Monthly_M.jpg?lossy=1&strip=1&webp=1"
                                alt="Graphic"
                            />
                        </div>
                    </div>

                    <div className="demo-card demo-card--step2">
                        <div className="head">
                            <div className="number-box">
                                <span>02</span>
                            </div>
                            <h2>
                                <span className="small">Subtitle</span> Confidence
                            </h2>
                        </div>
                        <div className="body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur,
                                laudantium odio dolorum laboriosam.
                            </p>
                            <img src="http://placehold.it/1000x500" alt="Graphic" />
                        </div>
                    </div>

                    <div className="demo-card demo-card--step3">
                        <div className="head">
                            <div className="number-box">
                                <span>03</span>
                            </div>
                            <h2>
                                <span className="small">Subtitle</span> Adaptation
                            </h2>
                        </div>
                        <div className="body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur,
                                laudantium odio dolorum laboriosam.
                            </p>
                            <img src="https://www.homestaynetwork.org/wp-content/uploads/2016/06/female-student-small.jpg" alt="Graphic" />
                        </div>
                    </div>

                    <div className="demo-card demo-card--step4">
                        <div className="head">
                            <div className="number-box">
                                <span>04</span>
                            </div>
                            <h2>
                                <span className="small">Subtitle</span> Consistency
                            </h2>
                        </div>
                        <div className="body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur,
                                laudantium odio dolorum laboriosam.
                            </p>
                            <img src="http://placehold.it/1000x500" alt="Graphic" />
                        </div>
                    </div>

                    <div className="demo-card demo-card--step5">
                        <div className="head">
                            <div className="number-box">
                                <span>05</span>
                            </div>
                            <h2>
                                <span className="small">Subtitle</span> Conversion
                            </h2>
                        </div>
                        <div className="body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur,
                                laudantium odio dolorum laboriosam.
                            </p>
                            <img src="http://placehold.it/1000x500" alt="Graphic" />
                        </div>
                    </div>
                </div> */}


                <section className="sucess-intro">
                    <div className="sucess-section-intro-content">
                        <div className="sucess-section-title"> Pacific-Overseas</div>
                        <p className="sucess-section-description">
                            Collage Art lets you weave magic by
                            combining different elements – think photographs, illustrations,
                            textures, and patterns – into a visual symphony. Push the boundaries
                            of your artistic expression and create a masterpiece with the help of
                            AI! Join this artistic journey, where your imagination meets the
                            limitless possibilities of AI.
                        </p>
                        <Link to="/sucess" href="#featured" className="sucess-section-btn">Read More</Link>
                    </div>

                    <div className="sucess-card-container">
                        <div style={{ "--r": -15, "--y": 40, "--x": 50 }} className="sucess-card">
                            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/585555c4-71c1-4c4a-b551-a2895047fbba" alt="" />
                        </div>
                        <div style={{ "--r": 5, "--y": -30, "--x": 30 }} className="sucess-card">
                            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5ede54b2-dfec-4f5e-81b1-df8089481b08" alt="" />
                        </div>
                        <div style={{ "--r": 15, "--y": 50, "--x": 0 }} className="sucess-card">
                            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4548f9dd-e67e-4585-8a2d-821c40e3471b" alt="" />
                        </div>
                    </div>
                </section>
            </section>

        </div>
    )
}

export default SucessSection
