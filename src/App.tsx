import { Header } from "@/components/Header/Header";
import { FeedbackData, FeedbackDataType } from "@/data/FeedbackData";
import { useState } from "react";
import { FeedbackList } from "@/components/FeedbackList/FeedbackList";

export default function App() {
  const [feedback, setFeedback] =
    useState<Array<FeedbackDataType>>(FeedbackData);

  return (
    <>
      <Header text="Hello World" />
      <div className="App">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}
