import React, {Component} from 'react';

class Welcome extends Component{
    callFromClass(a){
        alert(a);
    }
    render(){
        return <div>
            <button onClick={this.callFromClass.bind(this,"Hello inside from Class Components Parameter")} >Click from Button</button>
            <p> Welcome to {this.props.name} :) </p>
        </div>
    }
}

export default Welcome;