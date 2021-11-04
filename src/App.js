import React, {Component} from 'react';
import axios from 'axios';
import Loading from './Loading';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      users: [],
      loading: false
    };
    //bind
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  getUsers(){
    this.setState({
      loading: true
    });
    axios('https://api.randomuser.me/?nat=US&results=5')
          .then(response => this.setState(
            {
              users: [...response.data.results, ...response.data.results],
              loading: false
            })
            );
  }

  componentWillMount(){
    this.getUsers();  
  }

  handleLoadMore(e){
    e.preventDefault();
    this.getUsers();
  }

  render(){
    const {loading, users} = this.state;
    return (
        <div className="App">
           <form onSubmit={this.handleLoadMore}>
            <input type="submit" value="Load Users"/>
          </form>
          <hr/>
          {!loading ?(
          users.map((user,i) =><div key={i} ><h3>{user.name.first} {user.name.last}</h3> <p>{user.cell}</p>
          <hr/>
          </div>)
          ): (<Loading message="Users are "/>)}
         
        </div>
      );
  }
}




/*function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <p>
          Hello, Reactjs...
        </p>
        
      </header>
    </div>
  );
}*/

export default App;
