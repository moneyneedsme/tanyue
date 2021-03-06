import "./index.scss";
import HeadLine from "../head-line/index";
import imgPhone from "../../../images/phone.png";
import imgCode from "../../../images/code.png";
import imgArrowDown from "../../../images/arrow-down.png";
import imgAndroid from "../../../images/android.png";
import imgIos from "../../../images/ios.png";
import imgIcon1 from "../../../images/icon-1.png";
import imgIcon2 from "../../../images/icon-2.png";
import imgIcon3 from "../../../images/icon-3.png";
import imgIcon4 from "../../../images/icon-4.png";
const MobileProgramming = () => {
  return (
    <div className="mobileProgramming mainContainer">
      <HeadLine
        title="移动化编程"
        describe="手机平板随时编创，多维度综合提升"
      ></HeadLine>
      <div className="downBox">
        <img src={imgPhone} alt="" />
        <div className="downInfo">
          <p>扫码下载</p>
          <img src={imgCode} alt="" />
          <div className="downMode">
            <img src={imgIos} alt="" />
            <span>IOS</span>
            <img src={imgArrowDown} alt="" />
          </div>
          <div className="downMode">
            <img src={imgAndroid} alt="" />
            <span>Android</span>
            <img src={imgArrowDown} alt="" />
          </div>
        </div>
      </div>
      <div className="classify">
        <div>
          <img src={imgIcon1} alt="" />
          <h3>大势所趋</h3>
          <p>人工智能发展，互联网科技革新，编程成为与未来对话的语言。</p>
        </div>
        <div>
          <img src={imgIcon2} alt="" />
          <h3>思维培养</h3>
          <p>阶段性课程设置，培养孩子逻辑思维，提升孩子计算思维和创造能力。</p>
        </div>
        <div>
          <img src={imgIcon3} alt="" />
          <h3>知识拓展</h3>
          <p>课程紧密结合STEAM、人文史社、数理科学等方面，增加孩子知识储备。</p>
        </div>
        <div>
          <img src={imgIcon4} alt="" />
          <h3>能力提升</h3>
          <p>PBL项目制学习，培养孩子高效解决问题的能力和表达能力。</p>
        </div>
      </div>
    </div>
  );
};
export default MobileProgramming;
