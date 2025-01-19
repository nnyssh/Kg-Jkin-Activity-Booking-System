import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @PostMapping
    public Map<String, String> createBooking(@RequestBody Map<String, Object> bookingData) {
        // Log received booking data
        System.out.println("Received booking: " + bookingData);

        // Generate a booking ID (simple random example)
        String bookingId = "BK" + System.currentTimeMillis();

        // Save the booking details to a database (example skipped for brevity)

        // Return confirmation response
        Map<String, String> response = new HashMap<>();
        response.put("message", "Booking Confirmed");
        response.put("bookingId", bookingId);
        return response;
    }
}
