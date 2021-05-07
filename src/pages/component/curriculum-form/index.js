import HeadLine from "../head-line/index";
import "./index.scss";
import imgCurriculumform from "../../../images/curriculum-form.jpg";
import imgIcon5 from "../../../images/icon-5.png";
import imgIcon6 from "../../../images/icon-6.png";
const Curriculumform = () => {
  return (
    <div className="curriculumform mainContainer">
      <HeadLine
        title="课程形式"
        describe="趣味课堂+老师辅导，引导陪伴每个孩子的成长"
      ></HeadLine>
      <div className="details">
        <img src={imgCurriculumform} alt="" />
        <div>
          <div>
            <img src={imgIcon5} alt="" />
            <h3>随时随地</h3>
            <p>真人老师辅导</p>
          </div>
          <div>
            <img src={imgIcon6} alt="" />
            <h3>无限回看</h3>
            <p>AI互动课堂</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Curriculumform;
