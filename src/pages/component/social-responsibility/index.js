import HeadLine from "../head-line/index";
import "./index.scss";
import social1 from "../../../images/social-1.jpg";
import social2 from "../../../images/social-2.bmp";
const SocialResponsibility = () => {
  return (
    <div className="socialResponsibility mainContainer">
      <HeadLine
        title="社会责任"
        describe="提供更多的教育机会、更有价值的教育资源"
      ></HeadLine>
      <div className="info">
        <img src={social1} alt="" />
        <div>
          <h2>《爱的分贝》公益活动</h2>
          <p>
            2020年12月，编程猫探月联手“爱的分贝”基金会发起《为爱而声》
            公益活动。通过用户完成学习任务累计公益币的形式共计捐赠100万
            人民币。该笔善款将用于人工耳蜗植入项目的资助，帮助更多听障孩
            子回归有声世界。
          </p>
        </div>
      </div>
      <div className="info">
        <img src={social2} alt="" />
        <div>
          <h2>领克公益项目</h2>
          <p>
            2021年，编程猫、领克在中国互联网发展基金会的监督下，联合发起
            《“益”起学编程》编程教育普及公益活动。通过用户完成学习任务累
            计公益币的形式，捐赠超过300套课程，为欠发达地区的青少年提供
            学习编程启蒙的机会，推进我国编程教育的普及。{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default SocialResponsibility;
