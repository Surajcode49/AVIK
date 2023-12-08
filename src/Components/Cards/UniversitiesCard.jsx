import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const familyRef = useRef(null);
  const saleRef = useRef(null);
  
  
  useEffect(() => {
    const familyAnimation = () => {
      if (familyRef.current) {
        familyRef.current.style.transition = 'transform 1s ease-in-out';
        familyRef.current.style.transform = 'translateY(calc(-50% + 50vh))';

        setTimeout(() => {
          familyRef.current.style.transform = 'translateY(0%)';
        }, 1000);

      }
    };

    const saleAnimation = () => {
      if (saleRef.current) {
        saleRef.current.style.transition = 'transform 2s ease-in-out';
        saleRef.current.style.transform = 'translateY(calc(-50% + 50vh))';

        setTimeout(() => {
          saleRef.current.style.transform = 'translateY(0%)';
        }, 2000);

      }
    };

    const animateImages = () => {
      familyAnimation();
      saleAnimation();
    };

    const animationInterval = setInterval(animateImages, 4300);

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <body className="light-theme">
      <div className="banner d-flex align-items-center">
        <div className="banner-left">
          <h1>Transparent <br /> Modern <br /> Property</h1>
          <div className="inner-desc">
            <p>we are here to make your journey to a new home, simple and memorable...</p>
            <form>
              <div className="form-group d-flex flex-wrap search">
                <input type="text" className="form-control searchbar" id="exampleInputtext1" placeholder="Enter zipcode to search properties here" />
                <button type="submit" className="black-btn">Search</button>
              </div>
            </form>
          </div>
          <div className="social-icons d-flex align-items-center">
            <ul className="d-flex">
              <li><a href="#" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="#" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="banner-right d-flex">
          <div className="family" ref={familyRef}>
            <img src="https://yudiz.com/codepen/real-estate/property-img-one.png" alt="family-img-1" className="img-fluid" />
            <img src="https://yudiz.com/codepen/real-estate/property-img-two.png" alt="family-img-2" className="img-fluid" />
            <img src="https://yudiz.com/codepen/real-estate/property-img-two.png" alt="family-img-2" className="img-fluid" />
            <img src="https://yudiz.com/codepen/real-estate/property-img-two.png" alt="family-img-2" className="img-fluid" />
            <img src="https://yudiz.com/codepen/real-estate/property-img-two.png" alt="family-img-2" className="img-fluid" />
            <img src="https://yudiz.com/codepen/real-estate/property-img-two.png" alt="family-img-2" className="img-fluid" />
            {/* ... Add more family images as needed */}
          </div>

          <div className="sale" ref={saleRef}>
            <img src="https://yudiz.com/codepen/real-estate/property-img-five.png" alt="sale-img-1" className="img-fluid" />
            <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="sale-img-2" className="img-fluid" />
            <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="sale-img-2" className="img-fluid" />
            <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="sale-img-2" className="img-fluid" />
            <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="sale-img-2" className="img-fluid" />
            <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="sale-img-2" className="img-fluid" />
            {/* ... Add more sale images as needed */}
          </div>
          {/* <div className="relative" ref={RelRef}>
            <img src="https://yudiz.com/codepen/real-estate/property-img-five.png" alt="sale-img-1" className="img-fluid" />
            <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="sale-img-2" className="img-fluid" />
            <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="sale-img-2" className="img-fluid" />
            <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="sale-img-2" className="img-fluid" />
            <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="sale-img-2" className="img-fluid" />
            <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="sale-img-2" className="img-fluid" />
          </div> */}
        </div>
      </div>
    </body>
  );
};

export default App;
