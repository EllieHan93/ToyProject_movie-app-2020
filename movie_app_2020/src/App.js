import React from 'react';

//클래스 형 컴포넌트가 되려면, 리액트가 제공하는 컴포넌트 클래스를 반드시 상속받아야 한다. 
class App extends React.Component {
    state={
        isloading:true,
        Movies:[],
    };
    componentDidMount(){
        setTimeout(()=>{
            this.setState({isloading: false});
        }, 6000);
    }
    render() {
        const {isloading} = this.state;
        return (
        <div>{isloading ? 'loading...' : 'We are ready'}</div>
        )
    }
}
export default App;