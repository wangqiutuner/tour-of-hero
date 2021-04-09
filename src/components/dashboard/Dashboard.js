import React from 'react';
import { getHeroes } from '../../api/hero';
import { Link } from 'react-router-dom';
import './style.css';
import HeroSearch from '../hero-search/HeroSearch';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroes: [],
		};
	}

	componentDidMount() {
		getHeroes().then((res) => {
			this.setState({
				heroes: res.data.slice(1, 5),
			});
		});
	}

	render() {
		return (
			<>
				<h3>Top Heroes</h3>
				<div className="grid grid-pad fix">
					{this.state.heroes.map((hero) => {
						return (
							<Link className="col-1-4 " to={`/detail/${hero.id}`} key={hero.id}>
								<div className="module hero">
									<h4>{hero.name}</h4>
								</div>
							</Link>
						);
					})}
				</div>
				<HeroSearch />
			</>
		);
	}
}

export default Dashboard;
