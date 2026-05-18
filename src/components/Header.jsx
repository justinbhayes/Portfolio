import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "../data/siteContent";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/bio", label: "Bio" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const getSocialIcon = (platform) => {
    if (platform === "linkedin") {
      return <FaLinkedinIn aria-hidden="true" />;
    }

    if (platform === "twitter") {
      return <FaXTwitter aria-hidden="true" />;
    }

    if (platform === "github") {
      return <FaGithub aria-hidden="true" />;
    }

    return null;
  };

  return (
    <header className="header">
      <div id="title">
        <h1>Justin B. Hayes</h1>
        <h3>Web Manager / Team Lead / Developer</h3>
      </div>

      <nav id="mainNav" aria-label="Primary navigation">
        <ul id="nav">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <nav id="followMeSection" aria-label="Follow Justin on social media">
        <p id="followMe">Follow Me:</p>
        <ul id="socialLinks">
          {socialLinks.map((link) => (
            <li key={link.alt}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.alt}
                title={link.alt}
              >
                {getSocialIcon(link.platform)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
