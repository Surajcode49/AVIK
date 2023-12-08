import React from "react";
import Aboutcard from "../Components/Aboutcard";
import img from '../Assets/banner-5.png';
import img2 from "../Assets/banner-2-1.png" ;
import img3 from "../Assets/banner-3-1.png";
import img4 from "../Assets/banner-4-1.png";
const AboutSection = () => {
  return (
    <div className="about-section-main">
      <div className="about-section-part">
        <div className="about-title">Our Services</div>
        <div className="about-cards-part">
          <div className="about-row1">
            <Aboutcard
              imageUrl={img}
              title="Comprehensive Language Training"
              descrp="Immerse yourself in our top-notch classes tailored for IELTS, PTE, and Spoken English. We empower you with linguistic skills that open doors to global communication."
              author="Immerse yourself in our top-notch classes tailored for IELTS, PTE, and Spoken English. We empower you with linguistic skills that open doors to global communication."
              // tags="Immerse yourself in our top-notch classes tailored for IELTS, PTE, and Spoken English. We empower you with linguistic skills that open doors to global communication."
              date="Immerse yourself in our top-notch classes tailored for IELTS, PTE, and Spoken English. We empower you with linguistic skills that open doors to global communication."
            />
            <Aboutcard
              imageUrl={img}
              title="Nurturing Dreams through Career Counseling"
              descrp="Our experienced counselors provide insightful guidance, helping you make informed decisions about your academic and professional path."
            />
          </div>
          <div className="about-row1">
            <Aboutcard
              imageUrl={img4}
              title="Seamless Visa Assistance"
              descrp="Navigating the visa process can be overwhelming. Let us be your compass, ensuring a smooth journey toward your educational dreams."
            />
            <Aboutcard
              imageUrl={img2}
              title="Study Abroad Expertise"
              descrp="Embark on an enriching global education experience. Our proven track record of success aids you in accessing the finest universities and business schools worldwide."
            />
          </div>
          <div className="about-row2">
            <Aboutcard
              imageUrl={img3}
              title="Empowering Futures through Financial Aid"
              descrp="We believe investing in education is an investment in the future. Explore opportunities for loans and scholarships that pave the way to academic success."
            />
            {/* <Aboutcard
              imageUrl="https://www.edwiseinternational.com/Admin/img_admin/application-assistance-400x360.jpg"
              title="Study Abroad Expertise"
              descrp="Embark on an enriching global education experience. Our proven track record of success aids you in accessing the finest universities and business schools worldwide."
            /> */}
          </div>
          {/* <div className="about-row1">
            <Aboutcard imageUrl="https://www.edwiseinternational.com/Admin/img_admin/Test-prep-400x360.jpg" />
            <Aboutcard imageUrl="https://www.edwiseinternational.com/Admin/img_admin/Test-prep-400x360.jpg" />
          </div>
          <div className="about-row1">
            <Aboutcard imageUrl="https://www.edwiseinternational.com/Admin/img_admin/Test-prep-400x360.jpg" />
            <Aboutcard imageUrl="https://www.edwiseinternational.com/Admin/img_admin/Test-prep-400x360.jpg" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
