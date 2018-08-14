import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { hot } from 'react-hot-loader';


class App extends Component {
	render() {
		return (
			<BrowserRouter>
		
					<Route
						path="/"
						render={() => (
						
							<Switch>
								<Route path="/" exact component={AdminContainer} />
							
	
							</Switch>

						)}
					/>

			</BrowserRouter>
		);
	}
}

export default hot(module)(App);
