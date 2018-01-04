import React from "react";

const DisplayMessage = props =>
<div>
	<h1 
		id="display-message"
      	type="text"
      	{...props}>
    </h1>
</div>;

export default DisplayMessage;