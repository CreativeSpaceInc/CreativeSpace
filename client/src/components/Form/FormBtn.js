import React from "react";

export const FormBtn = props =>
  <button  
  	className="btn btn-block my-4"
  	type="submit"
  	{...props}>{props.children}
  </button>;