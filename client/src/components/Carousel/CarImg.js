import React from "react";

export const CarImg = props =>
   // eslint-disable-next-line
    <img
        className="d-block img-fluid"
        {...props}>{props.children}
    </img>;
