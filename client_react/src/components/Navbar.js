import React, { Component } from 'react';
import Logo from "../images/logo/logoLight.png";
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css"

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
      icon: "fas fa-bars text-white"
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ menu: !this.state.menu })
    if (this.state.menu) {
      this.setState({ icon: "fas fa-bars text-white" })

    }
    if (!this.state.menu) {
      this.setState({ icon: "fas fa-times text-danger" })
    }
  }
  render() {
    const show = (this.state.menu) ? "d-flex bg-dark py-20 animate__animated animate__fadeIn" : "d-none";
    return (
      <div className="row-fluid w-full mb-20" style={{ zIndex: "10", position: "fixed" }}>
        <nav className="navbar border-0 mt-md-20 mx-auto p-md-10 w-full w-md-three-quarter bg-dark" style={{ overflow: "hidden" }}>
          <a href="/" className="pl-md-20 navbar-brand">
            <img src={Logo} alt="Logo of Manipal Information Security Team" />
          </a>
          <ul className="navbar-nav ml-auto text-white">
            <li className="nav-item d-none d-md-inline">
              <NavLink exact to="/home" className="nav-link" style={{ textDecoration: "none", color: "white" }}>Home</NavLink>
            </li>
            <li className="nav-item d-none d-md-inline">
              <NavLink to="/team" className="nav-link" style={{ textDecoration: "none", color: "white" }}>Team</NavLink>
            </li>
            <li className="nav-item d-none d-md-inline">
              <NavLink to="/news" className="nav-link" style={{ textDecoration: "none", color: "white" }}>News</NavLink>
            </li>
            <li className="nav-item d-none d-md-inline">
              <NavLink to="/announcements" className="nav-link mr-20" style={{ textDecoration: "none", color: "white" }}>Announcements</NavLink>
            </li>
            <li className="nav-item d-flex flex-column justify-content-center mr-10 d-md-none" onClick={this.toggleMenu}>
              <i className={this.state.icon} style={{ fontSize: "3rem" }}></i>
            </li>
          </ul>
        </nav>
        <div className={show}>
          <ul className="d-flex flex-column justify-content-center py-20 my-auto w-full">
            <li className="w-full text-center responsive-links">
              <NavLink exact to="/home" className="mx-auto" style={{ textDecoration: "none", color: "white", fontSize: "3rem" }} onClick={this.toggleMenu}>Home</NavLink>
            </li>
            <li className="w-full text-center responsive-links">
              <NavLink to="/team" className="" style={{ textDecoration: "none", color: "white", fontSize: "3rem" }} onClick={this.toggleMenu}>Team</NavLink>
            </li>
            <li className="w-full text-center responsive-links">
              <NavLink to="/news" className="" style={{ textDecoration: "none", color: "white", fontSize: "3rem" }} onClick={this.toggleMenu}>News</NavLink>
            </li>
            <li className="w-full text-center responsive-links">
              <NavLink to="/announcements" className="" style={{ textDecoration: "none", color: "white", fontSize: "3rem" }} onClick={this.toggleMenu}>Announcements</NavLink>
            </li>
          </ul>
        </div>
      </div >
    )
  }
}
export default Navbar