import logo from './logo.svg';
import './App.css';
import Test from './components/Test'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        HOME
          <Routes>
            <Route path="/" exact element={<Test /> } />
            <Route path="/test" exact element={<Test />}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;