import React, { createContext, useState } from "react";
import { HouseData } from "../components/Data/HouseData.jsx";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [data, setData] = useState(HouseData);
  const [price, setPrice] = useState();
  const [date, setDate] = useState("");
  const [property, setProperty] = useState("");
  const [showLiked, setShowLiked] = useState(false); 

  const onSubmitHandler = () => {
    let filteredData = HouseData;

    if (price) {
      switch (price) {
        case "1":
          filteredData = filteredData.filter(
            (house) => house.amount_per_day >= 300 && house.amount_per_day <= 1200
          );
          break;
        case "2":
          filteredData = filteredData.filter(
            (house) => house.amount_per_day >= 1200 && house.amount_per_day <= 2200
          );
          break;
        case "3":
          filteredData = filteredData.filter(
            (house) => house.amount_per_day >= 2200 && house.amount_per_day <= 3000
          );
          break;
        default:
          filteredData = HouseData;
          break;
      }
    }

    if (date) {
      filteredData = filteredData.filter(
        (house) => new Date(house.available_from) <= new Date(date)
      );
    }

    if (property) {
      switch (property) {
        case "All":
          filteredData = filteredData;
          break;
        case "villa":
          filteredData = filteredData.filter((house) => house.type === "villa");
          break;
        case "mansion":
          filteredData = filteredData.filter((house) => house.type === "mansion");
          break;
        case "cottage":
          filteredData = filteredData.filter((house) => house.type === "cottage");
          break;
        case "house":
          filteredData = filteredData.filter((house) => house.type === "house");
          break;
        case "lodge":
          filteredData = filteredData.filter((house) => house.type === "lodge");
          break;
        default:
          filteredData = HouseData;
      }
    }

    setData(filteredData);
  };

  const likedHandler = (index) => {
    const updatedData = [...data];
    updatedData[index].liked = !updatedData[index].liked;
    setData(updatedData);
  };

  const likePage = () => {
    setShowLiked(!showLiked);
  };

  const contextValue = {
    data: showLiked ? data.filter((item) => item.liked) : data, 
    onSubmitHandler,
    setPrice,
    setDate,
    likedHandler,
    likePage,
    setProperty,
    showLiked 
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;