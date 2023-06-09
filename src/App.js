/* import(s) */
import React, { useState } from "react";
import Home from './components/Home';
import Role from './components/Role';

function App() {
  /* init */
  const [selectedPage, setSelectedPage] = useState(null);

  const navigateToPage = (page) => {
    setSelectedPage(page);
  };

  const navigateToHome = () => {
    setSelectedPage(null);
  };

  return (
    <React.Fragment>
      {selectedPage ? (
        <Role selectedPage={selectedPage} navigateToHome={navigateToHome} navigateToPage={navigateToPage} />
      ) : (
        <Home navigateToPage={navigateToPage} />
      )}
    </React.Fragment>
  );
};

export default App;