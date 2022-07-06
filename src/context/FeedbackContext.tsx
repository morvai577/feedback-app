import { createContext, ReactNode, useState } from "react";

const FeedbackContext = createContext({});

type FeedbackProviderProps = {
  children: ReactNode;
};

export const FeedbackProvider = ({ children }: FeedbackProviderProps) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
  ]);

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
