import { createContext } from "react";

/**  "green" is the state 
 * & the function is the updater
 * => in this case we don't do anything
 */
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;