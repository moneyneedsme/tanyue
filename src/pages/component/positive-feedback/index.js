import HeadLine from "../head-line/index";
import "./index.scss";
import imgIcon7 from "../../../images/icon-7.png";
import imgIcon8 from "../../../images/icon-8.png";
import imgIcon9 from "../../../images/icon-9.png";
import imgIcon10 from "../../../images/icon-10.png";
const PositiveFeedback = () => {
  return (
    <div className="positiveFeedback mainContainer">
      <HeadLine title="好评反馈" describe="一步一脚印，收获看得见"></HeadLine>
      <div className="info">
        <div>
          <img src={imgIcon7} alt="" />
          <h2>逸凡</h2>
          <h3>(10岁，学龄6个月)</h3>
          <p>
            分享逸凡的3点提升！
            <br /> 1. 畏难情绪降低，有克服困难的勇气！
            <br /> 2. 目标感增强，主动设立目标并努力实现！
            <br />
            3.沟通能力提升，主动与老师沟通解决问题！
          </p>
          <p>讲述人：逸凡妈妈</p>
        </div>
        <div>
          <img src={imgIcon8} alt="" />
          <h2>嘉涵</h2>
          <h3>(9岁，学龄11个月)</h3>
          <p>
            我们获得的不止是编程上的知识，萌萌老师每天会分享晚安故事、儿童心理等信息，我们对教育、对嘉涵有了新的感受，通过鼓励，嘉涵对自己更加自信啦！
          </p>
          <p>讲述人：嘉涵爸爸</p>
        </div>
        <div>
          <img src={imgIcon9} alt="" />
          <h2>桓桓</h2>
          <h3>(8岁，学龄7个月)</h3>
          <p>
            学编程之后最显著的收获是问题处理能力，以前马马虎虎，现在会找原因并按步骤解决了。咱们课程视频讲解也很好，锻炼孩子表达能力，还能复习课程。
          </p>
          <p>讲述人：桓桓妈妈</p>
        </div>
        <div>
          <img src={imgIcon10} alt="" />
          <h2>达峰</h2>
          <h3>(10岁，学龄6个月)</h3>
          <p>
            我想成为宇航员，通过课程我学习了重力、坐标……培根老师还经常陪我查资料，我要从解决眼前的小问题开始踏上自己的探月之旅！
          </p>
          <p>讲述人：学员本人</p>
        </div>
      </div>
    </div>
  );
};
export default PositiveFeedback;
