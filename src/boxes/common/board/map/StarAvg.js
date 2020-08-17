import React from 'react';

export const StarAvg = () => {
    return (
        <>
        <input
            id="rating5"
            type="radio"
            name="rating"
            value="5"
        />
        <label for="rating5">5</label>
        <input
            id="rating4"
            type="radio"
            name="rating"
            value="4"
        />
        <label for="rating4">4</label>
        <input
            id="rating3"
            type="radio"
            name="rating"
            value="3"
        />
        <label for="rating3">3</label>
        <input
            id="rating2"
            type="radio"
            name="rating"
            value="2"
        />
        <label for="rating2">2</label>
        <input
            id="rating1"
            type="radio"
            name="rating"
            value="1"
        />
        <label for="rating1">1</label>
        </>
    );
};

export default StarAvg;