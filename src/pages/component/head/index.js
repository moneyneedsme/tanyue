import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./index.scss";
import imgBanner from "../../../images/banner.png";
import imgLogo from "../../../images/logo.png";
import imgCode from "../../../images/code.png";

const Head = () => {
  return (
    <div className="headContainer">
      <div className="headTop">
        <img className="imgLogo" src={imgLogo} alt="LOGO"></img>
        <button className="downApp">
          <span>下载APP</span>
          <div className="showCode">
            <img src={imgCode} alt=""></img>
            <span>扫码下载</span>
          </div>
        </button>
      </div>
      <Swiper>
        <SwiperSlide>
          <img src={imgBanner} alt=""></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Head;
