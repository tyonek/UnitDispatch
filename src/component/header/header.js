import React,{useState}  from 'react'
import { Link } from 'react-router-dom';
import './header.css';
export const Header = (props) => {
    const [dropDown,showAccountDropdown]=useState(false);
    const 	categoryOfItems= [
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

    return(
        <header>
        <div className="Links">
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/sell">Sell</Link>
        </div>
        <br />

        <div className="content">
         <Link to="/"><h1>Logo </h1> </Link>   
            <select>{categoryOfItems.map((category) => <option>{category}</option>)}</select>
            <input placeholder="Search" />
            <input placeholder="Location" />
            <button>Search</button>
            <i class="fas fa-cart-arrow-down" />
            <i class="fas fa-bell" />
            <div className="accountInfoContainer">
                <div
                    className="account"
                    onClick={() => showAccountDropdown(!dropDown)}
                >
                    Account
                </div>
                {dropDown ? (
                    <div className="accountInfo">
                        <ul>
                        <Link to="/orders">    <li>Orders </li> </Link>
                           <Link to="/selling"><li>Selling </li> </Link> 
                            <li>Logout </li>
                        </ul>
                    </div>
                ) : (
                    <div />
                )}
            </div>
        </div>
    </header>
    )
}

export default Header