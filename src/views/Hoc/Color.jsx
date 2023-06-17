import React from "react";
function getRandomColor() {
    var letters = '01234566789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const Color = (WrappedComponent) => {
    const coloreRandom = getRandomColor();
    return (props) => (
        <>
            <div style={{ color: coloreRandom }}>
                < WrappedComponent {...props} />
            </div>
        </>
    )
}
export default Color;