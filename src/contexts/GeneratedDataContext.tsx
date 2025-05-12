"use client";
import { createContext, useState, useContext } from "react";

interface GeneratedDataContextType {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

const GeneratedDataContext = createContext<GeneratedDataContextType>({
  data: null,
  setData: () => {},
});

export const GeneratedDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState(null);

  return (
    <GeneratedDataContext.Provider value={{ data, setData }}>
      {children}
    </GeneratedDataContext.Provider>
  );
};

export const useGeneratedData = () => useContext(GeneratedDataContext);
