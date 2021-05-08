import HeadLine from "../head-line/index";
import "./index.scss";
import imgFaculty1 from "../../../images/faculty-1.png";
import imgFaculty2 from "../../../images/faculty-2.png";
import imgFaculty3 from "../../../images/faculty-3.png";
import imgFaculty4 from "../../../images/faculty-4.png";
const Faculty = () => {
  return (
    <div className="faculty mainContainer">
      <HeadLine
        title="师资力量"
        describe="专业背景，给孩子的学习提供坚实保障"
      ></HeadLine>
      <div className="info">
        <div>
          <div>
            <img src={imgFaculty1} alt="" />
          </div>
          <h2>张晶</h2>
          <h3>北师大教育心理学硕士</h3>
          <p>
            多次在《人民日报》等核心刊物发表学术文章，STEAM教育及图形化编程教育资深专家
          </p>
        </div>
        <div>
          <div>
            <img src={imgFaculty2} alt="" />
          </div>
          <h2>夏立</h2>
          <h3>香港理工大学博士</h3>
          <p>
            中国教育技术协会人工智能专委会理事，《青少年编程能力等级标准》召集人及标准主要起草人
          </p>
        </div>
        <div>
          <div>
            <img src={imgFaculty3} alt="" />
          </div>
          <h2>苏扬扬</h2>
          <h3>香港大学教育学博士</h3>
          <p>10年教育工作经验，累计服务超过50个国家的学生，千人直播课名师</p>
        </div>
        <div>
          <div>
            <img src={imgFaculty4} alt="" />
          </div>
          <h2>雷晨</h2>
          <h3>国家心理学咨询师资格</h3>
          <p>
            7年儿童性格教育经验，“十三五”规划教材《儿童性格涵养教学法简明教程》编写者之一”
          </p>
        </div>
      </div>
    </div>
  );
};
export default Faculty;
