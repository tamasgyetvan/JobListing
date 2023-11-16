import { createContext, useState, ReactNode } from "react";
import jobData from "../../data.json";
import { JobObject } from "../types/JobObject.type";

type DataContextProviderProps = {
  children: ReactNode;
};
type DataContext = {
  data: Array<JobObject>;
};

export const DataContext = createContext({} as DataContext);

export const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const [data, setData] = useState<Array<JobObject>>(jobData);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
