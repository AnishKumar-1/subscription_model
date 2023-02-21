import React, { useEffect, useState } from 'react'
import './style.css';
import img from './pricing.png';
import Popup from '../Popup';
import axios from 'axios';
function Home() {
    const [showPopup, setShowPopup] = useState(true);
    const [getdata,setgetdata]=useState("");
   
    // const openPopup = () => {
    //     setShowPopup(true);


        // if(getdata==="yes" || getdata==="YES"){
      
        // }
        // else{
        //     alert("you are not paid yet");
        // }
    // };  
    // useEffect(()=>{
    //   axios.get("http://localhost:80/backend/index.php").then(result=>{
    //     setgetdata(result.data);
    //   }).catch(err=>{
    //     console.log(err);
    //   })
    
    // },[])
 
    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="home-top-container">
            <div className='home-container container mt-5'>
                <div className='text-button-container'>
                    <p>We've built simpler social media tools for busy people.<br /> Enjoy our free plan as you get started,<br /> or trial our full toolkit priced to make marketing your</p>
                    <button className='btn btn-primary' style={{ width: "140px" }}>try now</button>
                </div>
                <div className='img-container'>
                    <p><img src={img}></img></p>
                </div>
            </div>

            <div className='list-container'>
                <ul>
                    <li>free templates</li>{showPopup && <Popup closePopup={closePopup} />}
                    <li >basic $10</li>
                    <li>premium $20</li>
                    <li>gold $100</li>
                </ul>

            </div>

        </div>
    )
}

export default Home
