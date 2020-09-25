import React from 'react';
import Image from '../images/backgrounds/creator.jpg'
import ReactImage from '../images/assets/react.png'
import HalfmoonImage from '../images/assets/halfmoon.png'
import AxiosImage from '../images/assets/axios.png'
import NodeJSImage from '../images/assets/nodejs.png'
import MongoDbImage from '../images/assets/mongodb.png'
import AnimateCSSImage from '../images/assets/animatecss.png'
import Pexels from '../images/assets/pexels.jpg'
import GoogleFonts from '../images/assets/googleFonts.png'
import Unsplash from '../images/assets/unsplash_logo.png'
import Cryptography from '../images/assets/cryptography.jpg'
import Ctfs from '../images/assets/ctfs.jpg'
import CyberAwareness from '../images/assets/cyberawareness.jpg'
import Networking from '../images/assets/networking.jpg'
import Research from '../images/assets/research.jpg'
import Webdev from '../images/assets/webdev.jpg'
import ErrorPage from '../images/backgrounds/errorPage.jpg'
import BootImage from '../images/assets/backgroundBoot.png'
import MicImage from '../images/assets/mic.jpeg'
import MistLogo from '../images/logo/logoDark.png'
import Navbar from './Navbar'
import Footer from './Footer'
import VideoLocation from '../images/videos/landing.mp4'
import MetaTags from 'react-meta-tags';


