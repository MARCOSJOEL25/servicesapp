import "./App.css";
import { Header } from "./Components/Header";
import { Register, Login } from "./Components/Sign";
import React, { useState } from "react";

function App() {
  var userLogin = []

  var modelUserLogin = {
    'Email': "",
    'Password': ""
  }
 
  const [SignVar, setSignVar] = useState("");
  const [modelUserLoginVar, setmodelUserLoginVar] = useState(modelUserLogin);

  var template = "";
  const Sign = () => {
    switch (SignVar) {
      case "Register":
        template = <Register />;
        break;
      case "Login":
        template = <Login setmodelUserLoginVar={setmodelUserLoginVar} />;
        break;
      default:
        template = <div>{'Nothing'}</div>
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
