import React from "react";

export const NavLi = props =>
	<li className="nav-item">
        <a 
        	className="nav-link" 
        	{...props}>{props.children}
        </a>
   	</li>;