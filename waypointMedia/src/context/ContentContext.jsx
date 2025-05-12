import { createContext, useContext } from "react";
import { content } from "@/assets/data/data";

const ContentContext = createContext(null);

// Hook to use content anywhere
export const useContent = () => useContext(ContentContext);

// Provider to wrap your app
export const ContentProvider = ({ children }) => {
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};
