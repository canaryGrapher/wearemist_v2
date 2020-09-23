import React, { Component } from 'react';
import axios from 'axios';
import AnnounceModal from './announcementComponent/AnnouncementModal'
import AnnouncementCard from './announcementComponent/AnnouncementCard'
import Navbar from './Navbar'
import Footer from './Footer'
import Loader from './Loader'
import MicImage from '../images/assets/mic.jpeg'

class Announcements extends Component {
      constructor() {
            super();
            this.state = {
                  data: [],
                  loaded: false
            }
            
      }

      render() {
            let clubNews = this.state.data.map((item, index) => {
                        return (
                              <AnnounceModal key={index} id={index} heading={item.heading} img={item.image} content={item.content} venue={item.venue} timing={item.timing} link={item.link} />
                        )
                  })
            let announcementCards = this.state.data.map((item, index) => {
                  return (
                        <AnnouncementCard key={index} id={index} heading={item.heading} content={item.content} />
                  )
            })
            return (
                  <div className="container-fluid">
                        {!this.state.loaded ? <Loader /> : null}
                        <Navbar />
                        {clubNews}
                        <div className="container-fluid h-450 bg-very-dark" style={{ backgroundImage: `url("${MicImage}")`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center" }}>
                        </div>
                        <div className="container pt-20 mt-20 mb-20 pb-20" style={{minHeight:"70vh"}}>
                              <div className="row-fluid">
                                    <h1 className="text-center">Club Announcements</h1>
                              </div>
                              <div className="row">
                                    {announcementCards}
                              </div>

                        </div>     
                        <Footer />
                  </div>
            )
      }
            componentDidMount() {
            // getting the response from the backend
            axios.get('https://api.wearemist.in/clubnews')
                  .then(response => {
                        this.setState({ data: response.data, loaded: true })
                  })
                  .catch((err) => {
                        console.log(err)
                  })
      }
}

export default Announcements