// @flow
import * as React from "react";
import { Card } from "@/components/shared/Card";
import { useState } from "react";
import { Button } from "@/components/shared/Button";
import { RatingSelect } from "@/components/RatingSelect/RatingSelect";
import { FeedbackDataType } from "@/data/FeedbackData";

type FeedbackFormProps = {
  handleAdd: (feedback: FeedbackDataType) => void;
};

export const FeedbackForm = ({ handleAdd }: FeedbackFormProps) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState<number>(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState<string | null>("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };

      handleAdd(newFeedback);

      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)}></RatingSelect>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};
