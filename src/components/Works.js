import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Button from '../utility/Button';

import img1 from '../utility/images/work1.png'
import img2 from '../utility/images/Screenshot (215).png'

import './Works.css';
import { useState } from 'react';

const workSlides = [
  {
    img: img2,
    title: 'NewsApp',
    description: 'Newsapp built using React and newsapi for fetching news across the world.',
    link: "https://github.com/aman123573/newsapp/tree/master"
  },
  {
    img: img1,
    title: 'Movie Management',
    description: 'A CRUD application for movie recommendation.',
    link: "https://github.com/aman123573/Movie-Managament-System/tree/master"
  },
]




const Works = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  const prevClickHandler = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? workSlides.length - 1 : prevIndex - 1))
  };
  const nextClickHandler = () => {
    setActiveIndex((prevIndex) => (prevIndex === workSlides.length - 1 ? 0 : prevIndex + 1))
  };


  return (
    <>
      <section name="portfolio" className='works__main'>
        <div className="works__head">
          <h2 className="section__title">Works</h2>
          <span className="section__subtitle">My recent works</span>

        </div>
        <div className={`works__display `}>
          <div className="left__arrow" onClick={prevClickHandler}>
            <ChevronLeftOutlinedIcon style={{ color: '#6e57e0', cursor: 'pointer' }} />
          </div>
          <div className="works__content">
            <img src={workSlides[activeIndex].img} alt="" />

            <div className="details">
              <h1>{workSlides[activeIndex].title}</h1>
              <p>{workSlides[activeIndex].description}</p>
              <a href={workSlides[activeIndex].link} target="_blank" rel="noopener noreferrer"><Button>Demo</Button></a>
            </div>

          </div>
          <div className="right__arrow" onClick={nextClickHandler}>
            <ChevronRightOutlinedIcon style={{ color: '#6e57e0', cursor: 'pointer' }} />
          </div>
        </div>
        <div className="dots">
          {workSlides.map((slide, index) => {
            return (
              <span
                key={index}
                className={index === activeIndex ? 'active' : 'dim'}
                onClick={() => setActiveIndex(index)}
              ></span>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Works
