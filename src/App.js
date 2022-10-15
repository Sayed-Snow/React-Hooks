import React, { Component } from 'react';
import CardList from "./CardList";
import SearchBox from "./SearchBox";


class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
    }
}

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => {
        return response.json();
     })
     .then(users => {
        this.setState({robots: users})
     })
    
}

onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })

}

render(){
    const {robots,searchfield} = this.state;
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
    if(this.state.robots === 0){
        <h1>Loading</h1>
    }
    else{
        return(
            <div className="tc">
                <h1>State SearchBox</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots ={filteredRobots}/>
            </div>
        );
    }
    }

} 


export default App;