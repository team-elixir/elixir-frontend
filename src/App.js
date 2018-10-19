import React, {Component} from "react";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import "./assets/bootstrap/css/bootstrap.min.css";
import Header from "./_components/Home/Header";
import Routes from "./_components/Routes/Routes";
import RowCategory from "./_components/Home/RowCategory";
import Footer from "./_components/Home/Footer";
import NewRow from "./_components/Home/NewRow";
import NewRowcategory from "./_components/Home/NewRowcategory";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <body className="Site">
                    <Header/>
                    <main className="Site-content">
                        {/*<RowCategory/>*/}
                        {/*<NewRow/>*/}
                        <NewRowcategory/>
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
