import React, { useContext } from "react";
import "./Works.css";
import USquare from "../../img/usquare.png";
import NewTech from "../../img/newtech.png";
import Amazon from "../../img/amazon.png";
import Hash from "../../img/hash.png";
import CFX from "../../img/coin.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands &amp; Clients</span>
          {/* <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane> */}
          <Link to="contact" smooth={true} spy={true} style={{marginTop:"-20px"}}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={NewTech} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Hash} alt="" />
          </div>
          <div className="w-secCircle">
            <img src=" " alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={CFX} alt="" width={700} height={400}/>
          </div>
          <div className="w-secCircle">
            <img src={USquare} alt="" width={300} height={150}/>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
