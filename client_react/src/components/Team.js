import React, { Component } from 'react';
import imageTeam from '../images/assets/teams.jpg';
import Board from './teamsComponent/Board'
import Mancomm from './teamsComponent/Mancomm'
import Workcomm from './teamsComponent/Workcomm'
import Navbar from './Navbar'
import Footer from './Footer'


class Team extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    }
  }
  render() {
    return (
      <div className="m-0 p-0 container-fluid">

        <Navbar />
        <div className="m-0 container-fluid w-full h-400 bg-very-dark" style={{ backgroundImage: `url('${imageTeam}')`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center" }}>
        </div>
        <div className="navbar-nav m-0 justify-content-around bg-very-dark text-light animate__animated animate__backInUp">
          <p>Meet the team</p>
        </div>
        <Board />
        <Mancomm />
        <Workcomm />
        <Footer />
      </div>
    )
  }
}

export default Team