import React from "react";

function Horloge(props) {
    return (
        <p>Il est : {props.time.getHours()}:{props.time.getMinutes()}:{props.time.getSeconds()}</p>
    );
}

export default Horloge;
