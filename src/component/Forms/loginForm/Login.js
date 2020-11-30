import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../../firebase/firebase.utils';
import Context from '../../../context';
export default function LoginForm(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	function validateForm() {
		return email.length > 0 && password.length > 7;
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const { email, password } = e.target;
		try {
			await auth.signInWithEmailAndPassword(email.value, password.value);
		} catch (error) {
			console.log(error);
		}
	}
	if (props.currentUser) {
		props.history.push('/');
	}

	return (
		<Context.Consumer>
			{(content) => (
				<form onSubmit={handleSubmit}>
					<div>
						<label>Email</label>
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div>
						<label>Password</label>
						<input
							type="password"
							name="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div>
						<button disabled={!validateForm()} type="submit">
							Login
						</button>

						<button type="submit" onClick={signInWithGoogle}>
							Google
						</button>
					</div>
				</form>
			)}
		</Context.Consumer>
	);
}
