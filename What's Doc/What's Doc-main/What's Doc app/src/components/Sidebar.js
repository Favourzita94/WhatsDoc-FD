import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import "./Sidebar.css";
import Logo1 from "../components/logo1.jpg";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../components/Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }

  const logout = () => {
    localStorage.removeItem("userList");
    navigate("/");
  };
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <a href="/">
            <img src={Logo1} alt="logo" />
          </a>
          
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <a
                href={`#${item.id}`}
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)} // onClick={() => }
              >
                <item.icon />
                <span>{item.heading}</span>
              </a>
            );
          })}
        </div>
      </motion.div>
      <div className="logoutdiv">
      <UilSignOutAlt className='logouticon'/>
        <button onClick={logout} className="logoutbtn">Logout</button>
       
      </div>
    </>
  );
};

export default Sidebar;
