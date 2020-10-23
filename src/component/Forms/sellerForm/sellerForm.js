import React from 'react';

export const sellerForm = (props) => {
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
		<form>
			<input placeholder="Brand" />
			<select>
				<option>Bad</option>
				<option>Good</option>
				<option>Excellent</option>
			</select>
			<select>{categoryOfItems.map((category) => <option>{category}</option>)}</select>
			<textarea placeholder="Description" />
			<input placeholder="Price" />

            <button type="submit">Done</button>
		</form>
	);
};

export default sellerForm;
