// @flow
import { FeedbackDataType } from "@/data/FeedbackData";
import { FeedbackItem } from "@/components/FeedbackItem/FeedbackItem";

type FeedbackListProps = {
  feedback: Array<FeedbackDataType>;
  handleDelete: (id: number) => void;
};

export const FeedbackList = ({
  feedback,
  handleDelete,
}: FeedbackListProps): JSX.Element => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((feedbackItem) => (
        <FeedbackItem
          key={feedbackItem.id}
          inputId={feedbackItem.id}
          inputRating={feedbackItem.rating}
          inputText={feedbackItem.text}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};
