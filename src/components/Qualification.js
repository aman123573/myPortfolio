import { useState } from 'react';
import './Qualification.css'

// import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const Qualification = () => {

    // const { darkMode } = useTheme();

    const [activeTab, setActiveTab] = useState('education');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };


    return (
        <>

            <section name='qualification' className="qualification__section">
                <div className="qualification__head">
                    <h2 className="section__title">Qualification</h2>
                    <span className="section__subtitle">My Personal journey</span>

                </div>

                <div className="qualification__container container">
                    <div className="qualification__tabs">
                        <div className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`} onClick={() => handleTabClick('education')} data-target="#education">
                            <i className="uil uil-graduation-cap qualification__icon"></i>
                            Education
                        </div>
                        <div className={`qualification__button button--flex ${activeTab === 'work' ? 'qualification__active' : ''}`} onClick={() => handleTabClick('work')} data-target="#work">
                            <i className="uil uil-briefcase-alt qualification__icon"></i>
                            Internships
                        </div>
                    </div>

                    <div className="qualification__sections">

                        <div className={`qualification__content ${activeTab === 'education' ? 'qualification__active' : ''} left_content`} data-content="" id="education">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                            <div className="qualification__data">
                                <h3 className="qualification__title">
                                    Computer Science Engineer(GPA:7.41)
                                </h3>
                                <span className="qualification__subtitle">CMR Institute of Technology, Bengaluru</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020-2024
                                </div>

                            </div>
                        </div>

                        <div className={`qualification__content ${activeTab === 'education' ? 'qualification__active' : ''} right_content`} data-content="" id="education">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>

                            <div className="qualification__data">

                                <h3 className="qualification__title">
                                    Higher Secondary(77%)
                                </h3>
                                <span className="qualification__subtitle">RNP Public School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2017-2019
                                </div>

                            </div>
                        </div>

                        <div className={`qualification__content ${activeTab === 'education' ? 'qualification__active' : ''} left_content`} data-content="" id="education">

                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>

                            <div className="qualification__data">

                                <h3 className="qualification__title">
                                    Secondary Educatin(GPA:10.0)
                                </h3>
                                <span className="qualification__subtitle">Chapra Central School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016-2017
                                </div>

                            </div>
                        </div>
                        <div className={`qualification__content ${activeTab === 'work' ? 'qualification__active' : ''}`} data-content="" id="work">

                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>

                            <div className="qualification__data">

                                <h3 className="qualification__title">
                                    Web Development Intern
                                </h3>
                                <span className="qualification__subtitle">Prodigy InfoTech</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    Feb,2024-March,2024
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Qualification
