import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(prevMode => !prevMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <Header onDarkModeClick={toggleDarkMode} isDarkMode={isDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
