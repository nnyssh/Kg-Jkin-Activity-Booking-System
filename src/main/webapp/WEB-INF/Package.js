

// JavaScript for Package Selection and Booking
document.addEventListener("DOMContentLoaded", () => {
  const bookingModal = document.getElementById("bookingModal");
  const bookingForm = document.getElementById("booking-form");
  const cancelBookingButton = document.getElementById("cancel-booking");

  // Package Selection Elements
  const packageButtons = document.querySelectorAll(".book-btn");
  const selectedPackage = document.getElementById("selected-package");
  const selectedPrice = document.getElementById("selected-price");

  // Open Booking Modal
  packageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const packageName = button.dataset.package;
      const packagePrice = button.dataset.price;

      selectedPackage.textContent = packageName;
      selectedPrice.textContent = packagePrice;

      bookingModal.classList.remove("hidden");
    });
  });

  // Close Booking Modal
  cancelBookingButton.addEventListener("click", () => {
    bookingModal.classList.add("hidden");
  });

  // Handle Booking Form Submission
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numPax = document.getElementById("num-pax").value;
    const activityDate = document.getElementById("activity-date").value;
    const slot = document.getElementById("slot").value;

    if (!activityDate || !slot) {
      alert("Please select a date and slot!");
      return;
    }

    alert(
      `Booking confirmed!\n\nPackage: ${selectedPackage.textContent}\nPrice: RM${selectedPrice.textContent}\nPax: ${numPax}\nDate: ${activityDate}\nSlot: ${slot}`
    );

    // Close the modal
    bookingModal.classList.add("hidden");

    // Optionally clear form fields
    bookingForm.reset();
  });
});
