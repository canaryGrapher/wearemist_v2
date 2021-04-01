import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/newspage.css';
import CategoryBar from './newsComponents/CategoryBar'
import NewsElement from './newsComponents/NewsElement'
import Navbar from './Navbar'
import Footer from './Footer'
import Loader from './Loader'
import MetaTags from 'react-meta-tags'
import Logo from '../images/logo/logoDark.png'
class News extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loader: false
    };
  }
  render() {
    // for the big news card on the left side
    let bignews = this.state.data.map((item, index) => {
      while (index === 0) {
        return (
          <Link key={item._id} to={"news/newsarticle?id=" + item._id + "&heading=" + item.newsHeading.split(' ').join('-')}>
            <div key={item._id} className="h-250 h-md-500 w-full bg-dark newsContainer mb-10 mb-md-0 animate__animated animate__fadeInUp" style={{ borderRightWidth: "2.5px", borderColor: "#fff", borderStyle: "solid" }}>
              <img src={item.highlightPhoto} alt={item.newsHeading} style={{ width: "100%", height: "100%" }} />
              <div className="text-block pt-10">
                <p className="text-white"><span className="p-5 bg-very-dark">{item.filterTags}</span></p>
                <h4 className="text-light d-none d-md-block mt-0 pt-5">{item.newsHeading}</h4>
                <h6 className="text-light font-weight-bold d-md-none">{item.newsHeading}</h6>
              </div>
            </div>
          </Link>
        )
      }
      return null
    })

    // for the smaller two news on the right side
    let sideNews = this.state.data.map((item, index) => {
      while (index === 1 || index === 2) {
        return (
          <Link key={item._id} to={"news/newsarticle?id=" + item._id + "&heading=" + item.newsHeading.split(' ').join('-')}>
            <div key={item._id} className="h-250 w-full bg-dark newsContainer mb-10 mb-md-0 animate__animated animate__fadeInUp" style={{ borderBottomWidth: "2.5px", borderColor: "#fff", borderStyle: "solid" }}>
              <img src={item.highlightPhoto} alt={item.newsHeading} style={{ width: "100%", height: "100%" }} />
              <div className="text-block pt-10">
                <p className="text-white"><span className="p-5 bg-very-dark">{item.filterTags}</span></p>
                <h6 className="text-light font-weight-bold  mt-0 pt-5">{item.newsHeading}</h6>
              </div>
            </div>
          </Link>
        )
      }
      return null
    })
    let countRnd = 0;
    let countBreaches = 0;
    let countVuln = 0;
    let countFraud = 0;
    let countPoli = 0;
    let rndNews = this.state.data.map((item, index) => {
      if (item.filterTags === 'Research and Development' && countRnd <= 3) {
        countRnd += 1;
        return (
            <NewsElement key={item._id} heading={item.newsHeading} article={item.para} author={item.author} imgLink={item.highlightPhoto} toLink={"news/newsarticle?id=" + item._id + "&heading=" + item.newsHeading.split(' ').join('-')} date={item.date} tag={item.filterTags} />
        )
      }
      return null
    })
    let vulnNews = this.state.data.map((item, index) => {
      if (item.filterTags === 'Vulnerabilities' && countVuln <= 3) {
        countVuln += 1;
        return (
            <NewsElement key={item._id} heading={item.newsHeading} article={item.para} author={item.author} imgLink={item.highlightPhoto} toLink={"news/newsarticle?id=" + item._id + "&heading=" + item.newsHeading.split(' ').join('-')} date={item.date} tag={item.filterTags} />
        )
      }
      return null
    })
    let breachNews = this.state.data.map((item, index) => {
      if (item.filterTags === 'Breaches' && countBreaches <= 3) {
        countBreaches += 1;
        return (
            <NewsElement key={item._id} heading={item.newsHeading} article={item.para} author={item.author} imgLink={item.highlightPhoto} toLink={"news/newsarticle?id=" + item._id + "&heading=" + item.newsHeading.split(' ').join('-')} date={item.date} tag={item.filterTags} />
        )
      }
      return null
    })
    let poliNews = this.state.data.map((item, index) => {
      if (item.filterTags === 'Policies and Regulations' && countPoli <= 3) {
        countPoli += 1;
        return (
            <NewsElement key={item._id} heading={item.newsHeading} article={item.para} author={item.author} imgLink={item.highlightPhoto} toLink={"news/newsarticle?id=" + item._id + "&heading=" + item.newsHeading.split(' ').join('-')} date={item.date} tag={item.filterTags} />
        )
      }
      return null
    })
    let fraudNews = this.state.data.map((item, index) => {
      if (item.filterTags === 'Frauds and Scams' && countFraud <= 3) {
        countFraud += 1;
        return (
            <NewsElement key={item._id} heading={item.newsHeading} article={item.para} author={item.author} imgLink={item.highlightPhoto} toLink={"news/newsarticle?id=" + item._id + "&heading=" + item.newsHeading.split(' ').join('-')} date={item.date} tag={item.filterTags} />
        )
      }
      return null
    })
    const loadingOrNot = !this.state.loaded ? <Loader /> : null;
    return (
      <div className="container-fluid">
        <MetaTags>
          <title>CyberManipal | Manipal Information Security Team</title>
          <meta name="description" content="Your destination for cyber security news. The official cybersecurity news page run by students of Manipal Institute of Technolgy and supervised by Manipal Inforamtion Security Team." />
          <meta property="og:title" content="CyberManipal | Manipal Information Security Team" />
          <meta property="og:image" content={Logo} />
          <meta name="robots" content="index, follow" />
        </MetaTags>
        {loadingOrNot}
        <Navbar />
        <div className="container px-md-10">
        <div className="row-fluid h-100"></div>
        <div className="d-flex flex-column px-10 px-md-0">
          <h1 className="d-none d-md-block mb-0 pb-0">Welcome to CyberManipal</h1>
          <h3 className="d-md-none mb-0 pb-0">Welcome to CyberManipal</h3>
          <h5 className="pb-20 text-muted">Your destination for cyber security news. The official cybersecurity news page run by students of Manipal Institute of Technology and supervised by Manipal Information Security Team.</h5>
        </div>
        <CategoryBar />
        < div className="row px-10 px-md-0 py-15" >
          <p><span className="px-10 py-5 bg-dark text-light">Trending Now</span>
            <span className="py-5 pl-10 text-wrap">The latest trending news from the cybersecurity world</span></p>
        </div >
        <div className="px-10 px-md-0 d-flex flex-column flex-md-row">
          <div className="col-12 col-md-7">
            {bignews}
          </div>
          <div className="col-12 col-md-5">
            {sideNews}
          </div>
        </div>
        <div className="container mb-20">
          <div className="row px-10 px-md-0 my-10">
            <p className="px-10 py-5 bg-dark text-light">Recent Now</p>
            <p className="py-5 pl-10">These are happening in the recently in the cybersecurity world.</p>
          </div>
          <div className="row">
            <h4 className="text-left font-weight-bold">‎‎‏‏‎<span className="text-danger"> ‎</span><NavLink exact to="/news/researchanddevelopment/" className="text-dark pl-15 pl-md-0">Reasearch and Developement</NavLink></h4>
          </div>
          <div className="row mb-20">
            {rndNews}
          </div>
          <div className="row">
            <h4 className="text-left font-weight-bold">‎‎‏‏‎<span className="text-danger"> ‎</span><NavLink exact to="/news/breaches/" className="text-dark pl-15 pl-md-0">Breaches</NavLink></h4>
          </div>
          <div className="row mb-20">
            {breachNews}
          </div>
          <div className="row">
            <h4 className="text-left font-weight-bold">‎‎‏‏‎<span className="text-danger"> ‎</span><NavLink exact to="/news/vulnerabilities/" className="text-dark pl-15 pl-md-0">Vulnerabilities</NavLink></h4>
          </div>
          <div className="row mb-20">
            {vulnNews}
          </div>
          <div className="row">
            <h4 className="text-left font-weight-bold">‎‎‏‏‎<span className="text-danger"> ‎</span><NavLink exact to="/news/fraudsandscams/" className="text-dark pl-15 pl-md-0">Frauds and Scams</NavLink></h4>
          </div>
          <div className="row mb-20">
            {fraudNews}
          </div>
          <div className="row">
            <h4 className="text-left font-weight-bold">‎‎‏‏‎<span className="text-danger"> ‎</span><NavLink exact to="/news/policiesandregulations/" className="text-dark pl-15 pl-md-0">Policies and Regulations</NavLink></h4>
          </div>
          <div className="row mb-20">
            {poliNews}
          </div>
        </div>
        </div>
        <Footer />
      </div >
    );
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
}

export default News
