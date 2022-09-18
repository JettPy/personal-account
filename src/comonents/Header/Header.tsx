import logo from '../../images/logo.png';
import NavigationTab from '../NavigationTab/NavigationTab';
import './Header.scss';

interface HeaderProps {
  loggedIn: boolean
}

function Header({ loggedIn }: HeaderProps) {
  return (
    <div className='header'>
      <div className='header__wrapper'>
        <a href='/' className='header__link link'>
          <img src={logo} alt='Логотип' className='header__logo'/>
          Главная
        </a>
        <NavigationTab loggedIn={loggedIn}/>
      </div>
    </div>
  );
}

export default Header;
