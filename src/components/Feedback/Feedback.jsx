import s from "./Feedback.module.css";
const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={s.feedbackList}>
      <li>Good:{feedback.good} </li>
      <li>Neutral:{feedback.neutral}</li>
      <li>Bad:{feedback.bad}</li>
      <li>Total:{totalFeedback}</li>
      <li>Positive:{positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
