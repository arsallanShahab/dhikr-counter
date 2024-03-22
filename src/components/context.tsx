import { COUNTER_STORAGE_KEY, DEFAULT_THEME } from "@/lib/consts";
import { FC, createContext, useContext, useEffect, useState } from "react";

export type GlobalContext = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

export type GlobalProviderProps = {
  children: React.ReactNode;
};

const GlobalContext = createContext<GlobalContext>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">(DEFAULT_THEME);
  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };

export const useGlobalContext = () => useContext(GlobalContext);
