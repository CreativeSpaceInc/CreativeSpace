import React from "react";

export const CarImg = props =>
    <img 
        className="d-block img-fluid" 
        {...props}>{props.children}
    </img>;