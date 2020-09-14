import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar';
import Users from './components/Layout/Users';
import Search from './components/Layout/Search';
import axios from 'axios'
import  './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  // async componentDidMount() {
  //   this.setState({ loading: true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({ users: res.data, loading: false});

  // get Github users
  searchUsers = async text => {
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false});
  };

  //Clear Users From State
  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    return (
      <div>
       <Navbar />
       < Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false}/>
       <div className='container '>
        <Users loading={this.state.loading} users={this.state.users}/>
      </div>
       
     </div>
    );
  }
  
}
   

export default App;
