import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./index.scss";
import imgBanner from "../../../images/banner.png";
import imgLogo from "../../../images/logo.png";

const Head = () => {
  return (
    <div className="headContainer">
      <img className="imgLogo" src={imgLogo} alt="LOGO"></img>
      <button className="downApp">下载APP</button>
      <Swiper>
        <SwiperSlide>
          <img src={imgBanner} alt=""></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Head;
