import React, {Component} from 'react';
// This table should have a json object as data and use it tp generate a table.

class Table extends Component {

    state = {
        data : [
            {
              "name": "Iniesta",
              "age": 33,
              "value": "€29.5M",
              "photo": "https://cdn.sofifa.org/48/18/players/41.png",
              "wage": "€260K",
              "id": 41
            },
            {
              "name": "E. Belözo?lu",
              "age": 36,
              "value": "€4M",
              "photo": "https://cdn.sofifa.org/48/18/players/80.png",
              "wage": "€26K",
              "id": 80
            },
            {
              "name": "G. Buffon",
              "age": 39,
              "value": "€4.5M",
              "photo": "https://cdn.sofifa.org/48/18/players/1179.png",
              "wage": "€110K",
              "id": 1179
            },
            {
              "name": "Casillas",
              "age": 36,
              "value": "€3.5M",
              "photo": "https://cdn.sofifa.org/48/18/players/5479.png",
              "wage": "€10K",
              "id": 5479
            },
            {
              "name": "G. Barry",
              "age": 36,
              "value": "€1.7M",
              "photo": "https://cdn.sofifa.org/48/18/players/6826.png",
              "wage": "€53K",
              "id": 6826
            }
        ]
    }
    
    
    render() {
        return (
            <table>
                <tbody>
                    {this.state.data.array.forEach(object => {
                        
                    })}

                </tbody>
            </table>
        );
    }
}
export default Table;
