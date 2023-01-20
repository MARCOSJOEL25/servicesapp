import "./App.css";
import { Header } from "./Components/Header";
import { Register, Login } from "./Components/Sign";
import React, { useState } from "react";

function App() {
  const [SignVar, setSignVar] = useState("Login");

  var template = "";
  const Sign = () => {
    switch (SignVar) {
      case "Register":
        template = <Register />;
        break;
      case "Login":
        template = <Login setSignVar={setSignVar}/>;
        break;
      default:
        template = <div>{'Welcome'}</div>
    }
    return <div>{template}</div>;
  };

  return (
    <div className="App">
      <Header setSignVar={setSignVar}/>
       {Sign()}
    </div>
  );
}

export default App;
