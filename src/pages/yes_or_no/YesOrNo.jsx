import React, { useState, useEffect } from 'react';

import './YesOrNo.css';

async function getRandomAnswer() {
    return fetch('https://yesno.wtf/api')
        .then(res => res.json());
}

export default function YesOrNo() {
    const [answer, setAnswer] = useState({});
    useEffect(() => {
        getRandomAnswer().then(res => setAnswer({ value: res.answer, gif: res.image }));
    }, [])
    return <div>
        <h1>Est-ce que ce gif est bien ?</h1>
        <p>{answer.value}</p>
        <img src={answer.gif} alt="Random gif generated"/>
    </div>
}