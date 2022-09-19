import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <p className="footer__caption">Сайт представлен для портфолио</p>
        <div className="footer__etc">
          <nav>
            <ul className="footer__list list">
              <li className="footer__element">
                <a href="https://t.me/serhio_mv" target="_blank" className="footer__link link" rel="noreferrer">Telegram</a>
              </li>
              <li className="footer__element">
                <a href="https://github.com/JettPy" target="_blank" className="footer__link link" rel="noreferrer">Github</a>
              </li>
            </ul>
          </nav>
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
