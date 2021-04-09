import React from 'react';
import { uppercaseFormat } from '../../utils/utils';
import { getHeroes, updateHero } from '../../api/hero';
import './style.css';

class HeroDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hero: {},
		};

		this.goBack = this.goBack.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.save = this.save.bind(this);
	}

	componentDidMount() {
		const id = +this.props.match.params.id;
		getHeroes().then((res) => {
			let heroes = res.data;
			this.setState({ hero: heroes.find((val) => val.id === id) });
		});
	}

	handleChange(event) {
		const hero = this.state.hero;
		this.setState({ hero: { ...hero, name: event.target.value } });
	}

	goBack() {
		this.props.history.goBack();
	}

	save() {
		updateHero(this.state.hero).then(() => {
			this.goBack();
		});
	}

	render() {
		const hero = this.state.hero;

		return (
			<>
				{hero.id && (
					<div className="hero-detail-ui">
						<h2>{uppercaseFormat(hero.name)} Details</h2>
						<div>
							<span>id: </span>
							{hero.id}
						</div>
						<div>
							<label>
								name:
								<input value={hero.name} onChange={this.handleChange} />
							</label>
						</div>
						<button onClick={this.goBack}>go back</button>&nbsp;
						<button onClick={this.save}>save</button>
					</div>
				)}
			</>
		);
	}
}

export default HeroDetail;
