import { createContext, useContext } from "react";

const ThemeContext = createContext({
    themeMode: 'light',
    toggleTheme: () => { }
});
const ThemeContextProvider = ThemeContext.Provider;
export default ThemeContextProvider;

export function UseTheme(params) {
    return useContext(ThemeContext)
}