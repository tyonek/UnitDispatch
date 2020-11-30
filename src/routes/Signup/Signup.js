import React, { Component } from 'react';
import SignupForm from '../../component/Forms/signUpForm/signUpFrom';

export default class Signup extends Component {

	render() {
		return (
			<div>
				{!!this.props.currentUser ? (
					<div>
						<h1> Thank you for signing up </h1>
						<button
							onClick={() => {
								this.props.history.push('/login');
							}}
						>
							Login
						</button>
					</div>
				) : (
					<SignupForm getCurrentUser={this.getCurrentUser} />
				)}
			</div>
		);
	}
}
