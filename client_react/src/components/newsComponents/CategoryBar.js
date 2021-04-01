import React from 'react'
import { NavLink } from 'react-router-dom';

function CategoryBar() {
      return(
        <div className="my-20">
          <h4 className="mb-5 font-weight-bold ml-10">Explore all categories</h4>
          <div className="row justify-content-around py-10 bg-very-dark">
            <NavLink exact to="/news/vulnerabilities/" className="nav-link p-10">Vulnerabilities</NavLink>
            <NavLink exact to="/news/breaches/" className="nav-link p-10">Breaches</NavLink>
            <NavLink exact to="/news/fraudsandscams/" className="nav-link p-10">Frauds and Scams</NavLink>
            <NavLink exact to="/news/policiesandregulations/" className="nav-link p-10">Policies and Regulations</NavLink>
            <NavLink exact to="/news/researchanddevelopment/" className="nav-link p-10">Research and Development</NavLink>
          </div>
        </div>
      )
}

export default CategoryBar