// @flow
import { FeedbackDataType } from "@/data/FeedbackData";
import { FeedbackItem } from "@/components/FeedbackItem/FeedbackItem";

type FeedbackListProps = {
  feedback: Array<FeedbackDataType>;
};

export const FeedbackList = ({ feedback }: FeedbackListProps): JSX.Element => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((feedbackItem) => (
        <FeedbackItem
          key={feedbackItem.id}
          inputRating={feedbackItem.rating}
          inputText={feedbackItem.text}
        />
      ))}
    </div>
  );
};
