"use client";

import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <p className='text-4xl'>{value < 10 ? '0' + value : value}</p>
            <span className='text-sm font-thin'>{type}</span>
        </div>
    );
};

export default DateTimeDisplay;