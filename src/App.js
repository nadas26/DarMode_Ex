import { useCallback, useContext } from "react";
import Button from "./components/Button";
import ThemeContext, { ThemeContextProvider } from "./components/ThemeContext";
import "./styles.css";
import lightTheme, { darkTheme } from "./theme";

const SwitchThemeButton = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const handleClick = useCallback(() => {
    setTheme(theme.name === "light" ? darkTheme : lightTheme);
  }, [setTheme, theme]);

  return <Button onClick={handleClick}>Switch</Button>;
};

const App = () => {
  return (
    <ThemeContextProvider>
      <div className="p-4 bg-white dark:bg-slate-800">
        <h1 className="text-4xl mb-4">Hello SUP!</h1>
        <div className="flex mb-4 ">
          <Button>Sign up</Button>
          <Button variant="secondary">Log in</Button>
        </div>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <SwitchThemeButton />
      </div>
    </ThemeContextProvider>
  );
};

export default App;
