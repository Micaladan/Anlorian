import Header from '../components/Header';
import CaptureEmail from '../components/CaptureEmail';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Anlorian</span>
          <span className="heading-primary--sub">Hardcore Tabletop RPG</span>
          <CaptureEmail />
        </h1>
      </div>
    </div>
  );
}
