import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/home';
import cart from './components/cart'

function App() {
return (
<BrowserRouter>
	<Navbar></Navbar>
	
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/cart" component={cart} />
		</Switch>
</BrowserRouter>
);
}

export default App;
