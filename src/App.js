import React from 'react'
import "./App.css"
import Main from "./Main/main"
import Header from "./Header/header"

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
     <Main />
     </div>
   </div>
  );
}

export default App;
