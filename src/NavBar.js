import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {

  render() {
    const username = this.props.username
    return (
<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
<Link className="navbar-brand" to="/">PayTron</Link>

<div className="collapse navbar-collapse" id="navbarsExampleDefault">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <Link className="nav-link" to={`/user/${username}`}>Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/animals">Labels</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/territories">Your Content</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/others">Other Users</Link>
    </li>
  </ul>
</div>
<ul className="navbar-nav mr-auto">
  <li className="nav-item">
    <Link className="nav-link" to='/me'>{username}</Link>
  </li>
</ul>
<button
  className="btn btn-primary"
  onClick={this.props.signOut.bind(this)}
>Sign out
</button>
</nav>
)
}
}

export default NavBar
