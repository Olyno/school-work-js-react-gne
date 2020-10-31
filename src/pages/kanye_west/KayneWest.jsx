import React, { useState, useEffect } from 'react';
import './KayneWest.css';

async function getRandomSentence() {
    return fetch('https://api.kanye.rest/')
        .then(res => res.json())
}

export default function KayneWest() {
    const [sentence, setSentence] = useState('');
    useEffect(() => {
        getRandomSentence().then(res => setSentence(res.quote));
    }, [])
    return <h1>"{sentence}" - Kayne West</h1>
}