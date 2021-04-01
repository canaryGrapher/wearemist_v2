import React, { Component } from 'react';
import "../styles/landing.css";
import axios from 'axios';
import Navbar from './Navbar'
import Footer from './Footer'
import Cryptography from '../images/assets/cryptography.jpg'
import Ctfs from '../images/assets/ctfs.jpg'
import CyberAwareness from '../images/assets/cyberawareness.jpg'
import Networking from '../images/assets/networking.jpg'
import Research from '../images/assets/research.jpg'
import Webdev from '../images/assets/webdev.jpg'
import Loader from './Loader'
import VideoLocation from '../images/videos/landing.mp4'
import MetaTags from 'react-meta-tags'
import Logo from '../images/logo/logoDark.png'

class Landing extends Component {
      constructor() {
            super();
            this.state ={
                  email: "",
                  name: "",
                  message: "",
                  res: "",
                  color: "",
                  loaded: false
            }
            this.hideLoader = this.hideLoader.bind(this)
            this.handleChangeEmail = this.handleChangeEmail.bind(this);
            this.handleChangeName = this.handleChangeName.bind(this);
            this.handleChangeMessage = this.handleChangeMessage.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
      }
      hideLoader() {
            this.setState({loaded: true})
      }
      handleChangeEmail(event) {
            this.setState({email: event.target.value})
      }
      handleChangeName(event) {
            this.setState({name: event.target.value})
      }
      handleChangeMessage(event) {
            this.setState({message: event.target.value})
      }
      handleSubmit(event) {
            event.preventDefault();
            axios.post('https://api.wearemist.in/contactMailer', {
                  name: this.state.name,
                  message: this.state.message,
                  email: this.state.email
            }).then((res) => {
                  console.log(res.data.msg)
                  if(res.data.msg === "not_allowed") {
                        this.setState({res: "You have already sent a message in the last 6 hours. Please try again later", color: "text-danger"})
                  }
                  else if(res.data.msg === "success") {
                        this.setState({res: "Your message was successfully sent", color: "text-success"})
                  }
                  else {
                        this.setState({res: "There was an error. Please try again later", color: "text-danger"})
                  }
                  console.log("Submitted form")
            })
      }
      componentWillUnmount() {
            this.setState({loaded: true})
      }

