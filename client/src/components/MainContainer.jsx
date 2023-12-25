import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeliveryImage from "../assest/img/delivery.png";
import Home from "../page/Home";
import Feature from "./Feature";
import FeatureCard from "./FeatureCard";
import Menu from "./Menu";
import Cards from './Cards';

const MainContainer = () => {
  const dispatch = useDispatch()
  const productItem = useSelector((state)=>state.productItem)
  // console.log(productItem)
  return (
   <>
    <div className="w-full ">
      <Home/>
      <Cards/>
      <Feature/>
    </div>
   </>
  );
};

export default MainContainer;
