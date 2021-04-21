import Header from '../components/Header';

export default function Home() {
  return (
    <div className="home-container">
      <Header />

      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source
            src="https://storage.coverr.co/videos/Z9kMkdAolRV3t00RD02wl7RCovq01O4fUP02?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjE5MDQ1NzY0fQ.BVCsuyo1C7_6Bmmb3EEowu0UyVPgrDEbmTsQeNcBYMY"
            type="video/mp4"
          />
          Unable to show video.
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
