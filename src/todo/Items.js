import React, {Component} from 'react';
import Item from './Item';
class Items extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        const markComplete = this.props.markComplete;
        const items = this.props.items.map(
            (item) => (<Item text={item.text} id ={item.id} markComplete={markComplete}/>)
        );
        return (
            <div> 
                {items}
            </div>
        );
    }
}

export default Items;