export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img className="header__logo" src="" alt="Anlorian Logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Anlorian</span>
          <span className="heading-primary--sub">Hardcore Tabletop RPG</span>
        </h1>
        <div className="row">
          <div className="book">
            <div className="book__form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Join Our Mailing List!</h2>
              </div>
              <form action="#" className="form">
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Full Name"
                    id="name"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Full Name
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Email Address"
                    id="email"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Email Address{' '}
                  </label>
                </div>{' '}
                <div className="form__group">
                  <button type="submit" className="btn btn--green">
                    Subscribe &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
