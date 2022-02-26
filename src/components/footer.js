/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        <Link to="/">&copy; 2022 Colton Mathis</Link>
      </p>
    </div>
  </footer>
)

export default Footer
