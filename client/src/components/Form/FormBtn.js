import React from "react";

export const FormBtn = props =>
  <button  
  	className="btn btn-block"
  	type="submit"
  	{...props}>{props.children}
  </button>;