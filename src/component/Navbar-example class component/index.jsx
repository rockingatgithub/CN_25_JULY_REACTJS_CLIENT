import React from "react";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            showHeading: false,
            names: ['Angular', 'Reactjs', 'Vuejs', 'Nextjs', 'EJS'],
            course: ''
        }
    }


    // this.setState

    showHeadingHandler = () => {

        this.setState({ showHeading: !this.state.showHeading })

    }

    incrementHandler = () => {

        this.setState((prevState, prevProps) => ({ counter: prevState.counter + 1 }) )
        this.setState((prevState, prevProps) => ({ counter: prevState.counter + 1 }))
        this.setState((prevState, prevProps) => ({ counter: prevState.counter + 1 }))

    }

    decrementHandler = () => {

        this.setState({ counter: this.state.counter - 1 }, () => console.log(this.state))
        

    }

    courseHandler = (event) => {
        this.setState({course: event.target.value})
    }

    addCourseHandler = () => {
        this.setState((prevState) => ({ names: [ ...prevState.names, this.state.course ] }))
    }


    render() {

        return <div>

            {/* <button onClick={this.incrementHandler} > + </button> */}
            {/* {this.state.counter} */}
            {/* <button onClick={this.decrementHandler}> - </button> */}

             <h2> A class component! </h2>
            <button onClick={this.showHeadingHandler} > Show/Hide List </button>

            <input type="text" value={this.state.course} onChange={this.courseHandler} />
            <button onClick={this.addCourseHandler} > Add Name </button>
            {this.state.showHeading && <NameList names={this.state.names} />}



        </div>

    }


}

export default Login


class NameList extends React.Component {

    constructor(props) {
        super(props);
        
    }

    // Mounting of the React component
    componentDidMount = () => {
        console.log("Component Mounted!")
    }


    // Updating of react component
    componentDidUpdate = () => {
        console.log("Component Updated!")
    }

    // Unmounting of the React component
    componentWillUnmount = () => {
        console.log("Component Unmounted!")
    }

    

    render () {
        
        return (<ul>{this.props.names.map(name => <li>{name}</li>)}</ul>)

    }
    

}