import React from 'react'
import sample from '../Assets/vedio.mp4';

const Banner = () => {
    return (
        <div className='banner-main'>
            <div className="banner-vedio-part">
                <video className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
            </div>
            <div className="banner-content">
                <div className='banner-content-title'>A Plan for every dream</div>
                <p>The Most Comprehensive & Personalised Study Abroad Plan, suited for your Dreams. Obsessed with Student Success.</p>
                <div className="banner-btn-part">
                    <button className="banner-btn">Get your Personalised plan for free</button>
                    <button className="banner-btn">Talk to an Expert</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
