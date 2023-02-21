import React from 'react'
import './style.css';
import { AiOutlineClose } from 'react-icons/ai';
const Popup = ({ closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className='popup-close-div' style={{ textAlign: "center" }}><h1 style={{ color: "white" }}>Upgrade to Designfist Pro</h1>
          <AiOutlineClose onClick={closePopup} className="icon" style={{ cursor: "pointer", fontSize: "30px", color: "white" }} /></div>
        <div className='topconatainer mt-4 mb-4'>
          <div className='pop-div1 one'>

            <h3>Basic (per/day)</h3>
            <h2>₹35</h2>
            <p>Access to premium templates
            </p>
            <p>Transliteration
            </p>

            <p>Access to premium fonts

            </p>
            <p>Access to premium Graphics
            </p>
            <button>Book Now</button>

          </div>
          <div className='pop-div1 two'>
            <h3>Premium (per/month)</h3>
            <h2>₹299</h2>
            <p>Access to premium templates
            </p>
            <p>Transliteration

            </p>

            <p>Access to premium fonts

            </p>
            <p>Access to premium Graphics
            </p>
            <button>Book Now</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Popup;
