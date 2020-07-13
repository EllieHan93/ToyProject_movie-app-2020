import React from 'react';

//클래스 형 컴포넌트가 되려면, 리액트가 제공하는 컴포넌트 클래스를 반드시 상속받아야 한다. 
class App extends React.Component{
    //클래스형 컴포넌트에서는JSX 반환하기 위해서 render 함수를 사용한다.
    render(){
        return <h1>I'm a class Component</h1>
    }
}
export default App;