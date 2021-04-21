import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />

      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="bonfire-sparks.mp4" type="video/mp4" />
          <source
            src="https://anlorian-zeta.vercel.app/bonefire-sparks.mp4"
            type="video/webm"
          />
          Your browser is not supported!
        </video>
      </div>

      <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Get latest news!</h2>
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
      </section>
    </div>
  );
}
