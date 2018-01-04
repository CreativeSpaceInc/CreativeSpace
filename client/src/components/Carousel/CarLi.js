import React from "react";

export const CarLi = props =>
	<li 
		data-target="#carouselExampleIndicators"
		{...props}>{props.children}
	</li>;