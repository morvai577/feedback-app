import { useContext, useState } from "react";
import { Card } from "@/components/shared/Card";
import { FaEdit, FaTimes } from "react-icons/all";
import FeedbackContext from "@/context/FeedbackContext";

type FeedbackItemProps = {
  item: {
    id: number;
    text: string;
    rating: number;
  };
};

export const FeedbackItem = ({ item }: FeedbackItemProps): JSX.Element => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};
