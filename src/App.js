import './App.css';
import { Header } from './Components/Header';
import {Register, Login} from './Components/Sign';

function App() {

  return (
    <div className="App">
        <Header />
        <Register />
        <Login />
    </div>
  );
}

export default App;
