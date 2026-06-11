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
          Web developer,having a quite knowledge on frontend skills. Doing BTech in CSE and have a lots of experience in developing projects. Learning React Js as my next skill and looking further to explore more in this field.
        </div>
        <div className="about_intro_experience_main">
          <section className="about_intro_experience">
            <div className="experience_years"><h2>02+</h2>Years of project experience</div>
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
