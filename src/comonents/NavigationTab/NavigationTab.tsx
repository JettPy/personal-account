import { useState } from 'react';
import './NavigationTab.scss';

interface NavigationTabProps {
  loggedIn: boolean
}

function NavigationTab({ loggedIn }: NavigationTabProps) {
  const [isMenuOpened, stIsMenuOpened] = useState(false);

  const onOpenMenu = () => {
    stIsMenuOpened(true);
  };

  const onCloseMenu = () => {
    stIsMenuOpened(false);
  };

  return (
    <div className='navigation'>
      <span className='navigation__menu-button' onClick={onOpenMenu}></span>
      <nav className={`navigation__menu${isMenuOpened ? ' navigation__menu_opened' : ''}`}>
        <span className='navigation__close-button' onClick={onCloseMenu}></span>
        {
          loggedIn ?
            <>
              <a href='/profile' className='navigation__link link'>Профиль</a>
              <a href='/exit' className='navigation__link link'>Выйти</a>
            </>
            :
            <>
              <a href='/sign-in' className='navigation__link link'>Войти</a>
              <a href='/sign-up' className='navigation__link link'>Регистрация</a>
            </>
        }
      </nav>
    </div>
  );
}

export default NavigationTab;
