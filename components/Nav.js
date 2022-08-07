import Link from 'next/link';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
import SignOut from './SignOut';
import { useUser } from './User';
import NavStyles from './styles/NavStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function uncheck() {
  document.getElementById('navi-toggle').checked = false;
}

export default function Nav() {
  const user = useUser();
  const { toggleCart } = useCart();

  return (
    <NavStyles className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label
        htmlFor="navi-toggle"
        className="navigation__button navigation__background"
      >
        <span className="navigation__icon"></span>
      </label>
      <div className="navigation__background"></div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li>
            <Link href="/">
              <a onClick={uncheck} className="navigation__brand">
                Anlorian
              </a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="/about">
              <a onClick={uncheck} role="link" className="focus">
                About Anlorian
              </a>
            </Link>
          </li>

          <li className="navigation__item">
            <Link href="/contact">
              <a onClick={uncheck} className="focus">
                Contact Us
              </a>
            </Link>
          </li>
          {/* Show these only if logged in */}
          {user && (
            <>
              <li className="navigation__item">
                <Link href="/lore">
                  <a onClick={uncheck} role="link" className="focus">
                    Lore
                  </a>
                </Link>
              </li>
              <li className="navigation__item">
                <Link href="/products">
                  <a onClick={uncheck} role="link" className="focus">
                    Products
                  </a>
                </Link>
              </li>
              <li className="navigation__item">
                <Link href="/feedback">
                  <a
                    title="Give Us Feedback"
                    onClick={uncheck}
                    className="tooltip focus"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-bullhorn" />
                  </a>
                </Link>
              </li>
              <li className="navigation__item">
                <Link href="#">
                  <a
                    title="Toggle Cart"
                    onClick={toggleCart}
                    className="tooltip focus"
                  >
                    <div className="flex">
                      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                      <CartCount
                        count={user.cart.reduce(
                          (tally, cartItem) =>
                            tally + (cartItem.product ? cartItem.quantity : 0),
                          0
                        )}
                      />
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation__item">
                <SignOut></SignOut>
              </li>
            </>
          )}
          {/* Show this if not logged in */}
          {!user && (
            <>
              <li className="navigation__item">
                <Link href="/signin">
                  <a onClick={uncheck} className="focus">
                    Sign In / Register
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </NavStyles>
  );
}
