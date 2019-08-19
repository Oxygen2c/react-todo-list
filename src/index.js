import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./components/TodoList";

const todoData = [
    {label:'Drink coffee', important:false},
    {label:'Drink tea', important:false},
    {label:'do work', important:true}
]

const App = () => {
    return (
        <TodoList todos={todoData}/>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));