import React, {Component} from 'react';

class TableRow extends Component {
    // Represents a row of a table.
    // Should have a state such that any change there will trigger an update only to that row.
    state = {
        row = {

        }
    }

    putData(object){
        return (<td>{object}</td>)
    }

    render(){
        var rowObj = this.props.object;
        return (<tr key={rowObj.id}>
                {
                    rowObj.map(function(obj){
                        re
                    })
                }
            </tr>);
    }
}