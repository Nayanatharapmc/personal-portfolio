import "./FooterStyles.css";
import React from 'react';
import { FaFacebook, FaGithub, FaHome, FaMailBulk, FaPhone } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}} />
                </div>
                <div>
                    <p>"Tharaka", Dolaboda</p>
                    <p>Warakapitiya, Denipitiya.</p>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}} />
                    <p>+94 71 0611 261</p></h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}} />
                    <p>chethmi.21@cse.mrt.ac.lk</p></h4>
                </div>
                
            </div>
            <div className="right">
                <h4>© 2024 Chethmi Nayanathara. All Rights Reserved.</h4>
                <div className="social">
                    <FaFacebook size={30} style={{color:'#fff', marginRight:'2rem'}} />
                    <FaLinkedin size={30} style={{color:'#fff', marginRight:'2rem'}} />
                    <FaGithub size={30} style={{color:'#fff', marginRight:'2rem'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
