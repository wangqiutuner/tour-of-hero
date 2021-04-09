import './App.css';
import Heroes from './components/heroes/Heroes';
import DashBoard from './components/dashboard/Dashboard';
import HeroDetail from './components/hero-detail/HeroDetail';
import Messages from './components/messages/Messages';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';

function App() {
	const title = 'Tour of Heroes';
	return (
		<div className="App">
			<h1>{title}</h1>
			<nav>
				<Link to="/dashboard">Dashboard</Link>&nbsp;
				<Link to="/heroes">Heroes</Link>
			</nav>
			<Switch>
				<Redirect exact from="/" to="/dashboard" />
				<Route path="/dashboard" component={DashBoard} />
				<Route path="/detail/:id" component={HeroDetail} />
				<Route path="/heroes" component={Heroes} />
			</Switch>
			<Messages />
		</div>
	);
}

export default App;
