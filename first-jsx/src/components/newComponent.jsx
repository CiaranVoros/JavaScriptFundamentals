import React, {Component} from 'react';

class NewComponent extends Component {
    render() {
        // const {firstName, lastName, age, hairColor} = this.props
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>{this.props.age}</p>
                <p>{this.props.hairColor}</p>
            </div>
        );
    }
}

export default NewComponent;