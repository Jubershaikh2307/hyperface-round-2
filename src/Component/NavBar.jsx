import "./navbar.css";

import { IoIosSettings } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";

const navItem = ["Feature", "Discover", "Stories", "Community", "Blogs"];

export const NavBar = () => (
  <div className="nav-bar">
    <div>
      <IoPersonCircle style={{ width: "100px", height: "100px" }} />
      <h1>Social</h1>
    </div>
    <div>
      {navItem.map((elem, i) => (
        <p key={i}>{elem}</p>
      ))}
    </div>
    <div>
      <h1 className="login">Login</h1>
      <div
        style={{
          height: "22px",
          backgroundColor: "#673AB7",
          borderRadius: "20px",
          padding: "10px",
          color: "white",
          textAlign: "center",
          marginRight: "20px",
        }}
      >
        See Detail
      </div>
      <hr />
      <IoIosSettings
        style={{ width: "50px", height: "50px", marginLeft: "20px" }}
      />
    </div>
  </div>
);
