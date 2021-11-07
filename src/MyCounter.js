import React from 'react';

class MyCounter extends React.Component {

    state = {
        count: 0
    }

    componentDidMount(){
        document.title = `You have been clicked ${this.state.count} times`;
    }

    componentDidUpdate(){
        document.title = `You have been clicked ${this.state.count} times`;     
    }

    incrementCount = (event) => {
        event.preventDefault();
        /*this.setState({
            count: this.state.count + 1
        })*/
        this.setState(previousState =>({
            count: previousState.count + 1
        }))
    }
    render(){
        return (
            <button
            onClick={this.incrementCount}
            >Clicke me {this.state.count}</button>
        )
    }
}

export default MyCounter;