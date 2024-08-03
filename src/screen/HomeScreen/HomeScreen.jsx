import React, { useContext } from 'react'
import "./HomeScreen.css"
import { StoreContext } from '../../context/StoreContext'
import NavBar from '../../components/NavBar/NavBar'
import ShowData from '../../components/ShowData/ShowData'

const HomeScreen = () => {

    const {data}=useContext(StoreContext)
    // console.log(data);
  return (
    <div>
      <NavBar/>
      <ShowData/>
    </div>
  )
}

export default HomeScreen
