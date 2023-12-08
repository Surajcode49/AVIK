import React, { useEffect } from 'react';
// import './YourStylesheet.scss'; // Make sure to replace with your actual stylesheet
// import './Mountain.css';
import LogoImg from '../Assets/logo.png';
import bgImg from '../Assets/travel.jpg';

const ParallaxMountains = () => {
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      document.getElementById('mountain_left').style.left = `-${value / 0.7}px`;
      document.getElementById('clouds_2').style.left = `-${value * 2}px`;
      document.getElementById('mountain_right').style.left = `${value / 0.7}px`;
      document.getElementById('clouds_1').style.left = `${value * 2}px`;
      document.getElementById('text').style.top = `-${value}px`;
      document.getElementById('man').style.height = `${window.innerHeight - value}px`;
    };

    window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <div className='mounatin-body'>
      <section className="top">
        <img src={bgImg} id="bg" alt="Background" />
        <h2 id="text">Pacific</h2>
        {/* <img src={LogoImg} alt="" id="text"  /> */}
        <img src="https://aryan-tayal.github.io/Mountains-Parallax/man.png" id="man" alt="Man" />
        <img src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_1.png" id="clouds_1" alt="Clouds 1" />
        <img src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_2.png" id="clouds_2" alt="Clouds 2" />
        <img src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_left.png" id="mountain_left" alt="Mountain Left" />
        <img src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_right.png" id="mountain_right" alt="Mountain Right" />
      </section>
      {/* <section id="sec">
        <h2>Welcome to the Mountains</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A earum ipsam laboriosam mollitia, architecto esse voluptates eligendi provident soluta et cupiditate sit nisi at dolorum iure dignissimos cumque amet necessitatibus blanditiis? Earum assumenda soluta reiciendis recusandae, incidunt tenetur nihil adipisci corrupti, quibusdam ullam numquam iusto veritatis facilis ab dicta, nobis inventore eius magni eveniet quo? Repellat nobis quos, facilis quam perspiciatis asperiores delectus, aliquid nihil molestias in at modi nulla minima deleniti. Minima aliquid magnam libero reiciendis et, nesciunt repellendus eum vel rerum alias ea enim fugiat eius. Quae dolores, amet nam ab officiis corrupti sequi eligendi quo culpa illum.
        </p>
      </section> */}
      {/* <footer>
        <a href=""><i className="fa-solid fa-house"></i></a>
        <a href=""><i className="fa-solid fa-mountain-sun"></i></a>
        <a href=""><i className="fa-solid fa-person-hiking"></i></a>
        <a href=""><i className="fa-solid fa-people-group"></i></a>
        <a href=""><i className="fa-solid fa-gears"></i></a>
      </footer> */}
    </div>
  );
};

export default ParallaxMountains;
