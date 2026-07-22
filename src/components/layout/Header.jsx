import Button from "../ui/Button";

import iconSun from "../../assets/images/icon-sun.svg";
import iconMoon from "../../assets/images/icon-moon.svg";
import Logo from "../../assets/icons/Logo";

function Header({ isDarkMode, onToggleTheme, className = "" }) {
  return (
    <header className={className}>
      <Logo />

      <Button
        className="theme-btn"
        aria-label={
          isDarkMode ? "Switch to light theme" : "Switch to dark theme"
        }
        onClick={onToggleTheme}
      >
        <img src={isDarkMode ? iconSun : iconMoon} alt="" />
      </Button>
    </header>
  );
}

export default Header;
