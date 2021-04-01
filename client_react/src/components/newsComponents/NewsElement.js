import React from 'react';
import { Link } from 'react-router-dom';

function NewsElement(props) {
      return (
            <div className="col-12 col-md-6 col-lg-3 my-md-10 animate__animated animate__fadeIn">
                  <Link to={props.toLink} style={{ textDecoration: "none" }}>
                        <div className="card p-0 m-0">
                              <img src={props.imgLink} loading="lazy" className="img-fluid rounded-top h-150 w-full d-none d-md-block m-0 p-0" alt={props.heading} />
                              <div className="content h-150 mx-2 my-0 p-0">
                                    <h6 className="font-weight-bold pb-0 mb-0">{props.heading}</h6>
                                    <p className="text-muted p-0 m-0">{props.date}</p>
                                    <p className="text-dark text-truncate p-0 m-0">
                                          {props.article}
                                    </p>
                              </div>
                        </div>
                  </Link>
            </div >

      )
}

export default NewsElement