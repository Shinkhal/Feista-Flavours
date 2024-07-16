# Feista Flavours Cuisine

Welcome to Feista Flavours Cuisine, a dynamic and responsive restaurant website built with the MERN stack (MongoDB, Express.js, React, Node.js). This project aims to provide a seamless experience for customers to explore the menu, make reservations, and learn more about the restaurant.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Design**: Optimized for both desktop and mobile viewing.
- **Reservation System**: Make and manage reservations with ease.
- **Dynamic Menu**: Browse the menu with detailed descriptions and prices.
- **Contact Information**: Easy access to the restaurant's contact details.
- **Social Media Links**: Follow us on various social media platforms.
- **Interactive Footer**: Includes important links, contact information, and social media links.
- **Email Notifications**: Uses Nodemailer to send reservation confirmations and other notifications.

## Technologies

- **Frontend**: React, Axios, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Styling**: CSS, Bootstrap
- **Email Service**: Nodemailer
- **Deployment**: InfinityFree

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Shinkhal/Feista-Flavours.git
    cd Feista-Flavours
    ```

2. **Install dependencies** for both frontend and backend:
    ```sh
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the `backend` directory and add your environment variables. For example:
    ```sh
    PORT=4000
    DB_CONNECTION_STRING=your_database_connection_string
    EMAIL_SERVICE=your_email_service
    EMAIL_USER=your_email_user
    EMAIL_PASS=your_email_pass
    ```

## Usage

1. **Start the backend server**:
    ```sh
    cd backend
    npm run dev
    ```

2. **Start the frontend client**:
    ```sh
    cd frontend
    npm run dev
    ```

3. **Access the website**:
    Open your browser and navigate to `http://localhost:3000`.

## File Structure

```
Feista-Flavours/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ... (other frontend files)
├── backend/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── index.js
│   └── ... (other backend files)
├── .gitignore
├── README.md
└── package.json
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
