import { useState } from "react";
import { Card } from "@/components/shared/Card";

type FeedbackItemProps = {
  inputRating: number;
  inputText: string;
};

export const FeedbackItem = ({
  inputRating,
  inputText,
}: FeedbackItemProps): JSX.Element => {
  const [rating, setRating] = useState<number | null>(inputRating);
  const [text, setText] = useState<string | null>(inputText);

  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card>
  );
};
