import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-skin.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="logo skin" />
          <span>Tienda Skin</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
