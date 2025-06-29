import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} className="foot-logo" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates tempore quis tenetur repellat dolorum. Non nesciunt libero rem sapiente consequatur explicabo, illum rerum esse corporis ab nobis labore eaque?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li> 
                    <li>Delivery</li>
                    <li>Private Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>7292811161</li>
                    <li>sanketsagarmuz111@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  );
};
export default Footer;
