import React from 'react';
import Logo from "../images/logo/logoLight.png";
import "../styles/footer.css";

function Footer() {
      return (
            <div className="bg-very-dark text-light m-0 p-20 d-flex flex-md-row flex-column" style={{ marginBottom: "0", minHeight: "30vh" }}>
                  <div className="col-12 col-md-4 p-20 text-center d-flex flex-column justify-content-center">
                        <img className="img mx-auto" alt="logo of MIST" src={Logo} style={{ height: "60px", width: "150px" }} />
                  </div>
                  <div className="col-12 col-md-4 p-20 text-center my-auto">
                        <div className="mx-auto" style={{ width: "fit-content" }}>
                              <div className="container text-md-left text-center mx-auto">
                              <h4 className="text-white font-weight-bold p-0 m-0">Manipal Information Security Team</h4>
                              <p className="text-light p-0 m-0" style={{fontSize: "1.7rem"}}>Manipal Institute of Technology<br />Udupi, Karnataka<br />576104</p>
                              </div>
                        </div>
                  </div>
                  <div className="col-12 col-md-4 p-20 my-auto">
                        <div className="row" style={{ fontSize: "2.5rem" }}>
                              <div className="mx-auto">
                                    <p className="m-0 p-0 text-center">More ways to connect</p>
                                    <a href="https://www.instagram.com/sudo.mist/" target="_blank" rel="noopener noreferrer"><i className="p-10 col-md-2 col-4 text-center fab fa-instagram"></i></a>
                                    <a href="https://www.facebook.com/wearemist.in/" target="_blank" rel="noopener noreferrer"><i className="p-10 col-md-2 col-4 text-center fab fa-facebook-f"></i></a>
                                    <a href="https://www.linkedin.com/company/manipal-information-security-team" target="_blank" rel="noopener noreferrer"><i className="p-10 col-md-2 col-4 text-center fab fa-linkedin-in"></i></a>
                                    <a href="https://github.com/MIST1819" target="_blank" rel="noopener noreferrer"><i className="p-10 col-md-2 col-4 text-center fab fa-github"></i></a>
                                    <a href="https://twitter.com/sudo_mist" target="_blank" rel="noopener noreferrer"><i className="p-10 col-md-2 col-4 text-center fab fa-twitter"></i></a>
                                    <a href="mailto:sudo@wearemist.in"><i className="p-10 col-md-2 col-4 text-center fas fa-envelope"></i></a>
                              </div>
                        </div>
                        <p className="text-center">I made this website. <a href="/credits">Find me</a>.</p>
                  </div>
            </div>
      )
}

export default Footer