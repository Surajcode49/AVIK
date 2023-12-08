import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Appointment = () => {
    return (
        <div className='appointment-main'>
            <div className="appointment-part">
                <div className="appointment-left">
                    <div className="appointment-title">Be Wise Apply Through Pacific</div>
                    <div className="appointment-btn-part">
                        <button className="appointment-btn">Request An Appointment</button>
                    </div>
                </div>
                <div className="appointment-right">
                    {/* <div className="appointment-title">Be Wise Apply Through Pacific</div>
                    <div className="appointment-btn-part">
                        <button className="appointment-btn">Request An Appointment</button>
                    </div> */}
                    <div className="appointment-icons">
                        <img src="https://www.edwiseinternational.com/images/icef.png" alt="" className='partner-img' />
                        <img src="https://www.edwiseinternational.com/images/icef.png" alt="" className='partner-img' />
                        <img src="https://www.edwiseinternational.com/images/icef.png" alt="" className='partner-img' />
                        <img src="https://www.edwiseinternational.com/images/icef.png" alt="" className='partner-img' />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment
