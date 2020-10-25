import React, { Component } from 'react';
import './Orders.css';
export default class Orders extends Component {
	render() {
		return (
			<div className="Orders">
				<div className="orderList">
					<ul>
						<li>
							<div className="item">
								<img src="" alt="selling" />
								<div>
									<h2>Name of the Item </h2>
									<h4> Description </h4>
									<h5>Date Posted </h5>
								</div>
								<h4>Price </h4>
								<button> Remove </button>
							</div>
						</li>
						<li>
							<div className="item">
								<img src="" alt="selling" />
								<div>
									<h2>Name of the Item </h2>
									<h4> Description </h4>
									<h5>Date Posted </h5>
								</div>
								<h4>Price </h4>
								<button> Remove </button>
							</div>
						</li>
						<li>
							<div className="item">
								<img src="" alt="selling" />
								<div>
									<h2>Name of the Item </h2>
									<h4> Description </h4>
									<h5>Date Posted </h5>
								</div>
								<h4>Price </h4>
								<button> Remove </button>
							</div>
						</li>
					</ul>

					<hr />
					<div className="grandTotal">
						<h5>Total</h5>
						<h5>Tax</h5>
                        <h5>transportation </h5>
					</div>
				</div>
			</div>
		);
	}
}
