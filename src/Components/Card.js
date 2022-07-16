import "./Card.css";
const Card = (props) => {
  return <div className="app-wrapper">{props.children}</div>;
};

export default Card;
