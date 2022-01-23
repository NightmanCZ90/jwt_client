import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';

const Header = ({ auth }) => {
  const renderLinks = () => {
    if (auth) return (
      <>
        <Link to="/feature">Feature</Link>
        <Link to="/signout">Sign Out</Link>
      </>
    )
    if (!auth) return (
      <>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </>
    )
  }

  return (
    <div className="header">
      <Link to="/">Redux Auth</Link>
      {renderLinks()}
    </div>
  )
}

function mapState(state) {
  return {
    auth: state.auth.authenticated,
  }
}

export default connect(mapState)(Header);