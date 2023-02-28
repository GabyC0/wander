import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FaveParks from './components/FaveParks';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { ParkList } from './components/ParkList';
import { IndivPark } from './components/IndivPark';
import { About } from './components/About';
import { Search } from './components/Search';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/Loading';


function App() {
  
  const { user } = useAuth0();
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />
  }
  
  return (
    <div className="App">
      <Router>
        <Nav/>
        {!user ? <span>NOT A USER!!!</span> : <span>Hello user <Link to="my-list">{user}</Link></span>}
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
