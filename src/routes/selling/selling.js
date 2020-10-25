import React, { Component } from 'react';
import './selling.css';
export default class selling extends Component {
	render() {
		return (
			<div className="itemsToBeSold">
				<div className="item">
					<img src="" alt="selling" />
					<h2>Name of the Item </h2>
					<h4> Description </h4>
					<h4>Price </h4>
					<h5>Date Posted </h5>
                    <button>Mark as Sold </button>
				</div>
				<div className="item">
					<img src="" alt="selling" />
					<h2>Name of the Item </h2>
					<h4> Description </h4>
					<h4>Price </h4>
					<h5>Date Posted </h5>
                    <button>Mark as Sold </button>
				</div>
				<div className="item">
					<img src="" alt="selling" />
					<h2>Name of the Item </h2>
					<h4> Description </h4>
					<h4>Price </h4>
					<h5>Date Posted </h5>
                    <button>Mark as Sold </button>
				</div>
			</div>
		);
	}
}
