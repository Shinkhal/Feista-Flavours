import { Reservation } from "../models/reservationSchema.js";
import ErrorHandler from "../error/error.js";
import { sendEmail } from "../utils/emailSender.js"; // Import your email sending function

// Helper function to parse and validate the date format
const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // Months are 0-based in JavaScript Date
}

// Controller function to handle reservation creation
export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, time, date } = req.body;

    // Check if all required fields are provided
    if (!firstName || !lastName || !email || !phone || !time || !date) {
        return next(new ErrorHandler("Please fill all fields in the reservation form", 400));
    }

    // Check if the date is in the correct format
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (!dateRegex.test(date)) {
        return next(new ErrorHandler("Date must be in the format dd-mm-yyyy", 400));
    }

    // Check if the reservation date is in the past
    const currentDate = new Date();
    const reservationDate = parseDate(date);
    if (isNaN(reservationDate.getTime()) || reservationDate < currentDate.setHours(0, 0, 0, 0)) {
        return next(new ErrorHandler("Reservation date cannot be in the past", 400));
    }

    try {
        // Create a new reservation document in the database
        const newReservation = await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            time,
            date
        });

        // Send confirmation email to the customer
        const emailSubject = "Reservation Confirmation";
        const emailMessage = `Hello ${firstName} ${lastName},

Your reservation at Feista Flavours Cuisine has been successfully placed for:
Date: ${date}
Time: ${time}

Thank you for choosing us. We look forward to serving you!

Best regards,
The Feista Flavours Team`;

        // Send the email using your email sending function
        await sendEmail(email, emailSubject, emailMessage);

        // Respond with success message if reservation is created and email is sent successfully
        res.status(201).json({
            success: true,
            message: "Reservation successfully placed!",
            reservation: newReservation // Optionally include the created reservation in the response
        });
    } catch (error) {
        // Handle validation errors or other database-related errors
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }
        // Forward other types of errors to the global error handler
        return next(error);
    }
};
