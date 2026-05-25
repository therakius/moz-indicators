export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2026{" "}
        <a
          href="https://github.com/therakius"
          target="_blank"
          rel="noreferrer"
        >
          therakius
        </a>{" "}
        All rights reserved.
      </p>

      <p className="subtext">
        Platform powered by{" "}
        <a
          href="https://moz-demog-api.vercel.app/v1/docs"
          target="_blank"
          rel="noreferrer"
        >
          moz-demog-api
        </a>
      </p>
    </footer>
  )
}