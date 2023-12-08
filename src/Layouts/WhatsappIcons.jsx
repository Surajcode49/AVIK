import React, { useState } from 'react';
// import './YourComponent.scss'; // Import your SCSS file here

const YourComponent = () => {
  const [activeItem, setActiveItem] = useState(0);

  const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];

  const clickItem = (index) => {
    setActiveItem(index);
    document.body.style.backgroundColor = bgColorsBody[index];
  };

  const offsetMenuBorder = (element) => {
    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(
      offsetActiveItem.left -
        menuRef.current.offsetLeft -
        (menuBorderRef.current.offsetWidth - offsetActiveItem.width) / 2
    );
    menuBorderRef.current.style.transform = `translate3d(${left}px, 0, 0)`;
  };

  const menuRef = React.createRef();
  const menuBorderRef = React.createRef();

  return (
    <>
      <menu ref={menuRef} className="menu">
        {/* Your menu buttons here */}
      </menu>
      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
            <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
            c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
            c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
          </clipPath>
        </svg>
      </div>
    </>
  );
};

export default YourComponent;
