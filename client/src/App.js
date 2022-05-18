import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FaveParks from './components/FaveParks';
import { Home } from './components/Home'
import { Nav } from './components/Nav'
import { ParkList } from './components/ParkList'
import { IndivPark } from './components/IndivPark'
import { About } from './components/About'
import { Login } from './components/Login'
import { Search } from './components/Search'

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
          <Route path='/my-list' element={<FaveParks/>}/>
          {/* need a :userId page to know what user list to pull */}
          <Route path='/about' element={<About/>}/>
          {/* <Route path='/log-in' element={<Login/>}/> */}
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Router>
      {/* <Nav/> */}
      {/* Hello from Front! */}
      {/* <Login/> */}

    </div>
  );
}

export default App;
