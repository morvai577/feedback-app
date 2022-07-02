import { useState } from "react";
import { Card } from "@/components/shared/Card";
import { FaTimes } from "react-icons/all";

type FeedbackItemProps = {
  inputId: number;
  inputRating: number;
  inputText: string;
  handleDelete: (id: number) => void;
};

export const FeedbackItem = ({
  inputId,
  inputRating,
  inputText,
  handleDelete,
}: FeedbackItemProps): JSX.Element => {
  const [rating, setRating] = useState<number | null>(inputRating);
  const [text, setText] = useState<string | null>(inputText);

  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      <button onClick={() => handleDelete(inputId)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};
