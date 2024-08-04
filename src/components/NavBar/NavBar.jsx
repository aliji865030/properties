import React, { useContext } from 'react';
import "./NavBar.css";
import { StoreContext } from '../../context/StoreContext';

const NavBar = () => {
    const { onSubmitHandler, setPrice, setDate, likePage, setProperty, showLiked } = useContext(StoreContext);
    
    return (
        <div className='nav-bar'>
            <div className="nav-upper">
                <div className="icon">
                    <i className="fa-solid fa-house"></i>
                </div>
                <div className="app-name">
                    <p>Search properties to rent</p>
                </div>
                <div className="nav-btn">
                    <input type="text" placeholder='Search' />
                    <button onClick={onSubmitHandler}>Search</button>
                    <button onClick={likePage}>
                        {showLiked ? "Back to Home" : "Liked"}
                    </button>
                </div>
            </div>
            <div className="nav-lower">
                <div>
                    <label>Enter City</label>
                    <select>
                        <option>All</option>
                    </select>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label>Price</label>
                    <select onChange={(e) => { setPrice(e.target.value) }}>
                        <option value={0}>300-3000</option>
                        <option value={1}>300-1200</option>
                        <option value={2}>1200-2200</option>
                        <option value={3}>2200-3000</option>
                    </select>
                </div>
                <div>
                    <label>Property type</label>
                    <select onChange={(e) => setProperty(e.target.value)}>
                        <option value="All">All</option>
                        <option value="villa">Villa</option>
                        <option value="mansion">Mansion</option>
                        <option value="cottage">Cottage</option>
                        <option value="house">House</option>
                        <option value="lodge">Lodge</option>
                    </select>
                </div>
                <div>
                    <button onClick={onSubmitHandler}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;