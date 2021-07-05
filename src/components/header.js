import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav className="ds-global-nav">
      <div className="ds-global-nav__wrapper">
      <div className="ds-global-home-link">
      <Link to="/"> <StaticImage src="../images/tplr_e22.png" alt="The Pit Lane Report" height={"80"} width={"239"}/></Link>
      </div>
      <ul className="ds-global-nav__child ds-global-nav__child--selected">
      <li class="ds-global-nav__child ds-global-nav__child--selected"><a href="">Study with us</a></li>
                <li class="ds-global-nav__child"><a href="">Team</a></li>
                <li class="ds-global-nav__child"><a href="">Car</a></li>
                <li class="ds-global-nav__child"><a href="">Championship</a></li>
                <li class="ds-global-nav__child"><a href="">Fans</a></li>
                <li class="ds-global-nav__child"><a href="">Merchandise</a></li>
      </ul>
    style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      </div></nav>
    
            
      
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
