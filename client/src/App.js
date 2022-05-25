import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FaveParks from './components/FaveParks';
import { Home } from './components/Home'
import { Nav } from './components/Nav'
import { ParkList } from './components/ParkList'
import { IndivPark } from './components/IndivPark'
import { About } from './components/About'
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
          <Route path='/about' element={<About/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
