import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Landing from './Landing';
import Team from './Team';
import News from './News';
import Announcements from './Announcements'
import Vulnerabilities from './newsComponents/categories/Vulnerabilities'
import Breaches from './newsComponents/categories/Breaches'
import FraudsandScams from './newsComponents/categories/FraudsandScams'
import PoliciesandRegulations from './newsComponents/categories/Policies'
import ResearchandDevelopment from './newsComponents/categories/ResearchAndDevelopemnt'
import Newsarticle from './newsComponents/Newsarticle'
import Contributorprofile from './profile/Contributorprofile'
import Boot from './Boot'
import Credits from './Credits';
import Error from "./Error";

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			data: null
		};
	}
	render() {
		return (
			    <div className="page-wrapper">
				{/* <Navbar /> */}
				<div className="content-wrapper">
					<Switch>
						<Route exact path="/"  component={Boot} />
						<Route exact path="/home" component={Landing} />
						<Route exact path="/team" component={Team} />
						<Route exact path="/news" component={News} />
						<Route exact path="/credits" component={Credits} />
						<Route exact path="/announcements" component={Announcements} />
						<Route exact path="/news/vulnerabilities/" component={Vulnerabilities} />
						<Route exact path="/news/breaches/" component={Breaches} />
						<Route exact path="/news/fraudsandscams/" component={FraudsandScams} />
						<Route exact path="/news/policiesandregulations/" component={PoliciesandRegulations} />
						<Route exact path="/news/researchanddevelopment/" component={ResearchandDevelopment} />
						<Route path="/news/newsarticle" component={Newsarticle} />
						<Route path="/profile" component={Contributorprofile} />
						<Route component={Error} />
					</Switch>
					{/* <Footer /> */}
				</div>
			</div>
		);
	}
}

export default App;
