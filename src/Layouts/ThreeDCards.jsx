import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Carousel.scss';

const Carousel = () => {
    const [tX, setTX] = useState(0);
    const [tY, setTY] = useState(10);
    const [desX, setDesX] = useState(0);
    const [desY, setDesY] = useState(0);

    useEffect(() => {
        const ospin = document.getElementById('spin-container');

        // Animation start after 1000 milliseconds
        setTimeout(() => init(), 1000);

        // Auto spin
        const rotateSpeed = -60;
        const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
        ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }, []);

    const init = (delayTime) => {
        const aEle = document.querySelectorAll('#spin-container img, #spin-container video');
        const imgWidth = 120;
        const imgHeight = 170;
        const radius = 240;

        document.getElementById('spin-container').style.width = `${imgWidth}px`;
        document.getElementById('spin-container').style.height = `${imgHeight}px`;

        const ground = document.getElementById('ground');
        ground.style.width = `${radius * 3}px`;
        ground.style.height = `${radius * 3}px`;

        aEle.forEach((ele, i) => {
            ele.style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
            ele.style.transition = 'transform 1s';
            ele.style.transitionDelay = delayTime || (aEle.length - i) / 4 + 's';
        });
    };

    const applyTransform = (obj) => {
        // Constrain the angle of the camera (between 0 and 180)
        if (tY > 180) setTY(180);
        if (tY < 0) setTY(0);

        // Apply the angle
        obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    };

    const playSpin = (yes) => {
        document.getElementById('spin-container').style.animationPlayState = yes ? 'running' : 'paused';
    };

    const handlePointerDown = (e) => {
        const odrag = { timer: null };
        clearInterval(odrag.timer);
        const sX = e.clientX;
        const sY = e.clientY;

        const handlePointerMove = (e) => {
            const nX = e.clientX;
            const nY = e.clientY;
            setDesX(nX - sX);
            setDesY(nY - sY);
            setTX((prevTX) => prevTX + desX * 0.1);
            setTY((prevTY) => prevTY + desY * 0.1);
            applyTransform(odrag);
        };

        const handlePointerUp = () => {
            odrag.timer = setInterval(() => {
                setDesX((prevDesX) => prevDesX * 0.95);
                setDesY((prevDesY) => prevDesY * 0.95);
                setTX((prevTX) => prevTX + desX * 0.1);
                setTY((prevTY) => prevTY + desY * 0.1);
                applyTransform(odrag);
                playSpin(false);
                if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                    clearInterval(odrag.timer);
                    playSpin(true);
                }
            }, 17);

            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerUp);
        };

        document.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerUp);

        return false;
    };

    const handleMouseWheel = (e) => {
        const d = e.wheelDelta / 20 || -e.detail;
        const radius = 240 + d;
        init(1);
    };
    return (
        <div className="universities-main">
        <div className="universities-title">Universities</div>
            <div id="uni-drag-container" onMouseWheel={handleMouseWheel}>
                <div id="spin-container" onPointerDown={handlePointerDown}>
                    {/* Add your images (or video) here */}
                    {/* ... (unchanged) */}

                    {/* Text at the center of the ground */}
                    {/* <Link to="https://www.google.com/"><img src="https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></Link> */}
                    <Link to="https://www.google.com/"><img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></Link>
                    <Link to="https://www.google.com/"><img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></Link>
                    <Link to="https://www.google.com/"><img src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></Link>
                    {/* <Link to="https://www.google.com/"><img src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></Link> */}
                    {/* <Link to="https://www.google.com/"><img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></Link>

                    <a target="_blank" href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg">
                        <img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </a>

                    {/* <video controls autoplay="autoplay" loop>
                        <source src="https://player.vimeo.com/external/322244668.sd.mp4?s=338c48ac2dfcb1d4c0689968b5baf94eee6ca0c1&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
                    </video> */}
                    <p>3D Tiktok Carousel</p>
                </div>
                <div id="ground"></div>
            </div>
        </div>
    );
};

export default Carousel;
