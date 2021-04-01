import React from 'react'
import '../../styles/teamloader.css'


function TeamLoader() {
      return (
            <div className="container-fluid bg-white d-flex flex-column justify-content-center top-0 left-0" style={{ height: "100vh", position: "fixed", width: "100vw", zIndex: "20" }}>
                  <div className="d-flex flex-row justify-content-center">
                        <div className="spinner">
                              <div className="rect1"></div>
                              <div className="rect2"></div>
                              <div className="rect3"></div>
                              <div className="rect4"></div>
                              <div className="rect5"></div>
                        </div>
                  </div>
            </div>
      )
}

export default TeamLoader