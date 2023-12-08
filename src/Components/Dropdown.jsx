import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = ({
  title,
  sub1,
  sub2,
  sub3,
  sub4,
  sub5,
  sub6,
  sub7,
  sub8,
  sub9,
  sub10,
  linked,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    if (hasSubItems()) {
      setIsOpen(!isOpen);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const hasSubItems = () => {
    return (
      sub1 || sub2 || sub3 || sub4 || sub5 || sub6 || sub7 || sub8 || sub9 || sub10
    );
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
      <div className="selected-option" onClick={handleToggleDropdown}>
        {title}
      </div>
      {isOpen && hasSubItems() && (
        <ul className="options">
          {Array.from(Array(10).keys()).map((index) => {
            const subProp = `sub${index + 1}`;
            if (typeof eval(subProp) !== 'undefined') {
              return (
                <NavLink
                  key={index}
                  to={linked}
                  onClick={() => handleToggleDropdown()}
                >
                  {eval(subProp)}
                </NavLink>
              );
            }
            return null;
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
