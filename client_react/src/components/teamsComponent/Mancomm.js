import React, { Component } from 'react'
import Mancard from './cards/Mancard'
import axios from 'axios';
import TeamLoader from './TeamLoader'

class Mancomm extends Component {
      constructor() {
            super();
            this.state = {
                  data: [],
                  loaded: false
            };
      }

      render() {
            const managementCards = this.state.data.map(item => {
                  return (
                        <Mancard key={item._id} image={item.photo} name={item.name} webpage={item.webpage} github={item.github} linkedin={item.linkedin} />
                  )
            })
            const loadOrNot = !this.state.loaded ? <TeamLoader /> : null
            return (
                  <div className="container pt-20">
                        {loadOrNot}
                        <h1 className="text-center font-weight-bold mb-0 pb-0">Management Committee</h1>
                        <p className="text-center mt-0 pt-0" style={{ fontSize: "2.4rem" }}>We are here to manage the Working Committee and organize events.</p>
                        <div className="row">
                              {managementCards}
                        </div>
                  </div>
            )
      }
            componentDidMount() {
            // getting the response from the backend
            axios.get('https://api.wearemist.in/teaminfo/mancomm')
                  .then(response => {
                        this.setState({ data: response.data, loaded: true })
                  })
                  .catch((err) => {
                        console.log(err)
                  })
      }
}

export default Mancomm