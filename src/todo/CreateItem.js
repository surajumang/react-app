import React, {Component} from 'react';

class CreateItem extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <input id="message" type="text"></input>
                <button onClick={() => this.props.addItem("Hello")}>Add Item </button>
            </div>
        )
    }
}

export default CreateItem;