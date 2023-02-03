import { useContext } from "react";
import { ThemeContext } from "../../context/theme";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div>Home page</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>Theme is set to: {theme}</div>
    </>
  );
}
