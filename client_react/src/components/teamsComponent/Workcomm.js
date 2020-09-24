import React, { Component } from 'react'
import axios from 'axios';
import Workcard from './cards/Workcard'
import TeamLoader from './TeamLoader'

class Workcomm extends Component {
      constructor() {
            super();
            this.state = {
                  data: [],
                  loaded: false
            };
      }

      render() {
            const workingcommCards = this.state.data.map(item => {
                  return (
                        <Workcard key={item._id} image={item.photo} name={item.name} webpage={item.webpage} github={item.github} linkedin={item.linkedin} position={item.position} />
                  )
            })
            const loadOrNot = !this.state.loaded ? <TeamLoader /> : null
            return (
                  <div className="container pt-20">
                        {loadOrNot}
                        <h1 className="text-center font-weight-bold mb-0 pb-0">Working Committee</h1>
                        <p className="text-center mt-0 pt-0" style={{ fontSize: "2.4rem" }}>We are the club. We are here to learn and gain as much knowledge as possible.</p>
                        <div className="row">
                              {workingcommCards}
                        </div>
                  </div>
            )
      }
            componentDidMount() {
            // getting the response from the backend
            axios.get('https://api.wearemist.in/teaminfo/workcomm')
                  .then(response => {
                        this.setState({ data: response.data, loaded: true })
                  })
                  .catch((err) => {
                        console.log(err)
                  })
      }
}

export default Workcomm