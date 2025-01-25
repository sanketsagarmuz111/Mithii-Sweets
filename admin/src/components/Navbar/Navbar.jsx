import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="admin_logo">
        <img src={assets.logo} className="logo" alt="" />
        <b className="admin">Admin Panel</b>
      </div>
      <img src={assets.profile_image} className="profile" alt="" />
    </div>
  );
};

export default Navbar;
