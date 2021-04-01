import React, { Component } from "react";
import queryString from 'query-string'
import axios from 'axios';
import NewsElement from '../newsComponents/NewsElement'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Loader from '../Loader'
import MetaTags from 'react-meta-tags';

class Contributorprofile extends Component {
      constructor() {
            super();
            this.state = {
                  data: [],
                  stats: [],
                  loaded: false
            }
      }
      render() {
            const loadornot = !this.state.loaded ? <Loader /> : null
            const articles = this.state.stats.map((element) => {
                  return (
                        <NewsElement key={element._id} imgLink={element.highlightPhoto} toLink={"../../news/newsarticle?id=" + element._id + "&heading=" + element.newsHeading.split(' ').join('-')} heading={element.newsHeading} date={element.date} article={element.para} />
                  )
            })

            const webpage = this.state.data.website ? <a href={this.state.data.website} target="_blank" rel="noopener noreferrer"><i className="fas fa-globe-asia mx-10" style={{ fontSize: '3rem', color: "#2980B9" }}></i></a> : null

            const githubLink = this.state.data.github ? <a href={this.state.data.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github mx-10" style={{ fontSize: '3rem', color: "#6e5494" }}></i></a> : null

            const linkedinLink = this.state.data.linkedin ? <a href={this.state.data.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin mx-10" style={{ fontSize: '3rem', color: '#0e76a8' }}></i></a> : null

            const email = this.state.data.email ? <a href={`mailto:${this.state.data.email}`} target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope mx-10" style={{ fontSize: '3rem', color: '#0e76a8' }}></i></a> : null

            const blogger = this.state.data.blogger ? <a href={this.state.data.blogger} target="_blank" rel="noopener noreferrer" > <i className="fab fa-blogger-b mx-10" style={{ fontSize: '3rem', color: '#fc4f08' }}></i></a> : null

            const medium = this.state.data.medium ? <a href={this.state.data.medium} target="_blank" rel="noopener noreferrer" > <i className="fab fa-medium-m mx-10" style={{ fontSize: '3rem', color: '#0e0e0e' }}></i></a > : null

            const twitter = this.state.data.twitter ? <a href={this.state.data.twitter} target="_blank" rel="noopener noreferrer" > <i className="fab fa-twitter mx-10" style={{ fontSize: '3rem', color: '#00acee' }}></i></a > : null

            const facebook = this.state.data.facebook ? <a href={this.state.data.facebook} target="_blank" rel="noopener noreferrer" > <i className="fab fa-facebook-f mx-10" style={{ fontSize: '3rem', color: '#3b5998' }}></i></a > : null

            const instagram = this.state.data.instagram ? <a href={this.state.data.instagram} target="_blank" rel="noopener noreferrer" > <i className="fab fa-instagram mx-10" style={{ fontSize: '3rem', color: '#E1306C' }}></i></a > : null

            const youtube = this.state.data.youtube ? <a href={this.state.data.youtube} target="_blank" rel="noopener noreferrer" > <i className="fab fa-youtube mx-10" style={{ fontSize: '3rem', color: '#FF0000' }}></i></a > : null

            const ogTitle = this.state.data.name + " | CyberManipal"
            return (
                  <div className="row-fluid">
                        {loadornot}
                        <Navbar />
                        <MetaTags>
                              <title>{ogTitle}</title>
                              <meta name="description" content="Meet the writers at CyberManipal, your destination for cyber security news. The official cybersecurity news page run by students of Manipal Institute of Technolgy and supervised by Manipal Inforamtion Security Team." />
                              <meta property="og:title" content={ogTitle} />
                              <meta property="og:image" content={this.state.data.avatar} />
                              <meta name="robots" content="index, follow" />
                        </MetaTags>
                  <div className="container" style={{ minHeight: "100vh", paddingTop: "80px" }}>
                        <div className="d-flex flex-column flex-md-row mt-20 pt-20">
                              <img className="img rounded-circle w-250 h-250 w-md-150 h-md-150 mx-auto mx-md-10" src={this.state.data.avatar} alt={this.state.data.name} />
                              <div className="d-flex flex-column justify-content-center ml-md-10">
                                    <h1 className="font-weight-bold text-center text-md-left my-0 py-0">{this.state.data.name}</h1>
                                    <h5 className="text-center text-md-left my-0 py-0">{this.state.data.position}</h5>
                                    <div className="row mx-auto mx-md-0">
                                          <i className="fas fa-newspaper text-dark" style={{ fontSize: "2.5rem" }}></i>
                                          <div className="d-flex flex-column">
                                                <h5 className="my-0 mx-10 p-0">{this.state.stats.length} articles</h5>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="row my-10">
                              <div className="text-left mx-10">
                                    <p style={{ fontSize: "1.5rem" }}>{this.state.data.about}</p>
                              </div>
                              <div className="container text-center text-md-left">
                                    <h4 className="ml-md-10 font-weight-bold mb-0 pb-10">Connect</h4>
                                    <div className="d-flex flex-row justify-content-center justify-content-md-start">
                                          {webpage}
                                          {githubLink}
                                          {linkedinLink}
                                          {email}
                                          {blogger}
                                          {medium}
                                          {facebook}
                                          {instagram}
                                          {twitter}
                                          {youtube}
                                    </div>
                              </div>
                        </div>
                        <div className="container my-20 py-20">
                              <h3 className="pb-0 mb-0 ml-10 ml-md-auto">Articles by {this.state.data.name}</h3>
                              <div className="row">
                                    {articles}
                              </div>
                        </div>
                  </div>
                  <Footer />
                  </div>
            )
      }
            componentDidMount() {
            const parsed = queryString.parse(window.location.search)
            axios.get(`https://api.wearemist.in/profile?author=${parsed.author}`)
                  .then(response => {
                        this.setState({ data: response.data })
                  })
                  .catch((err) => {
                        console.log(err)
                  })

            axios.get(`https://api.wearemist.in/profile/stats?author=${parsed.author}`)
                  .then(response => {
                        this.setState({ stats: response.data, loaded: true })
                  })
                  .catch((err) => {
                        console.log(err)
                  })
      }
}

export default Contributorprofile