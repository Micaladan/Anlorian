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
      </div>
    </header>
  );
}
