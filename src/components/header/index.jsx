import React from "react";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./style.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} className="app-logo" alt="logo" />
      </Link>
      <motion.div className="title" initial={{ y: -300 }} animate={{ y: 0 }}>
        <h1>Hui Pizza</h1>
      </motion.div>
    </header>
  );
};

export default Header;
