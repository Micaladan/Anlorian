export default function Header() {
  return (
    <header className="header">
      <div className="logo-box">
        <img
          className="logo"
          src="../public/AnlorianLogo.png"
          alt="Anlorian Logo"
        />
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Anlorian</span>
          <span className="heading-primary-sub">Hardcore Tabletop RPG</span>
        </h1>
      </div>
    </header>
  );
}
