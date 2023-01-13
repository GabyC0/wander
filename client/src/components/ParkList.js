import React from 'react'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import {Link, Outlet } from 'react-router-dom'
import {Search} from './Search'

export const ParkList = () => {
  const [parks, setParks] = useState([]);

  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset((selectedPage + 1) * perPage);
  }

  useEffect(() => {
    fetch("/api/parksInfo")
      .then((response) => response.json())
      .then(parks => {
        setPageCount(Math.ceil(parks.data.length/perPage))
        setParks(parks.data.slice(offset, offset + perPage));
    })
  }, [offset,perPage]);

  return (
    <div className="parkList" style={{marginBottom: "5rem"}}>
      <Search/>
      <div className="parkListBack">
      <h1 className="listH2">PARK LIST</h1>
      <hr className="line"></hr>
      <br></br>
          <div className="listText">
            {parks.map(park =>
              <Link className="listLink" to={`/park-list/${park.parkCode}`}>
                <ul className='parkList'>
                    <li className="singlePark"
                    key={park.parkCode}> 
                    <h4><b>{park.fullName}</b></h4>
                    </li> 
                    <span>Park Code: {park.parkCode}</span>  <span>State: {park.states}</span>
                    
                    <hr/>
                    </ul>
              </Link>
            )}
          </div>
        <Outlet/>
        </div>
        <div className="pageDiv">
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
    </div>
  )
}
