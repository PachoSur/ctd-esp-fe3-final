import { createContext , useReducer, useState, useEffect} from "react";

export const initialState = {theme: "light", data: []}

const TOGGLE_THEME = "TOGGLE_THEME";

export const ContextGlobal = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error("Error fetching API data:", error));
  }, []);

  return (
    <ContextGlobal.Provider value={{ theme: state.theme, toggleTheme, apiData }}>
      {children}
    </ContextGlobal.Provider>
  );
};
