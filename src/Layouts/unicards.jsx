import React from 'react';
// import './ParallaxFlippingCards.css'; // Import your CSS file if you have one

const  ThreeDCards = () => {
  return (
    <div className="wrapper">
      <div className='uni-title'>Universities</div>
      <div className="cols">
        {/* Card 1 */}
        <div className="col" onTouchStart={() => this.classList.toggle('hover')}>
          <div className="container">
            <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/500/500/)' }}>
              <div className="inner">
                <p>Diligord</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col" onTouchStart={() => this.classList.toggle('hover')}>
          <div className="container">
            <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/511/511/)' }}>
              <div className="inner">
                <p>Rocogged</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col" onTouchStart={() => this.classList.toggle('hover')}>
          <div className="container">
            <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/502/502/)' }}>
              <div className="inner">
                <p>Strizzes</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col" onTouchStart={() => this.classList.toggle('hover')}>
          <div className="container">
            <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/502/502/)' }}>
              <div className="inner">
                <p>Strizzes</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
              </div>
            </div>
          </div>
        </div>
        

        {/* Continue adding similar blocks for each card */}
        {/* ... */}

      </div>
    </div>
  );
};

export default ThreeDCards;