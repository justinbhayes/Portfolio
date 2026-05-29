import { NavLink } from "react-router-dom";
import { socialLinks } from "../data/siteContent";

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 448 512" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8A53.79 53.79 0 0 1 53.79 0c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49C4 14.09 3.48 13.23 3.32 12.77c-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.52 7.52 0 0 1 8 3.87c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M389.2 48h70.6L305.6 224.2 487 464H345.2L234.1 318.6 106.5 464H35.8l164.9-187.9L26.8 48h145.5L272.7 180.9 389.2 48zM364.4 421.8h39.1L151.1 87.9h-42z"
      />
    </svg>
  );
}

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/portfolio/", label: "Portfolio" },
  { to: "/bio/", label: "Bio" },
  { to: "/contact/", label: "Contact" },
];

function Header() {
  const getSocialIcon = (platform) => {
    if (platform === "linkedin") {
      return <LinkedinIcon />;
    }

    if (platform === "x") {
      return <XIcon />;
    }

    if (platform === "github") {
      return <GithubIcon />;
    }

    return null;
  };

  return (
    <header className="header">
      <div id="title">
        <h1>Justin B. Hayes</h1>
        <h2>Web Manager / Team Lead / Developer</h2>
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
