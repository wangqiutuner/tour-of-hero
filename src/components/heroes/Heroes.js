import React from 'react';
import { getHeroes, addHero, deleteHero } from '../../api/hero';
import './style.css';
import { Link } from 'react-router-dom';

class Heroes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroes: [],
		};

		this.add = this.add.bind(this);
		this.heroName = React.createRef();
	}

	componentDidMount() {
		getHeroes().then((res) => {
			this.setState({
				heroes: res.data,
			});
		});
	}

	add() {
		const name = this.heroName.current.value.trim(),
			{ heroes } = this.state;
		if (!name) return;
		addHero(name).then((res) => {
			this.setState({ heroes: heroes.concat([res.data]) });
		});
	}

	delete(hero) {
		const { heroes } = this.state;
		this.setState({ heroes: heroes.filter((val) => val !== hero) });
		deleteHero(hero.id);
	}

	render() {
		const { heroes } = this.state;
		return (
			<>
				<h2>My Heroes</h2>
				<div>
					<label>
						Hero name:&nbsp;
						<input id="heroName" name="heroName" ref={this.heroName} />
					</label>
					&nbsp;
					<button onClick={this.add}>add</button>
				</div>
				<ul className="heroes">
					{heroes.map((hero) => {
						return (
							<li key={hero.id}>
								<Link to={`/detail/${hero.id}`}>
									<span className="badge">{hero.id}</span> {hero.name}
								</Link>
								<button
									className="delete"
									title="delete hero"
									onClick={() => {
										this.delete(hero);
									}}>
									✖
								</button>
							</li>
						);
					})}
				</ul>
			</>
		);
	}
}

export default Heroes;
