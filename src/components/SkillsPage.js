import SkillContent from '../utility/SkillContent'
import { useTheme } from "../ThemeContext";
import './SkillsPage.css';


const SkillsPage = () => {

  //list of items for different skills
  const frontendskills = ['HTML', 'CSS', 'JavaScript', 'Tailwind'];
  const frontendskillsprogress = [70, 50, 60, 30];

  const reactskills = ['Components', 'State', 'ContextApi', 'Router'];
  const reactskillsprogress = [80, 70, 50, 20];

  const databaseskills = ['MongoDB', 'MySql'];
  const databaseskillsprogress = [20, 60];

  const otherskills = ['C/C++', 'DSA', 'Github'];
  const otherskillsprogress = [80, 50, 30];



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
            title="Frontend development"
            content="More than 1 year"
            items={frontendskills}
            progress={frontendskillsprogress}
          />
          <SkillContent
            title="React Js"
            content="Less than 1 year"
            items={reactskills}
            progress={reactskillsprogress}
          />
          <SkillContent
            title="Databases"
            content="Less than 1 year"
            items={databaseskills}
            progress={databaseskillsprogress}
          />
          <SkillContent
            title="Others"
            content="More than 2 year"
            items={otherskills}
            progress={otherskillsprogress}
          />
        </div>
      </div>
    </>
  )
}

export default SkillsPage
