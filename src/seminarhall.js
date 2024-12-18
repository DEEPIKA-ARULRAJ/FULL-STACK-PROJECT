import React, { useState } from 'react';
import './seminarhall.css';

const Seminarhall = () => {
  const [showFaculty, setShowFaculty] = useState(Array(11).fill(false));

  const seminarhallData = [
    { no: 1, name: "Texttile Seminar Hall", capacity: "160", purpose: "Simposiyam", status: "Booked", user: "Deepika" },
    { no: 2, name: "Biotech Seminar Hall", capacity: "160", purpose: "", status: "Not Booked", user: "" },
    { no: 3, name: "Mechanical Smart Class Room", capacity: "60", purpose: "", status: "Not Booked", user: "" },
    { no: 4, name: "ECE Seminar Hall", capacity: "160", purpose: "", status: "Not Booked", user: "" },
    { no: 5, name: "Aero Seminar Hall", capacity: "70", purpose: "", status: "Not Booked", user: "" },
    { no: 6, name: "Old Mechanical Seminar Hall", capacity: "160", purpose: "", status: "Not Booked", user: "" },
    { no: 7, name: "SF1 Seminar Hall", capacity: "300", purpose: "", status: "Not Booked", user: "" },
    { no: 8, name: "SF2 Seminar Hall", capacity: "180", purpose: "", status: "Not Booked", user: "" },
    { no: 9, name: "SF3 Seminar Hall", capacity: "180", purpose: "", status: "Not Booked", user: "" },
    { no: 10, name: "EEE Seminar Hall", capacity: "160", purpose: "", status: "Not Booked", user: "" },
    { no: 11, name: "Yoga Seminar Hall", capacity: "NA", purpose: "", status: "Not Booked", user: "" }
  ];

  const handleStatusClick = (index) => {
    setShowFaculty((prev) =>
      prev.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <div className="Seminarhall">
      <header className="semi-header">
        <h1>BIT Venue Booking Portal</h1>
        <div className="semi-us-icon">D</div>   
      </header>
      <div className="semi-table-container">
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
            {seminarhallData.map((seminarhall, index) => (
              <tr key={seminarhall.no}>
                <td>{seminarhall.no}</td>
                <td>{seminarhall.name}</td>
                <td>{seminarhall.capacity}</td>
                <td>{seminarhall.purpose}</td>
                <td 
                  onClick={seminarhall.status === "Booked" ? () => handleStatusClick(index) : null}
                  style={{ cursor: seminarhall.status === "Booked" ? 'pointer' : 'default' }}
                >
                  {seminarhall.status}
                  {seminarhall.status === "Booked" && showFaculty[index] && (
                    <span><br />({seminarhall.user})</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Seminarhall;
