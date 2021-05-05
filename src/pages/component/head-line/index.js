import "./index.scss";
const HeadLine = (props) => {
  return (
    props.title && (
      <div className="headLine">
        <h2>{props.title}</h2>
        <p>{props.describe}</p>
      </div>
    )
  );
};
export default HeadLine;
