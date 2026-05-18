import { lastCommitTime } from "../data/buildInfo";

function Footer() {
  const currentYear = new Date().getFullYear();
  const dateText = lastCommitTime.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const timeText = lastCommitTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <footer id="footer">
      <p>Copyright &copy; {currentYear} Justin Hayes</p>
      <p>
        Last updated on {dateText} {timeText}
      </p>
    </footer>
  );
}

export default Footer;
