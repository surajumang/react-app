import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todo from './todo/Todo';


  
function tick(){
    ReactDOM.render(<Todo/>, document.getElementById('root'));
}
tick();


