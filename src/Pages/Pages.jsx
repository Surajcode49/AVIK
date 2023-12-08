import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import Service from '../Layouts/Service';
import Sucess from '../Pages/Successpage';
import Success from '../Pages/Successpage';
import Dashboard from './Dashboard';

const Pages = () => {
    return (
        <div className='pages-main'>
            {/* <Navbar /> */}
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sucess' element={<Success/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </div>
    )
}

export default Pages
