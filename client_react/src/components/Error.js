import React from 'react';
import "../styles/errorPage.css"

function Credits() {
    return (
<div id="notfound">
  <div className="notfound">
    <div className="notfound-404">
      <h1 style={{marginBottom: "10vh"}}>Oops!</h1>
    </div>
    <h2>404 - Page not found</h2>
    <p>
      The page you are looking for might have been removed, had its name
      changed, is temporarily unavailable or doesn't exist.
    </p>
    <a href="/">Go To Homepage</a>
  </div>
</div>
    )
}

export default Credits