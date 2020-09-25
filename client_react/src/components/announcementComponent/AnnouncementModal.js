import React from 'react'

function AnnouncementModal(props) {
      const imageOrNot = props.img ? <img className="img-fluid w-500 d-block mx-auto" alt={props.heading} src={props.img} /> : null;
      return (
            <div className="modal modal-full ie-scroll-fix z-10" id={`modal-${props.id}`} tabIndex="-1" role="dialog" style={{ position: "fixed" }}>
                  <div className="modal-dialog" role="document">
                        <div className="modal-content">
                              <a href="#close" className="close" role="button" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                              </a>
                              <div className="container text-center">
                                    {imageOrNot}
                                    <div className="row-fluid">
                                          <h1 className="text-center">{props.heading}</h1>
                                    </div>
                                    <div className="row">
                                          <div className="col-md-8 offset-md-2">
                                                {props.content}
                                          </div>
                                    </div>
                                    <div className="d-flex flex-column flex-md-row justify-content-around mt-5">
                                          {props.venue ? <h5 className="mt-0 mb-0"><span className="font-weight-bold mt-0 mb-0">Venue: </span>{props.venue}</h5> : null}
                                          {props.timing ? <h5 className="mt-0 mb-0"><span className="font-weight-bold mt-0 mb-0">Timings: </span>{props.timing}</h5> : null}
                                          {props.link ? <h5 className="mt-0 mb-0"><span className="font-weight-bold mt-0 mb-0">Link: </span><a href="props.link">{props.link}</a></h5> : null}
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default AnnouncementModal