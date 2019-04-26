import React, {Component} from 'react';
import Items from './Items';
import CreateItem from './CreateItem';

window.id = 0;
class Todo extends Component {
    constructor(props){
        super(props);
        this.state ={
            allTodos : []
        }
    }

    addItem(message){
        const newItem = {text:message, id:window.id++}
        this.state.allTodos.push(newItem);
        this.setState({allTodos: this.state.allTodos})
    }

    markComplete(id){
        const remainder = this.state.allTodos.filter(
            (item) => {if(item.id !== id) return item;}
        )
        this.setState({allTodos : remainder});
    }

    //<Item event={this.eventHabler.bind(this)}>
    render(){
        return (
            <div>
                <h1>ToDO application</h1>
                <CreateItem addItem={this.addItem.bind(this)}/>
                <Items items={this.state.allTodos} markComplete={this.markComplete.bind(this)}/>
            </div>
        );
    }
}

export default Todo;