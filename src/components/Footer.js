import React from 'react'
import PropTypes from 'prop-types'
import Social from './Social'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <Social />
    <p className="copyright">&copy; Garsva.com</p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
