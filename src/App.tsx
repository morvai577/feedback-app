import { AboutIconLink } from "@/components/AboutIconLink/AboutIconLink";
import { FeedbackForm } from "@/components/FeedbackForm/FeedbackForm";
import { FeedbackList } from "@/components/FeedbackList/FeedbackList";
import { FeedbackStats } from "@/components/FeedbackStats/FeedbackStats";
import { Header } from "@/components/Header/Header";
import { FeedbackProvider } from "@/context/FeedbackContext";
import { AboutPage } from "@/pages/About/AboutPage";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <ChakraProvider>
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
        </ChakraProvider>
      </BrowserRouter>
    </FeedbackProvider>
  );
}
