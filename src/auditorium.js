import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auditorium.css';


const Auditorium = () => {
  const [showFaculty, setShowFaculty] = useState(false);
  const navigate = useNavigate();

  const auditoriumData = [
    { no: 1, name: "Main Auditorium", capacity: "1600 to 1800", purpose: "Placement", status: "Booked", user: "Deepika" },
    { no: 2, name: "Vedhanayagam Auditorium", capacity: "800", purpose: "", status: "Not Booked", user: "" }
  ];

  const handleStatusClick = (auditorium) => {
    if (auditorium.status === "Not Booked") {
      navigate('/booking-page'); // Corrected path to the booking page
    } else if (auditorium.status === "Booked") {
      setShowFaculty(prev => ({ ...prev, [auditorium.no]: !prev[auditorium.no] }));
    }
  };
  return (
    <div className="Auditorium">
      <header className="header">
        <h1>BIT Venue Booking Portal</h1>
            <div className="us-icon">D</div>   
      </header>
      <div className="table-container">
        <div className='src'>
      <img src="/images/search image.png" alt="search"/>
      </div>
        <input type="text" placeholder="Search" className="search-input"/>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Current Name</th>
              <th>Capacity</th>
              <th>Purpose</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {auditoriumData.map((auditorium) => (
              <tr key={auditorium.no}>
                <td>{auditorium.no}</td>
                <td>{auditorium.name}</td>
                <td>{auditorium.capacity}</td>
                <td>{auditorium.purpose}</td>
                <td
                  onClick={() => handleStatusClick(auditorium)}
                  style={{ cursor: 'pointer' }}
                >
                  {auditorium.status}
                  {auditorium.status === "Booked" && showFaculty && <span> <br /> ({auditorium.user})</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Auditorium;
