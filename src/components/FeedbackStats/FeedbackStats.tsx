// @flow
import * as React from "react";
import { useContext } from "react";
import FeedbackContext from "@/context/FeedbackContext";

export const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  //Calculate rating average
  const ratingAverage = (): string => {
    if (!feedback || feedback.length === 0) {
      return "0";
    }

    const ratings = feedback.map((feedbackItem) => feedbackItem.rating);
    const sum = ratings.reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(1).replace(/\.0+$/, "");
  };

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {ratingAverage()}</h4>
    </div>
  );
};
