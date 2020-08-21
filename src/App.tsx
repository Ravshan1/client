import React from 'react';
import logo from './logo.svg';
import './App.css';
import Datasources from './components/Datasources';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './components/reducer/reducer';
import Users from './components/Users';
import UserRoles from './components/UserRoles';

const storage = createStore(reducer)

function App() {
  return (
    <Provider store={storage}>
    <div className="App">
       <Datasources/>
       <Users/>
       {/* <UserRoles/> */}
    </div>
    </Provider>
  );
}

export default App;
