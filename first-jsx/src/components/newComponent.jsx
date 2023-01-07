import React, {Component} from 'react';

class NewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {age : this.props.age}
    }

    setAge = () => {
        this.setState({age : this.state.age += 1})
        console.log(this.state.age)
    }

    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>{this.state.age}</p>
                <p>{this.props.hairColor}</p>
                <button onClick={this.setAge}>Birthday Button</button>
            </div>
        );
    }
}

export default NewComponent;