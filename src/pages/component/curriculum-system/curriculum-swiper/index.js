import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper.scss";
import "./index.scss";
import Score from "../../score/index";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Autoplay, Pagination]);
const CurriculumSwiper = () => {
  const _blue = "#7447ff";
  const _yellow = "#fbc103";
  const _green = "#01c4c1";
  const [nodes, setNodes] = useState([]);
  useEffect(() => {
    setNodes(
      document.querySelectorAll(
        ".curriculumSwiper .swiper-pagination .swiper-pagination-bullet"
      )
    );
  }, []);
  const setinit = (index) => {
    nodes[index].click();
  };

  return (
    <div className="curriculumSwiper">
      <div className="swiperNav">
        <div className="system bgBlue" onMouseEnter={() => setinit(0)}>
          <div className="first">
            <div>L1</div>
            <div>L2</div>
            <div>L3</div>
          </div>
          <div>初阶课50课时</div>
          <div>适合 8 岁+</div>
          <div>编程入门，编程思维</div>
          <div>NCT图形化编程一级</div>
        </div>
        <div className="system bgYellow" onMouseEnter={() => setinit(1)}>
          <div className="second">
            <div>L4</div>
            <div>L5</div>
            <div>L6</div>
          </div>
          <div>进阶课50课时</div>
          <div>适合 8～9 岁</div>
          <div>数理夯实，解决问题</div>
          <div>NCT图形化编程二级</div>
        </div>
        <div className="system bgGreen" onMouseEnter={() => setinit(2)}>
          <div className="third">
            <div>L7</div>
            <div>L8</div>
            <div>L9</div>
          </div>
          <div>高阶课50课时</div>
          <div>适合 10 岁+</div>
          <div>高级编程，算法进阶</div>
          <div>NCT图形化编程三级</div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <SwiperBox color={_blue} arrow="left" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperBox color={_yellow} arrow="center" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperBox color={_green} arrow="right" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const SwiperBox = (props) => {
  const videoSrc =
    "https://f.video.weibocdn.com/E6L5bFhxlx07Mq4Am5PG0104120083dj0E010.mp4?label=mp4_hd&template=960x464.25.0&trans_finger=62b30a3f061b162e421008955c73f536&ori=0&ps=1BVp4ysnknHVZu&Expires=1620225548&ssig=q88ZmOGO4e&KID=unistore,video";
  return (
    <div className="swiperBox">
      <h2>初阶课程: 《游戏风波》</h2>
      <div className="flexRow">
        <video src={videoSrc} controls="controls"></video>
        <div className="introduce">
          <h3>课程介绍：</h3>
          <p>
            勇敢的少女悠悠穿越丛林拯救同伴。本节课
            我们将探索编程中的条件判断结构，掌握度
            数、随机数等数学知识，同时通过丰富的动
            画科普人文历史，通过对作品的解构、分析
            和调试锻炼逻辑思维和创造力，提升问题解 决能力。
          </p>
        </div>
      </div>
      <div className="flexRow">
        <div>
          <div className="category">
            <div style={{ background: props.color || "#7447ff" }}>编程知识</div>
            <p>分支结构，随机</p>
          </div>
          <div className="category">
            <div style={{ background: props.color || "#7447ff" }}>知识融合</div>
            <p>相对运动，角度，负数</p>
          </div>
          <div className="category">
            <div style={{ background: props.color || "#7447ff" }}>学习方法</div>
            <p>结构拆解</p>
          </div>
        </div>
        <div className="score">
          <div>
            <span>计算思维</span>
            <Score score={4.6} />
          </div>
          <div>
            <span>创造思维</span>
            <Score score={4} />
          </div>
          <div>
            <span>逻辑思维</span>
            <Score score={4} />
          </div>
        </div>
      </div>
      <div
        className={"instructions arrow_" + props.arrow}
        style={{
          background: props.color || "#7447ff",
          color: props.color || "#7447ff",
        }}
      ></div>
    </div>
  );
};
export default CurriculumSwiper;
