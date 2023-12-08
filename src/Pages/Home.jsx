import { Parallax } from '@react-spring/parallax'
import React from 'react'

import Parallaxcomp from '../Layouts/Parallax';
import FlagSection from '../Layouts/FlagsSection';
import Dashboard from './Dashboard';
import SuccessPage from'../Pages/Successpage';
import Sidebar from '../Layouts/Sidebar';

const Home = () => {
  return (
    <div className='home-main'>
    <Parallaxcomp/>
    {/* <Dashboard/> */}
    <Sidebar/>
     
    {/* <SuccessPage/> */}
  

    </div>
  )
}

export default Home
