import React from 'react';

//클래스 형 컴포넌트가 되려면, 리액트가 제공하는 컴포넌트 클래스를 반드시 상속받아야 한다. 
class App extends React.Component {

    //state 는 동적데이터를 사용할때 반드시 도입해야할 요소, 
    state = {
        count: 0,
    };

    ///생명주기.
    constructor(props){
        super(props);
        console.log('hello');
    }

    componentDidMount(){
        console.log('component redered');
    }

    componentDidUpdate(){
        console.log('I just update');
    }

    componentWillUnmount(){
        console.log('Goodbye');
    }

    add = () => {
        // console.log('add');
        // this.state.count = 1;
        // this.setState({count: this.state.count + 1});
        this.setState(current => ({
            count: this.state.count + 1,
        }))
    };
    Minus = () => {
        // console.log('Minus');
        // this.state.count = -1;
        // this.setState({count: this.state.count - 1});
        this.setState(current => ({
            count: this.state.count - 1,
        }))


    };
    //클래스형 컴포넌트에서는JSX 반환하기 위해서 render 함수를 사용한다.
    render() {
        // console.log('render');
        console.log("I'm rendering");

        return (
            <div>
                //state, 객체 형태의 데이터를 사용하려면 반드시 클래스형 컴포넌트 안에서 소문자를 이용하여 사용
                <h1>The number is : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.Minus}>Minus</button>
            </div>
        )
    }
}
export default App;