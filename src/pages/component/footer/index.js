import "./index.scss";
import imgLogo2 from "../../../images/logo2.png";
import imgCode from "../../../images/code.png";
import imgGzh from "../../../images/gongzhonghao.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="info">
          <img src={imgLogo2} className="logo" alt="" />
          <div className="aboutUs">
            <div>
              <span>联系我们</span>
              <i>客服电话 400-835-3800 (周一至周日 9:00-21:00)</i>
            </div>
            <div>
              <span>公司地址</span>
              <i>深圳市前海深港合作区南山街道兴海大道3044号信利康大厦25-31层</i>
            </div>
          </div>
          <div className="down">
            <img src={imgCode} alt="" />
            <p>下载APP</p>
          </div>
          <div className="down">
            <img src={imgGzh} alt="" />
            <p>关注公众号</p>
          </div>
        </div>
        <div className="tip">
          <div>
            <span>服务协议</span>
            <span>隐私政策</span>
            <span>粤公网安备 44030602003657号</span>
          </div>
          <p>
            Copyright © 2015-2021 Shenzhen Dianmao Technology Company Limited.
            All right reserved.粤ICP备 15030912号
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
