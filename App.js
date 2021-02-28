import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

// Pages
import Home from './Home.js';
import Products from './Products.js';

export default function App() {
	return (
		<Router>
			<div>
				<nav className="container">
        <a href='./Home.js'><img src="/images/thicklogo.png" alt="logo" className="logo" /></a>

					<ul className="nav-list">
						{/* <li className="nav-item"><Link to="/">Home</Link></li> */}
						<li className="nav-item"><Link to="/products">Products</Link></li>
					</ul>
				</nav>

    

				<Switch>
					<Route path="/products"><Products /></Route>
					{/* IMPORTANT: Keep Home at the bottom of the switch! */}
					<Route path="/"><Home /></Route>
				</Switch>
			</div>
		</Router>
	);
}
