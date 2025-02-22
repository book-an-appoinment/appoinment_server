live link-->

https://appoinment-server-h773.onrender.com 


# Appointment Booking System

A backend service for handling appointment bookings, built with **Express**, **Mongoose**, and **TypeScript**. This service allows users to book appointments, view existing appointments, and delete their bookings. The system also validates incoming data and ensures correct formats for date and time.

## Features

- **Create an appointment**: Book an appointment with required details such as name, email, service type, phone, subject, date, time, and optional message.
- **View appointments**: Retrieve all appointments from the system.
- **Delete appointment**: Users can delete their appointment using the appointment ID.
- **Time Format Handling**: Supports both **12-hour AM/PM format** and converts to **24-hour format** for consistency.

## API Endpoints

### `POST /api/appointments`
- **Description**: Create a new appointment.
- **Request Body**:
  ```json
  {
    "fullname": "John Doe",
    "email": "johndoe@example.com",
    "service": "Financial Service",
    "phone": "+1234567890",
    "subject": "How can we help?",
    "date": "2025-03-15",
    "time": "8:00 PM",
    "message": "I need financial planning advice."
  }

### Response

{
  "success": true,
  "data": {
    "fullname": "John Doe",
    "email": "johndoe@example.com",
    "service": "Financial Service",
    "phone": "+1234567890",
    "subject": "How can we help?",
    "date": "2025-03-15T00:00:00.000Z",
    "time": "20:00",
    "message": "I need financial planning advice."
  }
}


GET /api/appointments
Description: Retrieve all appointments.
Response:
Status: 200 (OK)
Body:
json
Copy
{
  "success": true,
  "data": [
    {
      "fullname": "John Doe",
      "email": "johndoe@example.com",
      "service": "Financial Service",
      "phone": "+1234567890",
      "subject": "How can we help?",
      "date": "2025-03-15T00:00:00.000Z",
      "time": "20:00",
      "message": "I need financial planning advice."
    }
  ]
}
DELETE /api/appointments/:id
Description: Delete an appointment by ID.
Request Params:
id: The ID of the appointment to be deleted.
Response:
Status: 200 (OK)
Body:
json
Copy
{
  "success": true,
  "message": "Appointment deleted successfully"
}



Example Test Cases-->

Create Appointment: Use the POST /api/appointments endpoint with a valid payload.
Get Appointments: Use the GET /api/appointments endpoint to list all appointments.
Delete Appointment: Use the DELETE /api/appointments/:id endpoint to delete an appointment by its ID.
