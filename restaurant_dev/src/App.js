import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantList from "./components/restaurant_listview/RestaurantList";

function App() {
    return (
        <Router>
            <div className="App">
                HOME
                <Routes>
                    <Route path="/" exact element={<Test />} />
                    <Route
                        path="/restaurants"
                        exact
                        element={<RestaurantList />}
                    ></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
