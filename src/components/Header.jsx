import '../css/Header.css';

export default function Header({ logo, title}) {
  return (
    <header className="logo-container">
      <img src={logo} className="logo" alt="logo" />
      <span className="logo-text">{title}</span>
    </header>
  );
}