// eslint-disable-next-line no-unused-vars
import React from "react";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  const { good, neutral, bad } = feedback;

  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total:{totalFeedback}</li>
        <li>Positive:{positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;