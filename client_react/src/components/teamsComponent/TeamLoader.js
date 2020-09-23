import React from 'react'
import '../../styles/teamloader.css'


function TeamLoader() {
      return (
            <div className="container-fluid bg-white d-flex flex-column justify-content-center top-0 left-0" style={{ height: "100vh", position: "fixed", width: "100vw", zIndex: "20" }}>
                  <div className="d-flex flex-row justify-content-center">
                        <div class="spinner">
                              <div class="rect1"></div>
                              <div class="rect2"></div>
                              <div class="rect3"></div>
                              <div class="rect4"></div>
                              <div class="rect5"></div>
                        </div>
                  </div>
            </div>
      )
}

export default TeamLoader