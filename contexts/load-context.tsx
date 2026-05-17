"use client";

import {
  useState,
  useEffect,
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type LoadContextValue = {
  isLoaded: boolean;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
};

const LoadContext = createContext<LoadContextValue>({
  isLoaded: false,
  setIsLoaded: () => {},
});

export const LoadProvider = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <LoadContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </LoadContext.Provider>
  );
};
export default LoadContext;
