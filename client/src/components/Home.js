import React, { useEffect, useState } from 'react'
import TopNavigation from './TopNavigation'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {

let storeObj = useSelector((store) => {
  return store;
})

console.log(storeObj);

const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [isDropdownOpen, setIsDropdownOpen] = useState(false);

useEffect(() => {

   setLoading(true);

  const fetchData = async () => {

    let reqOptions = {
      method: "GET",
    };

    let JSONData = await fetch("http://localhost:2407/getData",reqOptions);
    let JSOData = await JSONData.json();

    console.log(JSOData);
    setData(JSOData);
  }

  setTimeout(()=>{
    fetchData();
    setLoading(false);
  },2000)


},[])

const handleDropdownToggle = () => {
  setIsDropdownOpen(!isDropdownOpen);
};
  return (
    <div>
        <TopNavigation/>
  

 {loading &&        <div className="loader">
   <div data-glitch="Loading..." className="glitch">Loading...</div>
</div>}

<div className="profile-container">
        <h3 style={{ color: 'white', marginTop: '70px', color: '#e81cff' }}>
          Welcome Back, {storeObj.userDetails.firstName} {storeObj.userDetails.lastName}.
        </h3>
        
      </div>
      <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <img id="profile" src={`http://localhost:2407/${storeObj.userDetails.profile}`} alt="Profile" onClick={handleDropdownToggle}/>
      {isDropdownOpen && (
        <div className='dropdown-content'>
          <Link to='/edit'>updateProfile</Link>
            <Link to='/'>Logout</Link>
        </div>
      )}
      </div>

      

        <div className='container'>
          {data.map((ele,index)=>{
            return (
              <div key={index} className='card'>
                <img src={`http://localhost:2407/${ele.profile}`} id='dp'></img><span style={{position:"relative",bottom:"30px", left:"10px",color:"#e81cff"}}><strong>{ele.firstName}{ele.lastName}</strong></span>
               
                <p className='postcontent'>Age:{ele.age}</p>
                <p className='postcontent'>Interests:{ele.interests}</p>
                <p className='postcontent'>City:{ele.address}</p>
                <div>
                <button class="ui-btn">
  <span>
    Connect 
  </span>
</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
  )
}

export default Home