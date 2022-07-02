// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { Header } from "@/components/Header/Header";
import { FeedbackData, FeedbackDataType } from "@/data/FeedbackData";
import { useState } from "react";
import { FeedbackList } from "@/components/FeedbackList/FeedbackList";
import { FeedbackStats } from "@/components/FeedbackStats/FeedbackStats";
import { FeedbackForm } from "@/components/FeedbackForm/FeedbackForm";

export default function App() {
  const [feedback, setFeedback] =
    useState<Array<FeedbackDataType>>(FeedbackData);

  const addFeedback = (feedbackItem: FeedbackDataType): void => {
    feedbackItem.id = uuidv4();
    setFeedback([...feedback, feedbackItem]);
  };

  const deleteFeedback = (id: number): void => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((feedbackItem) => feedbackItem.id !== id));
    }
  };

  return (
    <>
      <Header text="Hello World" />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
