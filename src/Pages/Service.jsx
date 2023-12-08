import React from 'react';
// import './YourComponent.scss';

const YourComponent = () => {
  return (
    <div className="c-section">
      <h2 className="c-section__title">
        <span>Our Services</span>
      </h2>
      <ul className="c-services">
        <li className="c-services__item">
          <h3>Responsive Web Design</h3>
          <p>
            We leverage the concept of mobile-first design. Through our work, we focus on designing an experience that works across different screen sizes.
          </p>
        </li>
        <li className="c-services__item">
          <h3>UX Auditing</h3>
          <p>
            If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your product. From there, we can take it further and fix all issues.
          </p>
        </li>
        {/* ... (similar structure for other services) */}
      </ul>
    </div>
  );
};

export default YourComponent;
