import React from "react";

export const CarItem = props =>
	<div 
		className="carousel-item"
		{...props}>{props.children}
	</div>;