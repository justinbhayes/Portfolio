function Footer() {
  const now = new Date();
  const dateText = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const timeText = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <footer id="footer">
      <p>
        Copyright &copy; {now.getFullYear()} Justin Hayes &bull; Valid{" "}
        <a href="https://validator.w3.org/" target="_blank" rel="noreferrer">
          XHTML
        </a>{" "}
        |{" "}
        <a
          href="https://jigsaw.w3.org/css-validator/"
          target="_blank"
          rel="noreferrer"
        >
          CSS
        </a>
      </p>
      <p>
        Last updated on {dateText} {timeText}
      </p>
    </footer>
  );
}

export default Footer;
