import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, rating }) {
    // console.{log}(props)
    // return <h1> I love Potato</h1>;
    return (
        <div>
            <h2> I Like {name} </h2>
            <h4> {rating}/5.0 </h4>
        </div>
    );
}

const foodLike = [
    {
        id: 1,
        name: "Kimchi",
        image: "",
        rating: 5,
    },
    {
        id: 2,
        name: "Samgyeopsal",
        image: "",
        rating: 5,
    },
    {
        id: 3,
        name: "Bibimbap",
        image: "",
        rating: 2,
    },
    {
        id: 4,
        name: "Doncasu",
        image: "",
        rating: 2,
    },
    {
        id: 5,
        name: "Kimbap",
        image: "",
        rating: 3,
    },
];

// function renderFood(dish)
// {
//     return <Food name={dish.name} />;
// }

function App() {
    // console.log(foodLike.map(renderFood));
    return (
        <div>
            {foodLike.map(dish => (
                <Food key={dish.id} name={dish.name} rating={dish.rating}/>
            ))}
            {/* {foodLike.map(renderFood)} */}
            {/* <h1>Hello</h1> */}
            {/* <Food fav="kimchi" somthing={true} papapapa={['hello', 1, 2, 3, 4, true]} /> */}
            {/* <Food fav="kimchi" />
            <Food fav="remon" />
            <Food fav="samgiopsal" />
            <Food fav="kimchi" /> */}
        </div>
    );
}

Food.propType = {
    name:PropTypes.string.isRequired,
    name:PropTypes.number.isRequired,
};
export default App;