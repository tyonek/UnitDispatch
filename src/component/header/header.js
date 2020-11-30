import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { auth } from '../../firebase/firebase.utils';
import Context from '../../context';
import img from '../../assets/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg';
export const Header = (props) => {
	const [ dropDown, showAccountDropdown ] = useState(false);

	const categoryOfItems = [
		'All',
		'Apparel',
		'Appliances',
		'Automotive',
		'Baby',
		'Beauty',
		'Blended',
		'Books',
		'Classical',
		'DVD',
		'Electronics',
		'Grocery',
		'HealthPersonalCare',
		'HomeGarden',
		'HomeImprovement',
		'Jewelry',
		'KindleStore',
		'Kitchen',
		'Lighting',
		'Marketplace',
		'MP3Downloads',
		'Music',
		'MusicTracks',
		'MusicalInstruments',
		'OfficeProducts',
		'OutdoorLiving',
		'Outlet',
		'Other',
		'PetSupplies',
		'PCHardware',
		'Shoes',
		'Software',
		'SoftwareVideoGames',
		'SportingGoods',
		'Tools',
		'Toys',
		'VHS',
		'Video',
		'VideoGames',
		'Watches'
	];

	return (
		<Context.Consumer>
			{(content) => (
				<header>
					<div className="Links">
						<div>
							<Link to="/">
								<h1>Logo </h1>
							</Link>{' '}
						</div>
						<div className="personlizedAccountInfo">
							{content.currentUser ? <div /> : <Link to="/signup">Signup</Link>}
							{content.currentUser ? <div /> : <Link to="/login">Login</Link>}
							<Link to="/wishlist">Wishlist</Link>
							<Link to="/sell">Sell</Link>
							<div className="accountInfoContainer">
								{!!content.currentUser ? (
									<div className="account" onClick={() => showAccountDropdown(!dropDown)}>
										{content.currentUser ? content.currentUser.photoURL ? (
											<img src={content.currentUser.photoURL} alt="profile img" />
										) : (
											<img src={img} alt="profile img" />
										) : (
											<img src={img} alt="profile img" />
										)}
									</div>
								) : (
									<div />
								)}
								{!!content.currentUser ? <div>{content.currentUser.displayName}</div> : <div> </div>}
								{dropDown ? (
									<div className="accountInfo">
										<ul>
											<Link to="/orders">
												{' '}
												<li>Purchased </li>{' '}
											</Link>
											<Link to="/selling">
												<li>Selling </li>{' '}
											</Link>
											<li onClick={() => auth.signOut()}>Logout </li>
										</ul>
									</div>
								) : (
									<div />
								)}
							</div>
						</div>
					</div>
					<br />

					<div className="content">
						<select>{categoryOfItems.map((category, i) => <option key={i}>{category}</option>)}</select>
						<input placeholder="Search" />
						<input placeholder="Location" />
						<button>Search</button>
						<Link to="/shoppingcart">
							<div className="shoppingCartIconContainer">
								<i className="fas fa-cart-arrow-down" />
								<div>{content.shoppingListCounter}</div>
							</div>
						</Link>
						<Link to="/notification">
							<div className="notificationIconContainer">
								<i className="fas fa-bell" />
								<div>0</div>
							</div>
						</Link>
					</div>
				</header>
			)}
		</Context.Consumer>
	);
};

export default Header;
