import React, { useContext } from 'react'
import "./NavBar.css"
import { StoreContext } from '../../context/StoreContext'

const NavBar = () => {
    const {onSubmitHandler,setPrice,setDate,likePage,setProperty}=useContext(StoreContext)
    
  return (
    <div className='nav-bar'>
        <div className="nav-upper">
            <div className="icon">
            <i class="fa-solid fa-house"></i>
            </div>
            <div className="app-name">
                <p>Search properties to rent</p>
            </div>
            <div className="nav-btn">
                <input type="text" placeholder='Search' />
                <button>Search</button>
                <button onClick={likePage}>Liked</button>
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
                <input type="date" onChange={(e) => setDate(e.target.value)}  />
            </div>
            <div>
                <label>Price</label>
                <select onChange={(e)=>{setPrice(e.target.value)}}>
                    <option value={0}>300-3000</option>
                    <option value={1}>300-1200</option>
                    <option value={2}>1200-2200</option>
                    <option value={3}>2200-3000</option>

                </select>
            </div>
            <div>
                <label>Property type</label>
                <select onChange={(e)=>setProperty(e.target.value)}>
                    <option value="All">All</option>
                    <option value="villa">villa</option>
                    <option value="mansion">mansion</option>
                    <option value="cottage">cottage</option>
                    <option value="house">house</option>
                    <option value="lodge">lodge</option>
                </select>
            </div>
            <div>
                <button onClick={onSubmitHandler}>Submit</button>
            </div>
        </div>
      
    </div>
  )
}

export default NavBar
