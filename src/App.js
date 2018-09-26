import React, {Component} from 'react';
import './App.css';
import './assets/bootstrap/css/bootstrap.min.css'
import Routes from "./_components/Routes/Routes";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Routes/>
            </div>
        );
    }
}

export default App;
