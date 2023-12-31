import React from 'react';
// import Success from './Sucess';
// import Img from '../Assets/Australia.jpg'

const  Success = () => {
  
  return (
    <div className='sucess-main-part'>
      <section className="sucess-intro">
        <div className="sucess-intro-content">
          <h1 className="sucess-title"> Pacific-Overseas</h1>
          <p className="sucess-description">
            <span className="collage-art">Collage Art</span> lets you weave magic by
            combining different elements – think photographs, illustrations,
            textures, and patterns – into a visual symphony. Push the boundaries
            of your artistic expression and create a masterpiece with the help of
            AI! Join this artistic journey, where your imagination meets the
            limitless possibilities of AI.
          </p>
          <a href="#featured" className="sucess-btn">Join</a>
        </div>

        <div className="sucess-card-container">
          <div style={{ "--r": -15, "--y": 40, "--x": 50 }} className="sucess-card">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/585555c4-71c1-4c4a-b551-a2895047fbba" alt="" />
          </div>
          <div style={{ "--r": 5, "--y": -30, "--x": 30 }} className="sucess-card">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5ede54b2-dfec-4f5e-81b1-df8089481b08" alt="" />
          </div>
          <div style={{ "--r": 15, "--y": 50, "--x": 0 }} className="sucess-card">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4548f9dd-e67e-4585-8a2d-821c40e3471b" alt="" />
          </div>
        </div>
      </section>

      <section className="sucess-featured" id="featured">
        <div className="gradient-line"></div>
        <h1 className="sucess-featured-title">Featured</h1>
        <div className="grid-area">
          <div className="sucess-item art-one">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a7081089-be4b-42e3-bfe9-691dbac43603" alt="A Good Boy" />
          </div>
          <div className="sucess-item art-two">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/bd3d4b31-03c6-47a2-9d1c-c355cada1512" alt="City Life" />
          </div>
          <div className="sucess-item art-three">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2e280db7-6bb2-4acb-8aa0-c23d4906a1d5" alt="An Ode to Mushrooms" />
          </div>
          <div className="sucess-item art-four">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e910c96c-eaed-4291-937d-b38d7cd0f0db" alt="A Woman in Complexity" />
          </div>
          <div className="sucess-item art-five">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/8daeb10c-87c4-4b37-baa1-43559718ed05" alt="Steampunk" />
          </div>
          <div className="sucess-item art-six">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/533fc7a4-e1f1-4683-9bcd-1f1386552a67" alt="Dragon in Silks" />
          </div>
          <div className="sucess-item art-seven">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/14efe3d5-940b-47d7-b9d3-c9b882ff905f" alt="Cut and Paste Face" />
          </div>
          <div className="sucess-item art-eight">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/037f6971-f851-48fa-b793-b8eac9b39865" alt="Dolphins in the Sea" />
          </div>
          <div className="sucess-item art-nine">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5a118a78-ca7c-4878-995d-49ceb06c754a" alt="The Raven's Song" />
          </div>
          <div className="sucess-item art-ten">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/bc8cdd3a-784e-43ff-9363-661ee9becab2" alt="Haunted House" />
          </div>
          <div className="sucess-item art-eleven">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/ef40ae8d-3ece-4d33-8974-9e16ade79784" alt="The World of Butterflies" />
          </div>
          <div className="sucess-item art-twelve">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7ce32896-2c31-4e46-b6f7-7dc76916aafb" alt="Lost in Thought" />
          </div>
        </div>

        <div className="sucess-lightbox">
          <div className="sucess-slide prev">
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div className="img-container">
            <div className="img-header">
              <p>title</p>
            </div>
            <div className="img-body">
              <img src="sample.jpg" alt="" />
            </div>
          </div>
          <div className="sucess-slide next">
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Success;
