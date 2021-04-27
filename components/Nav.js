import Link from 'next/link';

export default function Nav() {
  function uncheck() {
    document.getElementById('navi-toggle').checked = false;
  }

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link href="/">
              <a onClick={uncheck} className="navigation__link">
                Home
              </a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="/about">
              <a onClick={uncheck} role="link" className="navigation__link">
                About Anlorian
              </a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="/blog">
              <a onClick={uncheck} className="navigation__link">
                Development Blog
              </a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="/contact">
              <a onClick={uncheck} className="navigation__link">
                Contact Us
              </a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="/charactersheet">
              <a onClick={uncheck} className="navigation__link">
                Character Sheet
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
