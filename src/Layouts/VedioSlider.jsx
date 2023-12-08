// VideoCardSlider.js
import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel/slick/slick';
// import InstagramEmbed from 'react-instagram-embed';


// import './VideoCardSlider.scss';

const VideoCardSlider = () => {
  useEffect(() => {
    $('.video-slider').slick({
      centerMode: true,
      arrows: true,
      centerPadding: '70px',
      variableWidth: true,
      dots: true,
      slidesToShow: 3,
      autoplay: true,        
      autoplaySpeed: 1000, 
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ],
    });
  }, []);

  return (
    <div className="video-slider">
      {/* Video Card 1 */}
      <div className="video-card">
        <iframe
          title="Video 2"
          src="https://www.instagram.com/reel/C0eZc2gomoC/?utm_source=ig_web_copy_link"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p>Video Title 2</p>
      </div>

      {/* Video Card 2 */}
      <div className="video-card">
        <iframe
          title="Video 2"
          src="https://www.instagram.com/reel/CzeJL2yMsSk/?igshid=ZDBjMWI0ZjMxOQ=="
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p>Video Title 2</p>
      </div>

      {/* Video Card 3 */}
      <div className="video-card">
        <iframe
          title="Video 3"
          src="https://www.instagram.com/reel/CzeJL2yMsSk/?igshid=ZDBjMWI0ZjMxOQ=="
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p>Video Title 3</p>
      </div>

      {/* Video Card 3 */}
      <div className="video-card">
        <iframe
          title="Video 3"
          src="https://www.instagram.com/reel/CzeJL2yMsSk/?igshid=ZDBjMWI0ZjMxOQ=="
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p>Video Title 3</p>
      </div>

      {/* Video Card 3 */}
      <div className="video-card">
        <iframe
          title="Video 3"
          src="https://www.instagram.com/watch?v=/CzeJL2yMsSk/?igshid=ZDBjMWI0ZjMxOQ=="
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p>Video Title 3</p>
      </div>

      {/* Video Card 3 */}
      <div className="video-card">
        <iframe
          title="Video 3"
          src="https://www.youtube.com/embed/KvRwK2qsU_o?rel=0&amp;showinfo=0&amp;wmode=opaque&amp;autoplay=1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p>Video Title 3</p>
      </div>

      {/* Video Card 3 */}
      <div className="video-card">
        <iframe
          title="Video 3"
          src="https://www.youtube.com/embed/KvRwK2qsU_o?rel=0&amp;showinfo=0&amp;wmode=opaque&amp;autoplay=1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p>Video Title 3</p>
      </div>

      {/* Video Card 3 */}
      <div className="video-card">
        <iframe
          title="Video 3"
          src="https://www.youtube.com/embed/KvRwK2qsU_o?rel=0&amp;showinfo=0&amp;wmode=opaque&amp;autoplay=1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p>Video Title 3</p>
      </div>

      {/* Video Card 3 */}
      <div className="video-card">
        <iframe
          title="Video 3"
          src="https://www.youtube.com/embed/KvRwK2qsU_o?rel=0&amp;showinfo=0&amp;wmode=opaque&amp;autoplay=1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p>Video Title 3</p>
        <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/C0I3KAgLBWB/?utm_source=ig_web_copy_link"
        data-instgrm-version="13"
        style={{ width: '100%' }}
      ></blockquote>
      </div>

      {/* Add more video cards as needed */}
      
    </div>
  );
};

export default VideoCardSlider;
