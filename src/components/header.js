import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div>
      <div>
      <Link to="/">
      <StaticImage src="../images/tplr_e22.png"
      alt="The Pit Lane Report"
      height={80}
      width={239}/>
      </Link>
      </div>
      <ul>
                <li>Team</li>
                <li>Car</li>
                <li>Championship</li>
                <li>Fans</li>
                <li>Merchandise</li>
      </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
