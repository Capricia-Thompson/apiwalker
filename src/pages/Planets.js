import React, { useState } from 'react';

const Planets = (props) => {
    const { name, climate, terrain, gravity } = props.selected

    return (
        <div>
            <h3>Information about selected planet:</h3>
            <h5>Name: {name}</h5>
            <h5>Climate: {climate}</h5>
            <h5>Terrain: {terrain}</h5>
            <h5>Gravity: {gravity}</h5>
        </div>
    )
};

export default Planets;