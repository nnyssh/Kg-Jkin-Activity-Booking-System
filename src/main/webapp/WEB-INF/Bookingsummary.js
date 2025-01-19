// Example data passed from the previous page
const bookingData = JSON.parse(localStorage.getItem("bookingData")) || {
    bookingId: "2024155AF",
    bookingDate: "15-05-2024",
    bookingTime: "10:00",
    activityDate: "08-07-2024",
    paxFun: 2,
    paxExtreme: 1,
  };
  
  // Populate booking details dynamically
  document.getElementById("booking-id").textContent = bookingData.bookingId;
  document.getElementById("booking-date").textContent = bookingData.bookingDate;
  document.getElementById("booking-time").textContent = bookingData.bookingTime;
  document.getElementById("activity-date").textContent = bookingData.activityDate;
  
  // Populate pax counts
  document.getElementById("pax-fun").textContent = bookingData.paxFun;
  document.getElementById("pax-extreme").textContent = bookingData.paxExtreme;
  