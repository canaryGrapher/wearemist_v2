import React from 'react'

function AnnouncementCard(props) {
      return (
            <div className="col-12 col-md-6 animate__animated animate__jackInTheBox">
                  <div className="card border rounded" style={{ boxShadow: "0px 4px 10px #3a3a3a60", padding: "20px" }}>
                        <h2 className="card-title">{props.heading}</h2>
                        <p className="text-muted">
                              <span className="text-truncate d-inline-block w-full">
                                    {props.content}
                              </span>
                        </p>
                        <div className="text-right">
                              <a href={`#modal-${props.id}`} className="btn btn-primary">Full Announcement</a>
                        </div>
                  </div>
            </div>
      )
}

export default AnnouncementCard
