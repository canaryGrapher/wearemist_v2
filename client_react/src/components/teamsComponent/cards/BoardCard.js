import React from 'react';

function BoardCard(props) {
      const webpage = props.webpage ? <a href={props.webpage}><i className="fas fa-globe-asia mx-10" style={{ fontSize: '3rem', color: "#2980B9" }}></i></a> : null
      const githubLink = props.github.length > 1 ? <a href={props.github}><i className="fab fa-github mx-10" style={{ fontSize: '3rem', color: "#6e5494" }}></i></a> : null
      const linkedinLink = props.linkedin.length > 1 ? <a href={props.linkedin}><i className="fab fa-linkedin mx-10" style={{ fontSize: '3rem', color: '#0e76a8' }}></i></a> : null
      return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="card p-0 border-0 text-center">
                        <img src={props.image} className="img-fluid rounded w-200 h-200 mx-auto" alt={props.name} />
                        <div className="content p-0 m-0">
                              <h2 className="content-title p-0 m-0">
                                    {props.name}
                              </h2>
                              <p className="text-center p-0 m-0">{props.position}</p>
                              <div className="d-flex flex-row justify-content-center mt-10">
                                    {webpage}
                                    {githubLink}
                                    {linkedinLink}
                              </div>
                        </div>
                  </div>
            </div >

      )
}

export default BoardCard