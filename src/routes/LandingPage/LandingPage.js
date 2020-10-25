import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'
export default class LandingPage extends Component {
  state={
    categoryOfItems : [
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
    ]
  }
	render() {
		return (
			<div>
				<header>
        <div className="Links">
					<Link to="/signup">Signup</Link>
					<Link to="/login">Login</Link>
					<Link to="/login">Wishlist</Link>
          </div>
          <br/>

          <div className="content">
            <h1>Logo </h1>
            <select>{this.state.categoryOfItems.map((category) => <option>{category}</option>)}</select>
            <input placeholder="Search"/>
            <input placeholder="Location"/>
            <button>Search</button>
            <i class="fas fa-cart-arrow-down"></i>
            <i class="fas fa-bell"></i>
           </div>
				</header>

        <h2> Welcome </h2>



			</div>
		);
	}
}
