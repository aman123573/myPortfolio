import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import './AboutPage.css';
import Button from '../utility/Button';

import { useTheme } from '../ThemeContext';

const AboutPage = () => {

  const { darkMode } = useTheme();
  return (
    <div name='about' className={`about_main `}>
      <div className="about_head">
        <h1>About Me</h1>
        <p className={`${darkMode ? 'purple-color': 'black-color'}`}>My introduction</p>
      </div>


      <div className="about_intro">
        <div className={`about_intro_para ${darkMode ? 'purple-color': 'black-color'}`}>
          Web developer,having a quite knowledge on frontend skills. Doing BTech in CSE and have a lots of experience in developing projects. Learning React Js as my next skill and looking further to explore more in this field.
        </div>
        <div className="about_intro_experience_main">
          <section className="about_intro_experience">
            <div className="experience_years"><h2>02+</h2>Years of project experience</div>
            <div className="projects_count"><h2>15+</h2>Completed Projects</div>
            <div className="internships_count"><h2>01</h2>Internship completed</div>
          </section>
          <section><a href='https://drive.google.com/file/d/1my9I8vlVgIyEz1cfC9WuQYtUfkWeXaIM/view?usp=drive_link' download><Button>Download CV {<FileDownloadOutlinedIcon />}</Button></a></section>

        </div>
      </div>
    </div>
  )
}

export default AboutPage;
