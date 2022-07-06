import { useContext, useState } from "react";
import { Card } from "@/components/shared/Card";
import { FaTimes } from "react-icons/all";
import FeedbackContext from "@/context/FeedbackContext";

type FeedbackItemProps = {
  inputId: number;
  inputRating: number;
  inputText: string;
};

export const FeedbackItem = ({
  inputId,
  inputRating,
  inputText,
}: FeedbackItemProps): JSX.Element => {
  const { deleteFeedback } = useContext(FeedbackContext);
  const [rating, setRating] = useState<number | null>(inputRating);
  const [text, setText] = useState<string | null>(inputText);

  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      <button onClick={() => deleteFeedback(inputId)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};
