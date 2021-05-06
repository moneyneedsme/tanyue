import "./index.scss";
import PropTypes from "prop-types";
import imgStar from "../../../images/star.png";
import imgStar1 from "../../../images/star-1.png";
import imgStar2 from "../../../images/star-2.png";
const Score = (props) => {
  const getScore = Math.round(props.score);
  const list = [...new Array(getScore)];
  return (
    <div className="scoreBox">
      <div className="starBox">
        <img src={imgStar} alt="" />
        <img src={imgStar} alt="" />
        <img src={imgStar} alt="" />
        <img src={imgStar} alt="" />
        <img src={imgStar} alt="" />
      </div>
      <div className="starBox starActive">
        {list.map((v, i) => {
          return i === list.length - 1 && getScore > props.score ? (
            <img src={imgStar2} alt="" key={i} />
          ) : (
            <img src={imgStar1} alt="" key={i} />
          );
        })}
      </div>
    </div>
  );
};
Score.propTypes = {
  score: PropTypes.number.isRequired,
};
export default Score;
