// @ts-ignore
import { Header } from "@/components/Header/Header";
import { FeedbackList } from "@/components/FeedbackList/FeedbackList";
import { FeedbackStats } from "@/components/FeedbackStats/FeedbackStats";
import { FeedbackForm } from "@/components/FeedbackForm/FeedbackForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "@/pages/About/AboutPage";
import { AboutIconLink } from "@/components/AboutIconLink/AboutIconLink";
import { FeedbackProvider } from "@/context/FeedbackContext";

export default function App() {
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
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
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
