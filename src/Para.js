import React, {Component} from 'react';

class Para extends Component{
    constructor(props){
        super(props);
        this.state={
            value:0
        }
    }
    changeState(){
        this.setState({
            value:this.state.value + 1
          });
    }

    componentDidMount(){
        this.timerId = setInterval(
            () => this.changeState(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    
    
    
    render(){
        return (
            <div>
                <p>{this.state.value}</p>
                {/* <p>{this.props.value}</p>
                <p>{this.props.date.toLocaleTimeString()}</p> */}
            </div>        
        );
    }
}
export default Para;