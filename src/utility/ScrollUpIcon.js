import { ArrowUpwardOutlined } from "@mui/icons-material";
import './ScrollUpIcon.css'

const ScrollUpIcon = () => {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (
        <div className="scroll-to-top" onClick={scrollUp}>
            <ArrowUpwardOutlined />
        </div>
    )
}

export default ScrollUpIcon
