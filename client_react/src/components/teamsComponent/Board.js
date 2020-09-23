import React, { Component } from 'react'
import BoardCard from './cards/BoardCard'
import axios from 'axios';
import TeamLoader from './TeamLoader'

class Board extends Component {
      constructor() {
            super();
            this.state = {
                  data: [],
                  loaded: false 
            };
      }
      render() {
            const boardCards = this.state.data.map(item => {
                  return (
                        <BoardCard key={item._id} image={item.photo} name={item.name} webpage={item.webpage} github={item.github} linkedin={item.linkedin} position={item.position} />
                  )
            })
            const loadOrNot = !this.state.loaded ? <TeamLoader /> : null
            return (
                  <div className="container pt-20">
                        {loadOrNot}
                        <h1 className="text-center font-weight-bold mb-0 pb-0">Board</h1>
                        <p className="text-center mt-0 pt-0" style={{ fontSize: "2.4rem" }}>We represent, look over and manage the entire club</p>
                        <div className="row">
                              {boardCards}
                        </div>
                  </div>
            )
      }
            componentDidMount() {
            // getting the response from the backend
            axios.get('https://api.wearemist.in/teaminfo/board')
                  .then(response => {
                        this.setState({ data: response.data, loaded: true })
                  })
                  .catch((err) => {
                        console.log(err)
                  })
      }
}

export default Board