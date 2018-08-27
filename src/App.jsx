import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import 'babel-polyfill'
import AdminContainer from './containers/AdminContainer.jsx';
import DashboardContainer from './containers/DashboardContainer.jsx';
import { hot } from 'react-hot-loader';

class App extends Component {

	componentDidMount() {
	console.log(React.Children);	
	}

	render() {
		return (
			<BrowserRouter>

						<AdminContainer>
							<Switch>
									<Route
										path="/"
										exact
										component={DashboardContainer}
									/>
						
							</Switch>
						</AdminContainer>
			</BrowserRouter>
		);
	}
}

export default hot(module)(App);
