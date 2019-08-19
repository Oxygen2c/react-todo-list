import React from 'react';
import ReactDOM from 'react-dom';

const Header = ()=> {
    return <h1>Todo list</h1>
} 
const App = () => {
    return (
        <div className="">
            <Header />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));