      render() {
            const loadingOrNot = !this.state.loaded ? <Loader /> : null;
            return (
                  <div className="container-fluid">
                        {loadingOrNot}
                        <Navbar />
                        <MetaTags>
                              <title>Home | Manipal Information Security Team</title>
                              <meta name="description" content="We are a team of Information and Network Security enthusiasts who aim to spread the knowledge to other students with an interest in this ever-growing field of Computer Science" />
                              <meta property="og:title" content="Home | Manipal Information Security Team" />
                              <meta property="og:image" content={Logo} />
                              <meta name="robots" content="index, follow" />
                        </MetaTags>
                        <video autoPlay loop muted playsinline="true" disablePictureInPicture="true" style={{ position: "fixed", right: "0", bottom: "0", minWidth: "100%", minHeight: "100%", zIndex: "-10", pointerEvents: "none" }} src={VideoLocation} type="video/mp4" onPlay={this.hideLoader} />

                        <div className="container-fluid text-center">
                              <div className="container-fluid container-first d-flex flex-column justify-content-center bg-black-gradient">
                                    <p className="text-white mb-0 pb-0" style={{fontSize: "2.5rem"}}>We are</p>
                                    <h1 className="header-text text-white d-none d-md-inline mt-0 pt-0 animate__animated animate__backInUp">MANIPAL INFORMATION<br />SECURITY TEAM</h1>
                                    <h1 className="header-mobile text-white d-inline d-md-none mt-0 pt-0 animate__animated animate__backInUp">MANIPAL INFORMATION<br />SECURITY TEAM</h1>
                                    <p className="header-sub-text text-light p-0 mt-0 animate__animated animate__fadeIn">The cybersecurity team of Manipal Institute of Technology</p>
                              </div>
                              <div className="container-fluid bg pt-20 text-left bg-transparent-black">
                                    <div className="container">
                                          <div className="row d-flex flex-column flex-md-row">
                                                <div className="col-12 col-md-7 text-light my-auto">
                                                      <h1 className="font-weight-bold text-light pt-20 p-10 p-md-0" id="about">Who are we?</h1>
                                                      <p className="px-10 px-md-0" style={{ fontSize: "1.8rem" }}>We are a team of Information and Network Security enthusiasts who aim to spread the knowledge to other students with an interest in this ever-growing field of Computer Science. Our goal is to ensure that students approach this field the right way by providing them with a platform to enhance and practice their skills. Lastly, we'd like to say, we are not hackers. So if you are here with the intention of hacking into your friend's Facebook account, we are afraid we can't assist you.</p>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                      <div className="card p-0 row-fluid d-flex flex-column text-center text-md-left">
                                                            <img className="img-fluid mx-auto rounded" src="https://images.macrumors.com/t/ZQitIvjHmv5BbwBFeqtKKN9UHzE=/1600x0/article-new/2019/02/timcooktulane.jpg" alt="Tim Cook" />
                                                            <div className="my-auto mx-20">
                                                                  <p className="text-justify text-white">If you put a key under the mat for the cops, a burglar can find it, too. Criminals are using every technology tool at their disposal to hack into people’s accounts. If they know there’s a key hidden somewhere, they won’t stop until they find it.</p>
                                                                  <p className="text-muted text-secondary text-right">- Timothy Donald Cook</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="container">
                                          <h2 className="text-center text-white mb-0 pb-0">Domains</h2>
                                          <p className="text-center text-white pt-0 mt-0">These are the fields we are commited to.</p>
                                          <div className="row domain-holder col-12">
                                                <div className="domain-card col-12 col-md-6 col-lg-4">
                                                      <div className="card p-0 border-0">
                                                            <img src={Cryptography} className="img-fluid rounded" alt="cryptography" />

                                                            <div className="content">
                                                                  <h2 className="content-title text-white">
                                                                        Cryptography
                                                            </h2>
                                                                  <p className="text-white">
                                                                        Cryptography or cryptology is the practice and study of techniques for secure communication in the presence of third parties called adversaries. More generally, cryptography is about constructing and analyzing protocols that prevent third parties or the public from reading private messages.
                                                            </p>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="domain-card col-12 col-md-6 col-lg-4">
                                                      <div className="card p-0 border-0">
                                                            <img src={Webdev} className="img-fluid rounded" alt="web development" />

                                                            <div className="content">
                                                                  <h2 className="content-title text-white">
                                                                        Web Development
                                                            </h2>
                                                                  <p className="text-white">
                                                                        Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.
                                                            </p>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="domain-card col-12 col-md-6 col-lg-4">
                                                      <div className="card p-0 border-0">
                                                            <img src={Research} className="img-fluid rounded" alt="research" />

                                                            <div className="content">
                                                                  <h2 className="content-title text-white">
                                                                        Research
                                                            </h2>
                                                                  <p className="text-white">
                                                                        Research and innovation can generate advances that help cybersecurity keep up with the evolving cyber risks. This helps create a trusted and resilient digital environment. We aim to support progress in cybersecurity research by operating as an ambitious, challenge-led research team.
                                                            </p>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="domain-card col-12 col-md-6 col-lg-4">
                                                      <div className="card p-0 border-0">
                                                            <img src={Ctfs} className="img-fluid rounded" alt="ctfs" />

                                                            <div className="content">
                                                                  <h2 className="content-title text-white">
                                                                        Capture the flags
                                                            </h2>
                                                                  <p className="text-white">
                                                                        A Cyber Security Capture The Flag(CTF) is a competition between security professionals and/or students learning about Cyber Security. This competition is used as a learning tool for everyone that is interested in Cyber security and it can help sharpen the tools they have learned during their training.
                                                            </p>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="domain-card col-12 col-md-6 col-lg-4">
                                                      <div className="card p-0 border-0">
                                                            <img src={CyberAwareness} className="img-fluid rounded" alt="cyber awareness" />

                                                            <div className="content">
                                                                  <h2 className="content-title text-white">
                                                                        Cyber Awareness
                                                            </h2>
                                                                  <p className="text-white">
                                                                        Cyber Security awareness is knowledge combined with attitudes and behaviors that serve to protect our information assets. Being cybersecurity aware means you understand what the threats are and you take the right steps to prevent them.
                                                            </p>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="domain-card col-12 col-md-6 col-lg-4">
                                                      <div className="card p-0 border-0">
                                                            <img src={Networking} className="img-fluid rounded" alt="networking" />

                                                            <div className="content">
                                                                  <h2 className="content-title text-white">
                                                                        Networking
                                                            </h2>
                                                                  <p className="text-white">
                                                                        Computer networking refers to connected computing devices (such as laptops, desktops, servers, smartphones, and tablets) and an ever-expanding array of IoT devices (such as cameras, door locks and various sensors) that communicate with one another. Networking is the backbone of the internet itself and often a foundation to Cyber Security.
                                                            </p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="container-fluid bg-transparent-black pb-20 text-white">
                                    <div className="container">
                                          <div className="row">
                                                <div className="col-12 col-md-5">
                                                      <div className="card p-0 row-fluid d-flex flex-column text-center text-md-left">
                                                            <img className="img-fluid mx-auto rounded" src="https://media.unleashgroup.io/admin/5b8eb124449a5a2b284e0c98/ae6ff7d0-f7cd-11e8-9135-95457a7f4169.jpeg" alt="Edward Snowden" />
                                                            <div className="my-auto mx-20">
                                                                  <p className="text-justify text-white">Arguing that you don’t care about the right to privacy because you have nothing to hide is no different than saying you don’t care about free speech because you have nothing to say.</p>
                                                                  <p className="text-secondary text-right">- Edward Joseph Snowden</p>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="col-12 col-md-7 text-left my-auto">
                                                      <h2 className="text-center font-weight-bold text-white">Let's connect</h2>
                                                      <p className="text-center">If you'd like to discuss, collaborate or drop some suggestions, write to us down below or drop an email at <a href="sudo@wearemist.in">sudo@wearemist.in</a></p>
                                                      <form onSubmit={this.handleSubmit} className="px-15">
                                                            <div className="form-group">
                                                                  <label htmlFor="name" className="required">Your Name</label>
                                                                  <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name here" required="required" onChange={this.handleChangeName} />
                                                                  <div className="form-text text-white">
                                                                        Although we do love screen names, we would like to know who's texting us
                                                      </div>
                                                            </div>
                                                            <div className="form-group">
                                                                  <label htmlFor="email" className="required">Email</label>
                                                                  <input type="Email" className="form-control" id="email" name="email" placeholder="Enter your email here" required="required" onChange={this.handleChangeEmail} />
                                                                  <div className="form-text text-white">
                                                                        We would like you to give us an email with which we can get back to you
                                                      </div>
                                                            </div>
                                                            <div className="form-group">
                                                                  <label htmlFor="confirm-password" className="required">Message</label>
                                                                  <textarea className="form-control" placeholder="What is your message for us?" id="message" name="message" required onChange={this.handleChangeMessage}></textarea>
                                                                  <div className="form-text text-white">
                                                                        What is it you want to share with us?
                                                            </div>
                                                            </div>
                                                            <input className="btn btn-secondary font-weight-bold btn-block" type="submit" value="Submit" />
                                                            <div className="row-fluid pt-5 text-center font-weight-bold">
                                                                  <p className={this.state.color}>{this.state.res}</p>
                                                            </div>
                                                      </form>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  <Footer />
                  </div>
            )
      }
}

export default Landing
