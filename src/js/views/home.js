import React from "react";
import "../../styles/home.css";
import People from "../component/People";
import Planets from "../component/Planets";
import Vehicles from "../component/Vehicles";

export const Home = () => (
	<div>
		<People />	
		<Planets />
		<Vehicles />
	</div>
);