function Credits() {
  return (
    <div className="container-fluid">
      <Navbar />                        
      <MetaTags>
        <title>Credits | Manipal Information Security Team</title>
        <meta name="description" content="We are a team of Information and Network Security enthusiasts who aim to spread the knowledge to other students with an interest in this ever-growing field of Computer Science" />
        <meta property="og:title" content="Credits | Manipal Information Security Team" />
        <meta property="og:image" content={MistLogo} />
        <meta name="robots" content="noindex, nofollow" />
      </MetaTags>
      <div className="container">
      <div className="row" style={{ paddingTop: "15vh" }}>
        <div className="col-12 col-md-6">
          <img className="img-fluid" src={Image} alt="Creator of the website animate__animated animate__fadeIn" />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <div className="card border-0">
            <h1 className="text-center text-md-left font-weight-bold mb-0 pb-0">
              Yash Aryan
            </h1>
            <p className="font-size-20 pt-0 mt-0 animate__animated animate__rollIn">Hi, I am the creator of this page. I love learning new technologies and languages and applying them to real-world projects. I am a full stack developer, and my preferred language is JavaScript, although I can code in Python and C++ too. I am always looking for projects to keep myself busy, and I would love it if you bring me an exciting project to work on together. <br /><br /> Also, I didn't get a better picture.</p>
          </div>
        </div>
      </div>
      <div className="container mt-20 pt-20">
        <h2 className="mt-20 pt-20 mb-0 pb-0 text-center">Technologies Used</h2>
        <div className="row mt-20">
          {/* card for halfmoon */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card p-0 text-center m-0 border-0">
              <img src={HalfmoonImage} className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" alt="Halfmoon UI" />

              <div className="content text-left p-10">
                <h1 className="content-title my-0 py-0">
                  Halfmoon UI
              </h1>
                <p className="text-muted py-0 my-0">
                  <a href="https://www.gethalfmoon.com/" target="_blank" rel="noopener noreferrer">Halmoon</a> is a front-end framework with a built-in dark mode and full customizability using CSS variables.
              </p>
              </div>
            </div>
          </div>
          {/* card for react  */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card p-0 text-center m-0 border-0">
              <img src={ReactImage} className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" alt="React JS" />

              <div className="content text-left p-10">
                <h1 className="content-title my-0 py-0">
                  ReactJS
              </h1>
                <p className="text-muted py-0 my-0">
                  <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> is an open-source JavaScript library for building user interfaces or UI components.
              </p>
              </div>
            </div>
          </div>
          {/* card for node */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card p-0 text-center m-0 border-0">
              <img src={NodeJSImage} className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" alt="Node JS" />

              <div className="content text-left p-10">
                <h1 className="content-title my-0 py-0">
                  NodeJS
              </h1>
                <p className="text-muted py-0 my-0">
                  <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node</a> is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.
              </p>
              </div>
            </div>
          </div>
          {/* card for axios */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card p-0 text-center m-0 border-0">
              <img src={AxiosImage} className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" alt="Axios" />

              <div className="content text-left p-10">
                <h1 className="content-title my-0 py-0">
                  Axios
              </h1>
                <p className="text-muted py-0 my-0">
                  <a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">Axios</a> is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser that also supports the ES6 Promise API.
              </p>
              </div>
            </div>
          </div>
          {/* card for mongoDB */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card p-0 text-center m-0 border-0">
              <img src={MongoDbImage} className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" alt="Mongo DB" />

              <div className="content text-left p-10">
                <h1 className="content-title my-0 py-0">
                  MongoDB
              </h1>
                <p className="text-muted py-0 my-0">
                  <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB</a> is a cross-platform document-oriented database program.
              </p>
              </div>
            </div>
          </div>
          {/* card for animate css */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card p-0 text-center m-0 border-0">
              <img src={AnimateCSSImage} className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" alt="Animate CSS" />

              <div className="content text-left p-10">
                <h1 className="content-title my-0 py-0">
                  Animate.CSS
              </h1>
                <p className="text-muted py-0 my-0">
                  <a href="https://animate.style/" target="_blank" rel="noopener noreferrer">AnimateCSS</a> is a library of ready-to-use, cross-browser animations for use in your web projects. Great for emphasis, home pages, sliders, and attention-guiding hints.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="mt-20 pt-20 mb-0 pb-0 text-center">Sources</h2>
        <div className="row mt-20">
          <div className="col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="card p-5 m-0 text-center border-0">
              <img className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" src={Unsplash} alt="unsplash" />
              <div className="content text-left px-10 py-5 my-0">
                <h1 className="card-title py-0 my-0">Unsplash</h1>
                <p className="my-0 py-0">Almost all the images were taken from <a target="_blank" rel="noopener noreferrer"
                  href="https://unsplash.com/">unsplash.com</a> because it is a source for free
                            images, without the need for paying royalities.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="card p-5 m-0 text-center border-0">
              <img className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" src={GoogleFonts} alt="googlefonts" />
              <div className="content text-left px-10 py-5 my-0">
                <h1 className="card-title py-0 my-0">Google Fonts</h1>
                <p className="my-0 py-0">Google Fonts is library of free licensed font famillies. Some custom fonts
                  were imported from <a target="_blank" rel="noopener noreferrer" href="https://fonts.google.com/">fonts.google.com</a> to make it match
                  it with the design of the page. </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="card p-5 m-0 text-center border-0">
              <img className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" src={Pexels} alt="Pexels" />
              <div className="content text-left px-10 py-5 my-0">
                <h1 className="card-title py-0 my-0">Pexels</h1>
                <p className="my-0 py-0"><a target="_blank" rel="noopener noreferrer" href="https://www.pexels.com/">Pexels</a> is a source for free stock photos and videos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-20 pb-20">
        <h2 className="mt-20 pt-20 mb-0 pb-0 text-center">Resources</h2>
        <div className="row mt-20">
          <div className="col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="card p-5 m-0 text-left border-0">
              <img className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" src={Cryptography} alt="cryprography" />
              <p class="mb-0">Photo By</p>
              <h4 class="card-title mb-0 pb-0">Markus Spiske</h4>
              <p className="pt-0 mt-0">This image was taken from the unplash user <a target="_blank" rel="noopener noreferrer"
                href="https://unsplash.com/@markusspiske">@markusspiske</a></p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="card p-5 m-0 text-left border-0">
              <img className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" src={Ctfs} alt="Ctfs" />
              <p class="mb-0">Photo By</p>
              <h4 class="card-title mb-0 pb-0">Daria Nepriakhina</h4>
              <p className="pt-0 mt-0">This image was taken from the unplash user <a target="_blank" rel="noopener noreferrer"
                href="https://unsplash.com/@epicantus">@epicantus</a></p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="card p-5 m-0 text-left border-0">
              <img className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" src={CyberAwareness} alt="CyberAwareness" />
              <p class="mb-0">Photo By</p>
              <h4 class="card-title mb-0 pb-0">NeONBRAND</h4>
              <p className="pt-0 mt-0">This image was taken from the unplash user <a target="_blank" rel="noopener noreferrer"
                href="https://unsplash.com/@neonbrand">@neonbrand</a></p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="card p-5 m-0 text-left border-0">
              <img className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" src={Networking} alt="Networking" />

              <p class="mb-0">Photo By</p>
              <h4 class="card-title mb-0 pb-0">Taylor Vick</h4>
              <p className="pt-0 mt-0">This image was taken from the unplash user <a target="_blank" rel="noopener noreferrer"
                href="https://unsplash.com/@tvick">@tvick</a>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="card p-5 m-0 text-left border-0">
              <img className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" src={Research} alt="Research" />
              <p class="mb-0">Photo By</p>
              <h4 class="card-title mb-0 pb-0">
                Chris Liverani</h4>
              <p className="pt-0 mt-0">This image was taken from the unplash user <a target="_blank" rel="noopener noreferrer"
                href="https://unsplash.com/@chrisliverani">@chrisliverani</a></p>
            </div>

          </div>

          <div className="col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="card p-5 m-0 text-left border-0">
              <img className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" src={Webdev} alt="Webdev" />
              <p class="mb-0">Photo By</p>
              <h4 class="card-title mb-0 pb-0">Lee Campbell</h4>
              <p className="pt-0 mt-0">This image was taken from the unplash user <a target="_blank" rel="noopener noreferrer"
                href="https://unsplash.com/@leecampbell">@leecampbell</a></p>

            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="card p-5 m-0 text-left border-0">
              <img className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" src={ErrorPage} alt="ErrorPage" />
              <p class="mb-0">Template By</p>
              <h4 class="card-title mb-0 pb-0">Colorlib</h4>
              <p className="pt-0 mt-0">This error page template was downloaded from <a href="https://colorlib.com/">Colorlib</a></p>

            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="card p-5 m-0 text-left border-0">
              <img className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" src={BootImage} alt="BootImage" />
              <p className="mb-0">Illustration By</p>
              <h4 class="card-title mb-0 pb-0">Freepik</h4>
              <p className="pt-0 mt-0">This illustration was downloaded from <a href="https://www.freepik.com/free-vector/colorful-flow-background_9579263.htm">Freepik</a></p>

            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="card p-5 m-0 text-left border-0">
              <img className="img-fluid rounded-top m-0 p-0 mx-auto h-250 w-full" src={MicImage} alt="Microphone" />
              <p class="mb-0">Photo By</p>
              <h4 class="card-title mb-0 pb-0">Matt Botsford</h4>
              <p className="pt-0 mt-0">This image was taken from the unplash user <a target="_blank" rel="noopener noreferrer"
                href="https://unsplash.com/@mattbotsford">@mattbotsford</a></p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-0 m-0" style={{ overflow: "hidden" }}>
            <div className="card p-5 m-0 text-left border-0">
              <video autoPlay loop muted className="h-250 rounded-top">
                <source src={VideoLocation} type="video/mp4" />
              </video>
              <p class="mb-0">Video By</p>
              <h4 class="card-title mb-0 pb-0">Nick Bondarev</h4>
              <p className="pt-0 mt-0">This video was taken from the pexels user <a target="_blank" rel="noopener noreferrer"
                href="https://www.pexels.com/@nick-bondarev?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Nick Bondarev</a></p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="card p-5 m-0 text-left border-0">
              <div className="card-image h-250 w-full d-flex flex-column justify-content-center">
              <img className="img-fluid rounded-top m-0 p-0 mx-auto my-10" src={MistLogo} alt="Logo Creator" />
              </div>
              <p class="mb-0">Logo By</p>
              <h4 class="card-title mb-0 pb-0">Akash Krishna</h4>
              <p className="pt-0 mt-0">The logo for MIST was created by club member <a target="_blank" rel="noopener noreferrer"
                href="https://www.instagram.com/akash_132/?hl=en">Akash Krishna</a></p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>

  )
}

export default Credits