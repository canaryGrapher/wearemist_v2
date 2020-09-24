import React, { Component } from 'react'
import axios from 'axios';
import NewsElement from '../NewsElement'
import CategoryBar from '../CategoryBar'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import Loader from '../../Loader'

class ResearchAndDevelopment extends Component {
      constructor() {
            super();
            this.state = {
                  data: [],
                  loaded: false
            };
      }
      componentDidMount() {
            // getting the response from the backend
            axios.get('https://api.wearemist.in/news')
                  .then(response => {
                        this.setState({ data: response.data, loaded: true })
                  })
                  .catch((err) => {
                        console.log(err)
                  })
      }
      render() {
            const certainNews = this.state.data.map((element) => {
                  if(element.filterTags === 'Research and Development') {
                  return(
                        <NewsElement key={element._id} imgLink={element.highlightPhoto} toLink={"../../news/newsarticle?id=" + element._id + "&heading=" + element.newsHeading.split(' ').join('-')} heading={element.newsHeading} date={element.date} article={element.para} />
                  )
                  }
                  return null
            })
            const loadOrNot = !this.state.loaded ? <Loader /> : null;
           return(
                  <div className="container-fluid ">
                        {loadOrNot}
                        <Navbar />
                        <div className="container-fluid" style={{paddingTop: "10vh"}}>
                        <CategoryBar />
                        <div className="container mt-20 pt-20">
                        <h1 className="pl-20 pl-md-0">Research and Development</h1>
                        <div className="row pb-20 mb-20" style={{minHeight: "100vh"}}>
                              {certainNews}
                        </div>
                        </div>
                        </div>
                        <Footer />
                  </div>
            )
      }
}

export default ResearchAndDevelopment