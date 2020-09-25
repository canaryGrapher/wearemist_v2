import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string'
import axios from 'axios';
import {
      EmailShareButton,
      FacebookShareButton,
      LinkedinShareButton,
      TelegramShareButton,
      TwitterShareButton,
      WhatsappShareButton
} from "react-share";
import {
      EmailIcon,
      FacebookIcon,
      LinkedinIcon,
      TelegramIcon,
      TwitterIcon,
      WhatsappIcon
} from "react-share";
import Navbar from '../Navbar'
import Footer from '../Footer'
import Loader from '../Loader'
import MetaTags from 'react-meta-tags';

class Newsarticle extends Component {
      constructor() {
            super();
            this.state = {
                  data: [],
                  linkend: "",
                  profileImage: "",
                  loaded: false
            }
      }
      async componentDidMount() {
            // getting the response from the backend
            const parsed = await queryString.parse(window.location.search)
            await axios.get(`https://api.wearemist.in/news/getparticularNews?id=${parsed.id}`)
                  .then(response => {
                        this.setState({loaded: true})
                        this.setState({ data: response.data  })
                        this.setState({ linkend: this.state.data.filterTags.split(' ').join('').toLowerCase() })
                  })
                  .catch((err) => {
                        console.log(err)
                  })
            await axios.get(`https://api.wearemist.in/profile/profilepic?author=${this.state.data.author}`)
                  .then(response => {
                        this.setState({profileImage: response.data})
                  })
                  .catch((err) => {
                        console.log(err)
                  })
      }
      render() {
            const loadornot = !this.state.loaded ? <Loader /> : null
            const ogTitle = this.state.data.newsHeading + " | CyberManipal"
            const description = this.state.data.para ? this.state.data.para.split('.')[0] + this.state.data.para.split('.')[1] : null
            return (
                  <div className="container-fluid">
                        <Navbar />
                        {loadornot}
                        <MetaTags>
                              <title>{ogTitle}</title>
                              <meta name="description" content={description} />
                              <meta property="og:title" content={ogTitle} />
                              <meta property="og:image" content={this.state.data.highlightPhoto} />
                              <meta name="robots" content="index, follow" />
                        </MetaTags>
                        <div className="container w-full w-md-three-quarter w-lg-half" style={{paddingTop: "15vh"}}>
                              <div className="row-fluid px-5 px-md-0">
                                    <h1 className="font-weight-bold text-left d-none d-md-inline">{this.state.data.newsHeading}</h1>
                                    <p className="font-weight-bold text-left d-md-none m-0 pb-5" style={{fontSize: "2.5rem"}}>{this.state.data.newsHeading}</p>
                              </div>
                              <img className="img-fluid w-full py-15" src={this.state.data.highlightPhoto} alt={this.state.data.newsHeading} />
                              
                              <Link to={`../../news/${this.state.linkend}`} style={{ textDecoration: "none" }}><p><span className="p-10 bg-dark text-light" style={{ fontSize: "1.7rem" }}>{this.state.data.filterTags}</span></p></Link>
                              
                              <div className="content" style={{ fontSize: "20px" }}>
                                    <div className="container">
                                          <div className="row mt-20">
                                                <img className="img rounded-circle" style={{ height: "40px", width: "40px" }} src={this.state.profileImage.avatar} alt={this.state.data.author} />
                                                <Link to={`../../profile?author=${this.state.data.author}`} style={{ textDecoration: "none" }}><p className="my-10 ml-10 font-size-40" style={{ fontSize: "18px" }}><span className="font-weight-bold text-dark">{this.state.data.author}</span></p></Link>
                                          </div>
                                    </div>
                                    <h3 className="mb-0 pb-0 text-muted">{this.state.data.date}</h3>
                                    <p className="mt-0 pt-0">{this.state.data.para}</p>
                                    <p className="mt-20" style={{ fontSize: "1.5rem" }}>Abridged from <a className="bg-dark text-light p-5" href={this.state.data.about} target="_blank" rel="noopener noreferrer">{this.state.data.credit}</a></p>
                              </div>
                              <h4 className="text-center mt-20 pt-20">Share this article</h4>
                              <div className="row justify-content-center mb-20 pb-20">
                                    <FacebookShareButton
                                          url={window.location.href}
                                          quote={this.state.data.newsHeading}
                                          hashtag='#wearemist'>
                                          <FacebookIcon className="rounded-circle mx-5" size={40} />
                                    </FacebookShareButton>

                                    <EmailShareButton
                                          url={window.location.href}
                                          subject="Check out this amazing article I found on CyberManipal">
                                          <EmailIcon className="rounded-circle mx-5" size={40} />
                                    </EmailShareButton>

                                    <LinkedinShareButton
                                          url={window.location.href}
                                          title={this.state.data.newsHeading}
                                          source="https://wearemist.in/"
                                          summary={this.state.data.para} >
                                          <LinkedinIcon className="rounded-circle mx-5" size={40} />
                                    </LinkedinShareButton>

                                    <TelegramShareButton
                                          url={window.location.href}
                                          quote={this.state.data.newsHeading}
                                          hashtag='#wearemist'>
                                          <TelegramIcon className="rounded-circle mx-5" size={40} />
                                    </TelegramShareButton>

                                    <TwitterShareButton
                                          url={window.location.href}
                                          title={this.state.data.newsHeading}
                                          hashtags='[#wearemist, #sudomist]'>
                                          <TwitterIcon className="rounded-circle mx-5" size={40} />
                                    </TwitterShareButton>

                                    <WhatsappShareButton
                                          url={window.location.href}
                                          title={this.state.data.newsHeading} >
                                          <WhatsappIcon className="rounded-circle mx-5" size={40} />
                                    </WhatsappShareButton>
                              </div>
                        </div>
                        <Footer />
                  </div>
            )
      }
}

export default Newsarticle