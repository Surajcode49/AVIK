import React, { useEffect, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import useMedia from 'use-media';

import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';
import Plane from './Plane';
import Process from './Process';
import BlogSection from './BlogSection';
import AboutSection from './AboutSection';
import Tackrecord from './Tackrecord';
import Appointment from './Appointment';
import Partners from './Partners';
import Success from '../Pages/Sucess';
import Universitiescard from '../Components/Cards/UniversitiesCard';
import FlagSection from './FlagsSection';
import SucessSection from './SucessSection';
import ThreeDCards from '../Layouts/ThreeDCards';
import Banner from './Banner';
import ScrollToTop from "react-scroll-to-top";
import AnimatedGif from './AnimatedGif';
import MountainParallax from '../Layouts/MountainParallax';
import WhatsappBot from '../Layouts/Whatsappbot';
import Unicard from '../Layouts/unicards';
import CompSlider from '../Layouts/CompSlider';
import About from './About';
import VideoSlider from './VedioSlider';



const Parallaxcomp = () => {

    return (
        <div className='parallax-main'>


                <Navbar/>
                
                <MountainParallax/>
                <About/>
                <FlagSection/>
                <Plane/>
                <AboutSection/>
                <Process/>
                <Tackrecord/>
                <SucessSection/>
                <VideoSlider/>
                <Unicard/>
                <BlogSection/>
                <Appointment/>
                <Partners/>
                <ScrollToTop />
                <AnimatedGif/>
                <WhatsappBot/>
                <Footer/>
                    

        </div>
    )
}

export default Parallaxcomp;

