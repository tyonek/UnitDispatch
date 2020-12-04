import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import img from '../../assets/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg';
export const Header = ({ currentUser,shoppingCart,wishList }) => {
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
		<header>
			<div className="Links">
				<div>
					<Link to="/">
						<h1>Logo </h1>
					</Link>{' '}
				</div>
				<div className="personlizedAccountInfo">
					{currentUser ? <div /> : <Link to="/signup">Signup</Link>}
					{currentUser ? <div /> : <Link to="/login">Login</Link>}
					<Link to="/wishlist">Wishlist</Link>
					<Link to="/sell">Sell</Link>

					{currentUser ? (
						<div className="accountInfoContainer">
							<div className="account" onClick={() => showAccountDropdown(!dropDown)}>
								{currentUser['currentUser'].photoURL ? (
									<img src={currentUser['currentUser'].photoURL} alt="profile img" />
								) : (
									<img src={img} alt="profile img" />
								)}
							</div>

							<div />
							{currentUser ? <div>{currentUser['currentUser'].displayName}</div> : <div> </div>}
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
					) : (
						<div />
					)}
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
						<div>{shoppingCart.length}</div>
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
	);
};

const mapStateProps = ({user}) => ({
	currentUser: user.currentUser,
	shoppingCart: user.shoppingCart,
	wishList:user.wishList
});
export default connect(mapStateProps)(Header);
