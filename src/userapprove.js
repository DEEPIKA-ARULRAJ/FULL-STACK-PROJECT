import React from 'react';

import './userapprove.css';

function Userapprove() {
    const bookings = [
        {
            facultyId: 'EEE1234',
            facultyName: 'Nivetha',
            venue: 'AIDS LAB 1',
            purpose: 'Lab Cycle Test',
            fromDate: '03-06-2024',
            toDate: '03-06-2024',
            startTime: '9:00 AM',
            toTime: '10:30 AM',
            iqacVerification: 'APPROVED',
            remarks: 'Successfully Booked',
            statusClass: 'approved'
        },
        {
            facultyId: 'CSE5678',
            facultyName: 'Rakshaya',
            venue: 'Main Auditorium',
            purpose: 'Dance Concert',
            fromDate: '04-06-2024',
            toDate: '04-06-2024',
            startTime: '3:00 PM',
            toTime: '4:30 PM',
            iqacVerification: 'DECLINED',
            remarks: 'It will be given to Placement, so book another venue',
            statusClass: 'declined'
        },
        {
            facultyId: 'AIDS2678',
            facultyName: 'Sri Harini',
            venue: 'AIDS LAB 3',
            purpose: 'Seminar',
            fromDate: '05-06-2024',
            toDate: '05-06-2024',
            startTime: '10:00 AM',
            toTime: '3:00 PM',
            iqacVerification: 'INITIATED',
            remarks: '',
            statusClass: 'initiated'
        }
    ];

    return (
        <div className="approvalreportcontainer">
            <header className="portal-header">
                <div className="portal-title">BIT Venue Booking Portal</div>
                <div className="user-reporticon">D</div>
            </header>
            <div className="approval-report-content">
                <h2 className="report-heading">Venue Booking Report</h2>
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>Faculty ID</th>
                            <th>Faculty Name</th>
                            <th>Venue</th>
                            <th>Purpose</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Start Time</th>
                            <th>To Time</th>
                            <th>IQAC Verification</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.facultyId}</td>
                                <td>{booking.facultyName}</td>
                                <td>{booking.venue}</td>
                                <td>{booking.purpose}</td>
                                <td>{booking.fromDate}</td>
                                <td>{booking.toDate}</td>
                                <td>{booking.startTime}</td>
                                <td>{booking.toTime}</td>
                                <td>
                                    <span className={`status ${booking.statusClass}`}>
                                        {booking.iqacVerification}
                                    </span>
                                </td>
                                <td>{booking.remarks}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Userapprove;
