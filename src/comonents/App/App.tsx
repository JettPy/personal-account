import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.scss';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header loggedIn={isLoggedIn}/>
      <button onClick={() => {setIsLoggedIn(!isLoggedIn)}}>Дебаг</button>
      <Footer />
    </>
  );
}

export default App;
