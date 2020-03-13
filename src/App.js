//////////////
// Imports //
////////////
// Make available 'React Component' from react //
import React, { Component } from 'react';
// Make available 'Navbar and NavbarBrand' from reactstrap //
import { Navbar, NavbarBrand } from 'reactstrap';
// Make available 'App.css' to the file //
import './App.css';

/* Create a React component and render
   it to the screen */
 
   
class App extends Component { // App is a subclass of Component
  render() { // render function
    return ( // render() returns a div named 'App'
      <div className="App"> {/* 'className' must be used */}
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App; // export a particular module or a named parameter or a combination