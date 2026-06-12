import { useState } from 'react';
import './Qualification.css'

// import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const Qualification = () => {

  // const { darkMode } = useTheme();

  const [activeTab, setActiveTab] = useState("education")



  const educationData = [
    {
      title: "Computer Science Engineer(GPA:7.54)",
      institution: "CMR Institute of Technology, Bengaluru",
      period: "2020-2024",
    },
    {
      title: "Higher Secondary(77%)",
      institution: "RNP Public School",
      period: "2017-2019",
    },
    {
      title: "Secondary Education(GPA:10.0)",
      institution: "Chapra Central School",
      period: "2016-2017",
    },
  ]

  const internshipData = [
    {
      title: "Junior Software Developer",
      institution: "Faspi Enterprises",
      period: "May 2025-May 2026",
    },
    {
      title: "Web Development Intern",
      institution: "Prodigy",
      period: "2022-2023",
    },
  ]

  return (
    <div className="app-container">

      <div className="qualification-section">
        <h2 className="section-title">Qualification/Work Experience</h2>
        <p className="section-subtitle">My Personal Journey</p>

        {/* Toggle Buttons */}
        <div className="toggle-buttons">
          <button
            className={`toggle-btn ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            className={`toggle-btn ${activeTab === "internships" ? "active" : ""}`}
            onClick={() => setActiveTab("internships")}
          >
            Experience
          </button>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline">
            <div className="timeline-line"></div>
            <div className="timeline-items">
              {(activeTab === "education" ? educationData : internshipData).map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-info">
                      <h3 className="timeline-title">{item.title}</h3>
                      <p className="timeline-subtitle">{item.institution}</p>
                    </div>
                    <div className="timeline-date">
                      <p>{item.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Qualification
