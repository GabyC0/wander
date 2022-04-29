import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FaveParks from './components/FaveParks';
import { Home } from './components/Home'
import { Nav } from './components/Nav'
import { ParkList } from './components/ParkList'
import { IndivPark } from './components/IndivPark'
import { About } from './components/About'
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>}>
            <Route
            path="*"
            element={
              <main style={{ padding: "1rem"}}>
                <p>There's nothing here!!!??</p>
              </main>
            }
            />
          </Route>

          <Route exact path='/park-list' element={<ParkList/>}/> 
            <Route path="/park-list/:parkCode" element={<IndivPark/>}/>
          <Route exact path='/my-list' element={<FaveParks/>}/>
          {/* need a :userId page to know what user list to pull */}
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
      {/* <Nav/> */}
      Hello from Front!
      <Login/>
      {/* <Home/>
      <FaveParks /> */}
    </div>
  );
}

export default App;
