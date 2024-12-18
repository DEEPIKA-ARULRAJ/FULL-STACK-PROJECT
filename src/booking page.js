import React, { useState } from "react";
import "./booking page.css";

function VenueBookingPage() {
  const [formData, setFormData] = useState({
    facultyId: "",
    facultyName: "",
    venue: "",
    purpose: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? "" : prevErrors[name],
    }));
  };

  const handleCancel = () => {
    setFormData({
      facultyId: "",
      facultyName: "",
      venue: "",
      purpose: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
    });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("Please fill in all the required details.");
    } else {
      alert("Booking successful!");
    }
  };

  return (
    <div className="booking-container">
      <h1 className="booking-title">BIT VENUE BOOKING PAGE</h1>
      <div className="booking-page">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Faculty ID</label>
            <input
              type="text"
              name="facultyId"
              value={formData.facultyId}
              onChange={handleChange}
              placeholder="Enter faculty ID"
            />
            {errors.facultyId && <span className="error">{errors.facultyId}</span>}
          </div>
          <div className="form-group">
            <label>Faculty Name</label>
            <input
              type="text"
              name="facultyName"
              value={formData.facultyName}
              onChange={handleChange}
              placeholder="Enter faculty name"
            />
            {errors.facultyName && <span className="error">{errors.facultyName}</span>}
          </div>
          
          <div className="form-group">
            <label>Venue</label>
            <input
              type="text"
              name="VenueName"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Enter the venue name"
            />
            {errors.venue && <span className="error">{errors.venue}</span>}
          </div>
          <div className="form-group">
            <label>Purpose</label>
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="Enter the purpose"
            />
            {errors.purpose && <span className="error">{errors.purpose}</span>}
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
            {errors.startDate && <span className="error">{errors.startDate}</span>}
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
            {errors.endDate && <span className="error">{errors.endDate}</span>}
          </div>
          
          <div className="button-group">
            <button type="button" className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Book the venue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VenueBookingPage;