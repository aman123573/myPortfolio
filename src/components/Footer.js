import './Footer.css';
import { Link } from 'react-router-dom';

// import { RiHeartFill  } from "@remixicon/react";
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <section name='footer' className='footer__section'>
      <div className="content__section">

        <div className="first__section">
          <h1>Aman Kumar</h1>
          <p>Frontend Developer</p>
        </div>
        <div className="second__section">
          <div className="items">
            <ul>
              <li>
                <Instagram
                  style={{ color: "red" , backgroundColor:"white",borderRadius:"10px"}}
                  className="my-icon" // add custom class name
                />
                <Link to="https://www.instagram.com/amankumar7974?igsh=bjQ0bHM5azlqZHoz" target='_blank'>Instagram</Link>
              </li>
              <li>
                <Twitter
                  style={{ color: "skyblue", backgroundColor:"white",borderRadius:"10px" }}
                  className="my-icon"
                />
                <Link to="https://twitter.com/AmanKum28759185" target='_blank'>Twitter</Link>
              </li>
              <li>
                <LinkedIn
                  style={{ color: "#0366c3", backgroundColor:"white",borderRadius:"10px" }}
                  className="my-icon"
                />
                <Link to="https://www.linkedin.com/in/aman-kumar-aaa409215/" target='_blank'>Linkedin</Link>
              </li>
              <li>
                <GitHub
                  style={{ color: "gray", backgroundColor:"white",borderRadius:"10px" }}
                  className="my-icon"
                />

                <Link to="https://github.com/aman123573/" target='_blank'>GitHub</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright__section">
        <p>&copy; Aman kumar. All rights reserved.</p>
      </div>

    </section>
  )
}

export default Footer
