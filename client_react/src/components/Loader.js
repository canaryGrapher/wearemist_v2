import React from 'react'
import '../styles/loader.css'

function Loader() {
      return (
            <div className="container-fluid bg-white d-flex flex-column justify-content-center" style={{ height: "100vh", width: "100vw", zIndex: "300", position: "fixed" }}>
                  <div className="d-flex flex-row justify-content-center">
                        <div className="sk-chase">
                              <div className="sk-chase-dot"></div>
                              <div className="sk-chase-dot"></div>
                              <div className="sk-chase-dot"></div>
                              <div className="sk-chase-dot"></div>
                              <div className="sk-chase-dot"></div>
                              <div className="sk-chase-dot"></div>
                        </div>
                  </div>
                  <h3 className="text-center pt-20" style={{ color: "rgb(37, 37, 37)" }}>Loading</h3>
            </div>
      )
}

export default Loader