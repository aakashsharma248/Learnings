import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Header = () => {
  const contextData = useContext(ThemeContext);
  console.log(contextData, "contextData");
  return <h1>This is a Header</h1>;
};
