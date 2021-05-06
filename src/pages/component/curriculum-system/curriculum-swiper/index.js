import { useState, useEffect } from "react";
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
  const slide1 = {
    arrow: "left", // 箭头指向
    color: _blue,
    title: "《游戏风波》",
    describe:
      "勇敢的少女悠悠穿越丛林拯救同伴。本节课我们将探索编程中的条件判断结构，掌握度数、随机数等数学知识，同时通过丰富的动画科普人文历史，通过对作品的解构、分析和调试锻炼逻辑思维和创造力，提升问题解决能力",
    category: [
      { name: "编程知识", content: "分支结构，随机" },
      { name: "知识融合", content: "相对运动，角度，负数" },
      { name: "学习方法", content: "结构拆解" },
    ],
    scoreList: [
      { name: "计算思维", score: 4.6 },
      { name: "创造思维", score: 4 },
      { name: "逻辑思维", score: 5 },
    ],
  };
  const slide2 = {
    arrow: "center", // 箭头指向
    color: _yellow,
    title: "《暗夜丛林历险》",
    describe:
      "阿短在暗夜丛林中寻找一只敏捷的秀颌龙，并且要将它驱赶走。本节课将使用随机数积木控制秀颌龙在1秒内移到随机位置，与“移到随机”积木做对比，区分“移到随机”和“在1秒内移到随机坐标”的区别。提升对数学坐标的认知和抽象概念的理解。",
    category: [
      { name: "编程知识", content: "在1秒内移到随机坐标" },
      { name: "知识融合", content: "坐标与随机数相结合" },
      { name: "学习方法", content: "任务驱动式" },
    ],
    scoreList: [
      { name: "计算思维", score: 4.6 },
      { name: "创造思维", score: 4 },
      { name: "逻辑思维", score: 5 },
    ],
  };
  const slide3 = {
    arrow: "right", // 箭头指向
    color: _green,
    title: "《星光丛林怪兽迷踪》",
    describe:
      "阿短需要找出藏在星光丛林里面的怪兽。本节课我们将学习列表与角色造型的结合运用，运用带参函数实现列表值的替换。同时通过有趣的科普视频了解《关灯游戏》原理，并将其运用于编程之中。锻炼逻辑思维和创造力，提升问题解决能力。",
    category: [
      { name: "编程知识", content: "带参函数、列表替换" },
      { name: "知识融合", content: "游戏设计与编程结合" },
      { name: "学习方法", content: "问题驱动式" },
    ],
    scoreList: [
      { name: "计算思维", score: 4.6 },
      { name: "创造思维", score: 4 },
      { name: "逻辑思维", score: 5 },
    ],
  };
  useEffect(() => {
    const swiper = new SwiperCore(".curriculumSwiper .swiper-container", {
      loop: true,
      autoplay: { delay: 4000, disableOnInteraction: false },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    swiper.el.onmouseover = function () {
      swiper.autoplay.stop();
    };
    swiper.el.onmouseleave = function () {
      swiper.autoplay.start();
    };
    setTimeout(() => {
      setNodes(
        document.querySelectorAll(
          ".curriculumSwiper .swiper-pagination .swiper-pagination-bullet"
        )
      );
    }, 1000);
  }, []);
  const setinit = (index) => {
    nodes[index] && nodes[index].click();
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
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <SwiperBox {...slide1} />
          </div>
          <div className="swiper-slide">
            <SwiperBox {...slide2} />
          </div>
          <div className="swiper-slide">
            <SwiperBox {...slide3} />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

const SwiperBox = (props) => {
  const videoSrc =
    "https://f.video.weibocdn.com/E6L5bFhxlx07Mq4Am5PG0104120083dj0E010.mp4?label=mp4_hd&template=960x464.25.0&trans_finger=62b30a3f061b162e421008955c73f536&ori=0&ps=1BVp4ysnknHVZu&Expires=1620225548&ssig=q88ZmOGO4e&KID=unistore,video";
  return (
    <div className="swiperBox">
      <h2>初阶课程: {props.title}</h2>
      <div className="flexRow">
        <video src={videoSrc} controls="controls"></video>
        <div className="introduce">
          <h3>课程介绍：</h3>
          <p>{props.describe}</p>
        </div>
      </div>
      <div className="flexRow">
        <div>
          {props.category.map((v, i) => {
            return (
              <div className="category" key={v.name + i}>
                <div style={{ background: props.color || "#7447ff" }}>
                  {v.name}
                </div>
                <p>{v.content}</p>
              </div>
            );
          })}
        </div>
        <div className="score">
          {props.scoreList.map((v, i) => {
            return (
              <div key={v.name + i}>
                <span>{v.name}</span>
                <Score score={v.score} />
              </div>
            );
          })}
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
