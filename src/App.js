import React, {Component} from "react";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import "./assets/bootstrap/css/bootstrap.min.css";
import Header from "./_components/Home/Header";
import Routes from "./_components/Routes/Routes";
import RowCategory from "./_components/Home/RowCategory";
import Footer from "./_components/Home/Footer";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <body className="Site">
                    <Header/>
                    <main className="Site-content">
                        <RowCategory/>
                        <Routes/>
                    </main>
                    <Footer/>
                    </body>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
