import React from "react";

export const CarA = props =>
	<a 
		href="#carouselExampleIndicators"
		role="button"
		{...props}>{props.children}
	</a>;