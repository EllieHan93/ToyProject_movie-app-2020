import React from 'react';
// import Home from './routes/Home';
// import axios from 'axios';
// import Movie from './components/Movie';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';


function App() {
    return (
        <HashRouter>
            <Navigation/>
            <Route path="/" exact={true} component={Home}>
            </Route>
            <Route path="/about" component={About}>
            </Route>
            <Route path="/movie-detail" component={Detail}>
            </Route>
        </HashRouter>
    );
    // return <Home/>;
}

//클래스 형 컴포넌트가 되려면, 리액트가 제공하는 컴포넌트 클래스를 반드시 상속받아야 한다. 
// class App extends React.Component {
//     
// }
export default App;