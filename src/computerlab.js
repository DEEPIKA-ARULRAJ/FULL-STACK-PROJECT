import React, { useState } from 'react';
import './computerlab.css';

const Computerlab = () => {
  const [showFaculty, setShowFaculty] = useState(null);

  const computerlabData = [
    { no: 1, blockName: 'AIDS', currentName: 'AIDS LAB 1', capacity: 30, status: 'NOT BOOKED', user: "", purpose: '' },
    { no: 2, blockName: 'AIDS', currentName: 'AIDS LAB 2', capacity: 60, status: 'NOT BOOKED', user: "", purpose: '' },
    { no: 3, blockName: 'AIDS', currentName: 'AIDS LAB 3', capacity: 60, status: 'BOOKED', user: "Deepika", purpose: 'Task:1234, Academic lab' },
    { no: 4, blockName: 'BME', currentName: 'BME COMPUTER CENTER', capacity: 30, status: 'NOT BOOKED', user: "", purpose: '' },
    { no: 5, blockName: 'CIVIL', currentName: 'CIVIL COMPUTER AIDED DESIGN LABORATORY', capacity: 34, status: 'NOT BOOKED', user: "", purpose: '' },
    { no: 6, blockName: 'CSBS', currentName: 'CSBS NETWORK LABORATORY', capacity: 64, status: 'NOT BOOKED', user: "", purpose: '' },
    { no: 7, blockName: 'CSE', currentName: 'CSE LAB 1', capacity: 72, status: 'NOT BOOKED', user: "", purpose: '' },
    { no: 8, blockName: 'CSE', currentName: 'CSE LAB 2', capacity: 60, status: 'NOT BOOKED', user: "", purpose: '' },
    { no: 9, blockName: 'CT', currentName: 'CT LAB', capacity: 90, status: 'BOOKED', user: "Deepika", purpose: 'Task:abcd, Academic lab' },
    { no: 10, blockName: 'ECE', currentName: 'NETWORK LABORATORY', capacity: 53, status: 'NOT BOOKED', user: "", purpose: '' },
    { no: 11, blockName: 'ECE', currentName: 'VLSI DESIGN LABORATORY', capacity: 40, status: 'NOT BOOKED', user: "", purpose: '' }
  ];

  const handleStatusClick = (index) => {
    setShowFaculty((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="Computerlab">
      <header className="com-header">
        <h1>BIT Venue Booking Portal</h1>
        <div className="com-us-icon">D</div>
      </header>
      <div className="com-table-container">
        <div className='src'>
          <img src="/images/search image.png" alt="search"/>
        </div>
        <input type="text" placeholder="Search" className="search-input"/>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Block Name</th>
              <th>Current Name</th>
              <th>Capacity</th>
              <th>Purpose</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {computerlabData.map((computerlab, index) => (
              <tr key={computerlab.no}>
                <td>{computerlab.no}</td>
                <td>{computerlab.blockName}</td>
                <td>{computerlab.currentName}</td>
                <td>{computerlab.capacity}</td>
                <td>{computerlab.purpose}</td>
                <td onClick={computerlab.status === "BOOKED" ? () => handleStatusClick(index) : null} style={{ cursor: computerlab.status === "BOOKED" ? 'pointer' : 'default' }}>
                  {computerlab.status}
                  {computerlab.status === "BOOKED" && showFaculty === index && <span> <br /> ({computerlab.user})</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Computerlab;
