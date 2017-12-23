import React from "react";

export const ListItem = props =>
  <li 
  	className="list-group-item"
  	{...props}>{props.children}
  </li>;
