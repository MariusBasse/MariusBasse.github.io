import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
      position: `sticky`,
      top: `0`,
    }}
  >
    <meta
      name="google-site-verification"
      content="Ea1EL3e2YCBnvAuOobK_9p19bX5G2zzxxa5uCFWi-x0"
    />

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1300,
        padding: `1.45rem 0`,
        maxHeight: `70px`,
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: `20px`, alignItems: `left` }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Home
          </Link>
        </h1>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
