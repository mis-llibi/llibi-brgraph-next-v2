import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface FinalDataContextType {
  finalData: {
    insurer_id: number;
    startDate: any;
    endDate: any;
    masterlist: string;
    py: string;
    clientId: number;
    insurer: string;
  }[];
  setFinalData: React.Dispatch<React.SetStateAction<any>>;
}

const FinalDataContext = createContext<FinalDataContextType | undefined>(
  undefined
);

export const FinalDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [finalData, setFinalData] = useState<
    {
      insurer_id: number;
      startDate: any;
      endDate: any;
      masterlist: string;
      py: string;
      clientId: number;
      insurer: string;
    }[]
  >([]);

  useEffect(() => {
    console.log("finalData", finalData);
  }, [finalData]);

  return (
    <FinalDataContext.Provider value={{ finalData, setFinalData }}>
      {children}
    </FinalDataContext.Provider>
  );
};

export const useFinalData = (): FinalDataContextType => {
  const context = useContext(FinalDataContext);
  if (context === undefined) {
    throw new Error("useFinalData must be used within a FinalDataProvider");
  }
  return context;
};
