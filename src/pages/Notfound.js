import React, { Component } from 'react';
class Notfound extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="notfound">
                <h1 className="display-1">Page Not Found</h1>
            </div>
         );
    }
}
 
export default Notfound;