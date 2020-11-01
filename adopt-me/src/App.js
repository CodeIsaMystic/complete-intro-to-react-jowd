import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router, Link } from "@reach/router";
import  SearchParams  from './SearchParams';
import  Details  from './Details';
import ThemeContext from './ThemeContext';


const App = () => {
  /**  same way:
   * => const [color, setColor] = useState('darkblue)
   * & here the default color value
   */
  const themeHook = useState('darkblue');
 
  /** :id =>the way doing variables using path  **/
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header> 
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode> 
  )

};

render(<App />, document.getElementById("root"));
