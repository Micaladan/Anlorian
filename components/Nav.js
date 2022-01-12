import Link from 'next/link';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
import SignOut from './SignOut';
import { useUser } from './User';

export function uncheck() {
  document.getElementById('navi-toggle').checked = false;
}

export default function Nav() {
  const user = useUser();
  const { toggleCart } = useCart();
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
          {/* Show this if not logged in */}
          {!user && (
            <>
              <li className="navigation__item">
                <Link href="/signin">
                  <a onClick={uncheck} className="navigation__link">
                    Sign In
                  </a>
                </Link>
                <Link href="/signin">
                  <a onClick={uncheck} className="navigation__link">
                    Register
                  </a>
                </Link>
              </li>
            </>
          )}

          <li>
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
          {/* Show these only if logged in */}
          {user && (
            <>
              <li className="navigation__item">
                <Link href="/products">
                  <a onClick={uncheck} role="link" className="navigation__link">
                    Products
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
              <li className="navigation__item">
                <Link href="/products">
                  <a onClick={toggleCart} className="navigation__link">
                    Toggle Cart
                    <CartCount
                      count={user.cart.reduce(
                        (tally, cartItem) =>
                          tally + (cartItem.product ? cartItem.quantity : 0),
                        0
                      )}
                    />
                  </a>
                </Link>
              </li>
              <li className="navigation__item">
                <SignOut></SignOut>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
