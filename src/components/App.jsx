import Description from "./Description/Description";
import Options from "./Options/Options";
import "./App.module.css";
import Feedback from "./Feedback/Feedback";
import { useState, useEffect } from "react";
import Notification from "./Notification/Notification";

const App = () => {
  // const [feedback, setFeedback] = useState(() => {
  //   const savedData = JSON.parse(window.localStorage.getItem("feedback"));
  //   if (savedData !== null) {
  //     return savedData;
  //   }
  //   return {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };
  // });
  const [feedback, setFeedback] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("feedback")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));

    //
    // if (feedbackType === "good") {
    //   setFeedback({
    //     ...feedback,
    //     good: feedback.good + 1,
    //   });
    // }
    // if (feedbackType === "neutral") {
    //   setFeedback({
    //     ...feedback,
    //     neutral: feedback.neutral + 1,
    //   });
    // }
    // if (feedbackType === "bad") {
    //   setFeedback({
    //     ...feedback,
    //     bad: feedback.bad + 1,
    //   });
    // }
  };

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
