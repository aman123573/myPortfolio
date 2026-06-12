import SkillContent from '../utility/SkillContent'
import { useTheme } from "../ThemeContext";
import './SkillsPage.css';


const SkillsPage = () => {

  //list of items for different skills
  const frontendskills = ['React.js', 'React Native', 'CSS', 'JavaScript', 'HTML'];
  const frontendskillsprogress = [70, 30, 50, 60, 80];

  const reactskills = ['Node.js', 'Express.js', 'REST APIs', 'WebSocket'];
  const reactskillsprogress = [50, 50, 80, 40];

  const databaseskills = ['MongoDB', 'PostGreSQL', 'Redis'];
  const databaseskillsprogress = [20, 60, 70];

  const otherskills = ['Vercel', 'Github', 'Postman'];
  const otherskillsprogress = [80, 30, 80];



  const { darkMode } = useTheme();
  return (
    <>
      <div name='skill' id='skill' className={`skill_main `}>
        <div className="skill_head">
          <h1>Skills</h1>
          <p className={`${darkMode ? 'purple-color' : 'black-color'}`}>My Technical Skills</p>
        </div>
        <div className="grid-container">
          <SkillContent
            title="Frontend"
            content="More than 1 year"
            items={frontendskills}
            progress={frontendskillsprogress}
          />
          <SkillContent
            title="Backend"
            content="More than 1 year"
            items={reactskills}
            progress={reactskillsprogress}
          />
          <SkillContent
            title="Databases"
            content="More than 1 year"
            items={databaseskills}
            progress={databaseskillsprogress}
          />
          <SkillContent
            title="Cloud & Tools"
            content="More than 1 year"
            items={otherskills}
            progress={otherskillsprogress}
          />
        </div>
      </div>
    </>
  )
}

export default SkillsPage
