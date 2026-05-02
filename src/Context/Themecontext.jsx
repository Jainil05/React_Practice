import React, { createContext, useState } from "react";

export const ThemeDataContext = createContext()

const Themecontext = (props) => {
  const [theme, setTheme] = useState("light");

  return (
    <div>
        <ThemeDataContext.Provider value={[theme,setTheme]}>
              {props.children}
        </ThemeDataContext.Provider>
    </div>
  );
};

export default Themecontext;
