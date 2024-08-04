import React, { useContext } from 'react';
import "./ShowData.css";
import { StoreContext } from '../../context/StoreContext';
import { FaHeart } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { GoDiamond } from "react-icons/go";

const ShowData = () => {
    const { data, likedHandler, showLiked } = useContext(StoreContext);

    return (
        <div className='show-data'>
            {data.length === 0 && showLiked ? ( 
                <div className="no-data-message">
                    <p>No liked properties to show.</p>
                </div>
            ) : (
                data.map((item, index) => {
                    return (
                        <div className='card' key={index}>
                            <div className="image">
                                <img src={item.image_link} alt="" />
                            </div>
                            <div className="content">
                                <div className="price">
                                    <span>&#8377;{item.amount_per_day}/day</span>
                                    <span onClick={() => likedHandler(index)} style={{ color: item.liked ? "red" : "black" }}>
                                        <FaHeart />
                                    </span>
                                </div>
                                <div className="name">
                                    <p>{item.name_of_property}</p>
                                    <h4>{item.address}</h4>
                                </div>
                                <div className="property">
                                    <p><FaBed /> {item.no_of_beds} beds</p>
                                    <p><FaBath /> {item.no_of_bathrooms} bath</p>
                                    <p><GoDiamond /> {item.size_of_room}</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default ShowData;