




import React from 'react';

function Sidebar() {
  return (
    <div>
      <div className="tt">
        <div className="socials">
          <a href="https://www.facebook.com/profile.php?id=100062822932254" target="_blank" rel="noopener noreferrer">
            <img src="src/insta.jpg" alt="Facebook" loading="lazy" className="socicon" />
          </a>
          <a href="http://instagram.com/s_j9893" target="_blank" rel="noopener noreferrer">
            <img src="src/insta.jpg" alt="Instagram" loading="lazy" className="socicon" />
          </a>
          <a href="https://www.linkedin.com/in/suraj-prasad-485398202" target="_blank" rel="noopener noreferrer">
            <img src="src/linkedin.png" alt="Linkedin" loading="lazy" className="socicon" />
          </a>
          <a href="https://github.com/Surajcode49" target="_blank" rel="noopener noreferrer">
            <img src="src/gitr.jpg" alt="Github" className="socicon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar ;