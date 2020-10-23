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
			<select defaultValue>
                <option value="Select">Select Condition... </option>
				<option value="Bad">Bad</option>
				<option value="Good">Good</option>
				<option value="Excellent">Excellent</option>
			</select>
			<select>{categoryOfItems.map((category) => <option>{category}</option>)}</select>
			<textarea placeholder="Description" />
			<input placeholder="Price" />
            <input type="file" name="datafile" size="40"/>
            <button type="submit">Done</button>
		</form>
	);
};

export default sellerForm;
