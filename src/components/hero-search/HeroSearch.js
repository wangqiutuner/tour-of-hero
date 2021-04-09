import React from 'react';
import { searchHeroes } from '../../api/hero';
import './style.css';
import { Link } from 'react-router-dom';

function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

class HeroSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroes: [],
		};

		this.search = this.search.bind(this);
		this.searchBox = React.createRef();
	}

	search() {
		const term = this.searchBox.current.value;

		searchHeroes(term).then(async (res) => {
			await sleep(300);
			this.setState({ heroes: res.data });
		});
	}

	render() {
		const { heroes } = this.state;

		return (
			<div id="search-component">
				<h4>
					<label htmlFor="search-box">Hero Search</label>
				</h4>
				<input id="search-box" name="search" ref={this.searchBox} onInput={this.search} autoComplete="off"></input>

				<ul className="search-result">
					{heroes.map((hero) => (
						<li key={hero.id}>
							<Link to={`/detail/${hero.id}`}>{hero.name}</Link>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default HeroSearch;
