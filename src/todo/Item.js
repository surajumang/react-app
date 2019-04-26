import React, { Component } from "react";

class Item extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <label key={this.props.id} style={{color:"blue"}}> </label>
                <input id="status" type="checkbox" onClick={this.props.markComplete(this.props.id)} />
            </div>
        );
    }
}

export default Item;