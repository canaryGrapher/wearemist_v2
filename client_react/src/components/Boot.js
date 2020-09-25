import React, { Component } from 'react'
import '../styles/boot.css'
import MetaTags from 'react-meta-tags';
import Logo from '../images/logo/logoDark.png'

class Boot extends Component {
      constructor() {
            super();
            this.state = {
                  cli: true,
                  gui: false
            }
            this.changeToGUI = this.changeToGUI.bind(this)
            this.changeToCLI = this.changeToCLI.bind(this)
            this.keyStrokeFunction = this.keyStrokeFunction.bind(this);
            this.selectRoute = this.selectRoute.bind(this);
      }
      selectRoute() {
            if(this.state.gui) {
                  window.location.assign("/home")
            }
            if(this.state.cli) {
                  window.location.assign("https://console.wearemist.in")
            }
      }
      keyStrokeFunction(event){
            if(event.keyCode === 37 || event.keyCode === 39) {
                  this.setState({cli: !this.state.cli, gui: !this.state.gui})
            }
            if(event.keyCode === 13) {
                  if(this.state.gui) {
                        window.location.assign("/home")
                  }
                  if(this.state.cli) {
                        window.location.assign("https://console.wearemist.in")
                  }
            }
      }
      changeToCLI() {
            this.setState({cli: true, gui: false})
      }

      changeToGUI() {
            this.setState({cli: false, gui: true})
      }
      componentDidMount(){
            document.addEventListener("keydown", this.keyStrokeFunction, false);
      }
      render() {
            const cliButton = this.state.cli ? "yes-selected grub-selector" : "not-selected grub-selector text-white";
            const guiButton = this.state.gui ? "yes-selected grub-selector" : "not-selected grub-selector text-white";
            const cliMessage = this.state.cli ? <p>( Selected ) </p> : null;
            const guiMessage = this.state.gui ? <p>( Selected ) </p> : null;
            return (
                  <div className="container-fluid text-center text-dark p-0 m-0 boot-container" style={{overflow: "hidden", minHeight: "100vh"}}>
                        <MetaTags>
                              <title>Boot | Manipal Information Security Team</title>
                              <meta name="description" content="We are a team of Information and Network Security enthusiasts who aim to spread the knowledge to other students with an interest in this ever-growing field of Computer Science" />
                              <meta property="og:title" content="Boot | Manipal Information Security Team" />
                              <meta property="og:image" content={Logo} />
                              <meta name="robots" content="index, follow" />
                        </MetaTags>
                        <div className="d-flex flex-column justify-content-center p-0 m-0" style={{maxHeight: "15vh", minHeight: "15vh", overflow: "hidden"}}>
                              <h1 className="d-md-none">MIST</h1>
                              <h5 className="d-none d-md-inline">Manipal Information Security Team <div className="d-inline">&nbsp;</div><div className="d-inline">&nbsp;</div> version - Stable-Version_3.0.9-def:24.09.2020</h5>
                        </div>
                        <div className="row" style={{maxHeight: "70vh"}}>
                              <div className="mx-auto d-flex flex-md-row flex-column w-full w-md-three-quarter" style={{minHeight: "70vh", maxHeight: "70vh"}}>
                                    <div className={cliButton} onMouseOver={this.changeToCLI} onClick={this.selectRoute}>
                                          <h2 className="font-weight-bold">CLI Mode</h2>
                                          <p>Geek Mode (CLI mode) <br /><span className="modeInfo">Command Line Mode for the geek in you</span></p>
                                          {cliMessage}
                                    </div>
                                    <div className={guiButton} onMouseOver={this.changeToGUI} onClick={this.selectRoute}>
                                          <h2 className="font-weight-bold">GUI Mode</h2>
                                          <p>Non-Geek Mode (GUI mode) <br /><span className="modeInfo">Graphical Mode for easy viewing</span></p>
                                          {guiMessage}
                                    </div>
                              </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center p-0 m-0 position-absolute bottom-0 w-full" style={{maxHeight: "15vh", minHeight: "15vh"}}>
                              <h5 style={{fontWeight:"normal", fontSize:"15px"}}><span className="d-none d-md-inline">Use the &larr; and &rarr; keys to select a mode. Press enter to boot. </span><br />
                              If you are facing troubles, contact the system administrator <a id="mailMist" href="mailto:sudo@wearemist.in?Subject=Trouble%20operating%20the%20website">sudo@wearemist.in</a></h5>
                        </div>
                  </div>
            )
      }
}

export default Boot