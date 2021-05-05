import "./index.scss";
import HeadLine from "../head-line/index";
import CurriculumSwiper from "./curriculum-swiper/index";
import imgCode from "../../../images/code.png";
const CurriculumSystem = () => {
  return (
    <div className="curriculumSystem mainContainer">
      <HeadLine
        title="课程体系"
        describe="9阶细化分级，能力培养层层提升"
      ></HeadLine>
      <div className="curriculum">
        <div className="leftNav">
          <div>适龄参考</div>
          <div>培养目标</div>
          <div>适龄参考</div>
          <div>适龄参考</div>
          <div>
            <p>立刻领取课程</p>
            <img src={imgCode} alt="" />
          </div>
        </div>
        <div className="curriculumInfo">
          <CurriculumSwiper />
        </div>
      </div>
    </div>
  );
};
export default CurriculumSystem;
