import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import Crankmaster from "../../img/crank-master.png"
import Hash from "../../img/hash-web.png"
import Vanigam from "../../img/vanigam.png"
import CFX1 from "../../img/CFX1.png"
import CFX2 from "../../img/CFX2.png"
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Hash} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Vanigam} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Crankmaster} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CFX1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CFX2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
