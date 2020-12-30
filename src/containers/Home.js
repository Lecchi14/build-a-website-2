import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";
import City from "../components/City";

const weatherKey = `TODO`; // Your API Key here

function Home() {
  return (
  <div className="flex flex-col h-screen bg-green-200"> 
      <City cityName="Yokohama" temp="20°C" color="bg-pink-500"/>
      <City cityName="Shibuya" temp="22°C" color="bg-yellow-500"/>
      <City cityName="Tokyo" temp="18°C" color="bg-blue-500"/>
    </div>
  );
}

export default Home;
