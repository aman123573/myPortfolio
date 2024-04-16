import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import { IconButton, LinearProgress } from "@mui/material"
// import { makeStyles } from "@mui/styles";
// import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import HtmlOutlinedIcon from '@mui/icons-material/HtmlOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';

// import { useTheme } from "../ThemeContext";

import './SkillContent.css'

// const useStyles = makeStyles((theme) => ({
//     progressBar: {
//         height: 8, // Adjust the height of the progress bar as needed
//         borderRadius: 4, // Add border radius for a rounded look
//         backgroundColor: "#6e57e0", // Set the background color of the progress bar
//     },
//     progressBarColorPrimary: {
//         backgroundColor: "#6e57e0", // Set the custom color for the progress bar
//     },
// }));

const SkillContent = ({ title, content, items, progress }) => {

    // const classes = useStyles();
    const [expand, setExpand] = useState(false);
    const expandHandleFunc = () => {
        setExpand(prevMode => !prevMode)
    }

    const renderIcon = () => {
        if (title === 'Frontend development') {
            return <HtmlOutlinedIcon sx={{ color: '#6e57e0' }} />
        }
        else if (title === 'React Js') {
            return <CodeOutlinedIcon sx={{ color: '#6e57e0' }} />
        }
        else if (title === 'Databases') {
            return <StorageOutlinedIcon sx={{ color: '#6e57e0' }} />
        }
        else if (title === 'Others') {
            return <LaptopOutlinedIcon sx={{ color: '#6e57e0' }} />
        }

    }


    return (
        <div className="grid-element">
            <div className="left-grid-element">
                <div className="icon-container">
                    {renderIcon()}
                </div>

                <h3>{title}</h3>
                <p className={expand ? 'expanded' : 'collapsed'}>{content}</p>
                {expand &&
                    (<ul className="item-list">
                        {items.map((item, index) =>
                        (
                            <li key={index} title={progress[index]}>
                                {item}
                                <LinearProgress
                                    // classes={{
                                    //     root: classes.progressBar,
                                    //     colorPrimary: classes.progressBarColorPrimary,
                                    // }}
                                    variant="determinate"
                                    value={progress[index]} />
                            </li>
                        )
                        )}
                    </ul>
                    )}
            </div>
            <div className="right-grid-element">

                <IconButton onClick={expandHandleFunc}>
                    {expand ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
            </div>

        </div>
    )
}

export default SkillContent
