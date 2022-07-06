// @flow
import { FeedbackItem } from "@/components/FeedbackItem/FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "@/context/FeedbackContext";

export const FeedbackList = (): JSX.Element => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} item={feedbackItem} />
      ))}
    </div>
  );
};
