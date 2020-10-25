import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';
export default class LandingPage extends Component {
	render() {
		return (
			<div>
				<h2> Welcome </h2>
				<div className="itemsToBeBought">
					<div className="item">
						<img src="" alt="buying" />
						<h2>Name of the Item </h2>
						<h4> Description </h4>
						<h4>Price </h4>
						<h5>Location </h5>
						<h5>Rating </h5>
						<h5>Date Posted </h5>
					</div>
					<div className="item">
						<img src="" alt="buying" />
						<h2>Name of the Item </h2>
						<h4> Description </h4>
						<h4>Price </h4>
						<h5>Location </h5>
						<h5>Rating </h5>
						<h5>Date Posted </h5>
					</div>
					<div className="item">
						<img src="" alt="buying" />
						<h2>Name of the Item </h2>
						<h4> Description </h4>
						<h4>Price </h4>
						<h5>Location </h5>
						<h5>Rating </h5>
						<h5>Date Posted </h5>
					</div>
				</div>
			</div>
		);
	}
}
