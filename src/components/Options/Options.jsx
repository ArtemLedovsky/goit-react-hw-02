import s from "./Options.module.css";
const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={s.buttonList}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback ? <button onClick={resetFeedback}>Reset</button> : ""}
    </div>
  );
};

export default Options;
