import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Nav from './Nav';
import Loading from './Loading';

const Router = BrowserRouter;

class App extends Component {
	render() {
		return (
      <Router>
			<div>
        <Nav />
        <Loading />
			</div>
      </Router>
		);
	}
}

export default App