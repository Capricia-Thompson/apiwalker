import React, { useState } from 'react';

const People = (props) => {
    const { name, gender, height, hair_color, eye_color } = props.selected
    return (
        <div>
            <h3>Information about selected person:</h3>
            <h5>Name: {name}</h5>
            <h5>Gender: {gender}</h5>
            <h5>Height: {height}</h5>
            <h5>Hair Color: {hair_color}</h5>
            <h5>Eye Color: {eye_color}</h5>
        </div>
    )
};

export default People;