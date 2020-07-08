import React from 'react';

function Food(props) {
    // console.log(props)
    // return <h1> I love Potato</h1>;
    return <h1> I love {props.fav}</h1>;
}
function App() {
    return (
        <div>
            <h1>Hello</h1>
            {/* <Food fav="kimchi" somthing={true} papapapa={['hello', 1, 2, 3, 4, true]} /> */}
            <Food fav="kimchi" />
            <Food fav="remon" />
            <Food fav="samgiopsal" />
            <Food fav="chukmi" />
        </div>
    );
}

export default App;