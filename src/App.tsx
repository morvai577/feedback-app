// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { Header } from "@/components/Header/Header";
import { FeedbackData, FeedbackDataType } from "@/data/FeedbackData";
import { useState } from "react";
import { FeedbackList } from "@/components/FeedbackList/FeedbackList";
import { FeedbackStats } from "@/components/FeedbackStats/FeedbackStats";
import { FeedbackForm } from "@/components/FeedbackForm/FeedbackForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "@/pages/About/AboutPage";
import { AboutIconLink } from "@/components/AboutIconLink/AboutIconLink";
import { FeedbackProvider } from "@/context/FeedbackContext";

export default function App() {
  const [feedback, setFeedback] =
    useState<Array<FeedbackDataType>>(FeedbackData);

  const addFeedback = (feedbackItem: FeedbackDataType): void => {
    feedbackItem.id = uuidv4();
    setFeedback([feedbackItem, ...feedback]);
  };

  const deleteFeedback = (id: number): void => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((feedbackItem) => feedbackItem.id !== id));
    }
  };

  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header text="Hello World" />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIconLink />
      </BrowserRouter>
    </FeedbackProvider>
  );
}
