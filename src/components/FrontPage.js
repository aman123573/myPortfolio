// import React, { useRef, useEffect } from 'react'
// import Typed from 'typed.js';
// import { forwardRef } from 'react';
import './FrontPage.css'
import Button from '../utility/Button';

import profileImage from '../utility/images/removebg-preview.png'

import { useTheme } from '../ThemeContext';


const FrontPage = () => {

    const {darkMode} = useTheme();

    return (
        <div name='frontpage' className={`front-page `}>
            <div className="left-page">
                <h1>Hi, I'm Aman</h1>
                <h2  className={` designation ${darkMode ? 'purple-color': 'black-color'}`}>Frontend Developer</h2>
                <p className='about-me'>A web developer, always ready to design, develop and produce quality websites.</p>
                <Button>Contact me</Button>
            </div>
            <div className="right-page">
                <img src={profileImage} alt="Portfolio img" />
                

            </div>

        </div>
    )
}

export default FrontPage;
