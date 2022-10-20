import "./App.css";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { MainBlock } from "./components/MainBlock/MainBlock";
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">{isLoggedIn ? <MainBlock setIsLoggedIn={setIsLoggedIn}/> : <LoginPage setIsLoggedIn={setIsLoggedIn} />}</div>
  );
}

export default App;
