
import Button from '../utility/Button';

import profileImage from '../utility/images/removebg-preview.png'

import { useTheme } from '../ThemeContext';


const FrontPage = () => {

    const { darkMode } = useTheme();
    console.log("dark", darkMode)

    return (
        <div name='frontpage' className='flex justify-around items-center mx-auto my-4 h-[70vh]'>
            <div className="my-2 flex-col justify-center items-center text-center">
                <h1 className={`text-6xl font-bold ${darkMode} ? 'text-black' : 'text-white'`}>Hi, I'm Aman</h1>
                <h2 className='text-2xl my-2 text-[#6e57e0]'>FullStack Developer</h2>
                <p className='w-[70%] m-auto text-gray-500'>A developer, always ready to design, develop and produce quality websites.</p>
                <Button >Contact me</Button>
            </div>
            <div className="flex-col items-center ">
                <img src={profileImage} alt="Portfolio img" className='rounded-full w-[60%] h-[60%]' />
            </div>

        </div>
    )
}

export default FrontPage;
