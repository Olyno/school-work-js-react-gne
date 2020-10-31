import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

const degrees = {
    lower: { min: 0, max: 10 },
    middle: { min: 10, max: 20 },
    lower: { min: 20, max: 40 },
}

function getDegreeColor(degree) {
    for (const degreeValue in degrees) {
        const values = degrees[degreeValue];
        if (degree > values.min && degree < values.max) {
            return degreeValue;
        }
    }
}

async function getParisDegree() {
    return fetch('https://www.metaweather.com/api/location/615702/')
        .then(res => res.json());
}

export default function Sidebar() {
    return <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/yesorno">Yes or No</Link></li>
            <li><Link to="/kaynewest">Kayne West quote</Link></li>
        </ul>
    </nav>
}