import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

// import './AboutPage.css';
import Button from '../utility/Button';

import { useTheme } from '../ThemeContext';

const AboutPage = () => {

  const { darkMode } = useTheme();
  return (
    <div name='about' className="mt-5">
      <div className="flex-col text-center gap-10">
        <h1 className='text-4xl font-bold'>About Me</h1>
        <p className={`${darkMode ? 'text-[#333333]' : 'text-[#6e57e0]'}`}>My introduction</p>
      </div>


      <div className="flex justify-around my-20">
        <div className={`w-[30%] ${darkMode ? 'purple-color' : 'black-color'}`}>
          I'm a Full Stack Developer with 1+ years of professional experience building scalable web and mobile applications. I specialize in React, React Native, Node.js, Express, PostgreSQL, and Redis, with hands-on experience developing real-time systems, financial applications, REST APIs, and cloud-deployed solutions.
        </div>
        <div className="about_intro_experience_main">
          <section className="about_intro_experience">
            <div className="experience_years"><h2>01+</h2>Years Professional Experience</div>
            <div className="projects_count"><h2>15+</h2>Completed Projects</div>
            <div className="internships_count"><h2>01</h2>Internship completed</div>
          </section>
          <section>
            <a
              href="/Aman_Kumar_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Download CV {<FileDownloadOutlinedIcon />}</Button></a>
          </section>

        </div>
      </div>
    </div>
  )
}

export default AboutPage;
