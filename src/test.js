// const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema({
//   venueNames: [
//     {
//       venueName: {  
//         type: String, 
//         required: true
//       },
//       subVenues: [
//         {
//           subVenueName: { 
//             type: String, 
//             required: true 
//           },
//           capacity: { 
//             type: Number, 
//             required: true 
//           },
//           bookings: [
//             {
//               fromDate: { 
//                 type: Date, 
//               },
//               toDate: { 
//                 type: Date, 
//               },
//               status: { 
//                 type: String, 
//                 enum: ['booked', 'available'], 
//               },
//               bookedBy: {
//                 type: String,
//               }
//             }
//           ]
//         }
//       ]
//     }
//   ]
// });

// const Booking = mongoose.model('Booking', bookingSchema);

// module.exports = Booking;


// mongo db shell code


use VENUEMANAGEMENT;

db.createCollection("bookings");

db.bookings.insertOne({
  venueNames: [
    {
      venueName: "Auditorium",
      subVenues: [
        {
          subVenueName: "Main Auditorium",
          capacity: 1800,
          bookings: [
            {
              purpose:"lab test",
              fromDate: new ISODate("2023-10-01T00:00:00Z"),
              toDate: new ISODate("2023-10-03T00:00:00Z"),
              status: "booked",
              bookedBy: "John Doe"
            }
          ]
        },
        {
          subVenueName: "Vedhanayagam Auditorium",
          capacity: 800,
          bookings: [
            {
              purpose:"",
              fromDate: new ISODate("2023-10-05T00:00:00Z"),
              toDate: new ISODate("2023-10-07T00:00:00Z"),
              status: "available",
              bookedBy: ""
            }
          ]
        }
      ]
    }
  ]
});
