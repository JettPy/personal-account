import { useState } from 'react';
import Header from '../Header/Header';
import './App.scss';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header loggedIn={isLoggedIn}/>
      <button onClick={() => {setIsLoggedIn(!isLoggedIn)}}>Дебаг</button>
    </>
  );
}

export default App;
