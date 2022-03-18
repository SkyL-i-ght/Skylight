# ✈️ Skylight

**Real-time flight tracking application for monitoring overhead aircraft**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v16+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-17.0.2-blue.svg)](https://reactjs.org/)

## 📋 Overview

Skylight is a comprehensive web application that allows users to track and monitor aircraft flying overhead in real-time. With an intuitive interface built on Google Maps integration, users can visualize flight paths, access detailed flight information, and manage their favorite destinations for enhanced flight tracking experiences.

## ✨ Features

### 🛩️ Flight Tracking
- **Real-time Flight Data**: View live aircraft positions, altitudes, speeds, and directions
- **Interactive Map**: Google Maps integration for geographic visualization
- **Flight Details**: Access comprehensive flight information including:
  - Departure and arrival airports
  - Flight status and schedules
  - Airline and aircraft information
  - Terminal and gate details

### 👤 User Management
- **User Authentication**: Secure signup, login, and logout functionality
- **Personal Accounts**: Individual user sessions with personalized data

### ⭐ Favorites System
- **Destination Management**: Save and organize favorite airports and destinations
- **Custom Descriptions**: Add personal notes and descriptions to saved locations
- **Easy Access**: Quick retrieval of frequently tracked destinations

## 🛠️ Technology Stack

### Frontend
- **React 17.0.2** - Modern UI framework
- **Material-UI (MUI) 5.5.1** - Professional component library
- **Google Maps API** - Interactive mapping and geolocation
- **React Router 6.2.2** - Client-side routing
- **Emotion** - CSS-in-JS styling

### Backend
- **Node.js** - Server runtime environment
- **Express.js 4.17.3** - Web application framework
- **PostgreSQL** - Relational database
- **bcrypt** - Password hashing and security
- **Cookie Parser** - Session management

### Development Tools
- **Webpack 5** - Module bundling and build system
- **Babel** - JavaScript transpilation
- **Nodemon** - Development server auto-restart
- **ESLint** - Code linting and formatting

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL database
- Google Maps API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/skylight.git
   cd skylight
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   DATABASE_URL=postgresql://username:password@localhost:5432/skylight
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   SESSION_SECRET=your_session_secret
   ```

4. **Database Setup**
   ```bash
   # Create and configure your PostgreSQL database
   # Run any necessary migrations (refer to backend/models/)
   ```

5. **Start the Development Server**
   ```bash
   npm run dev
   ```

6. **Access the Application**
   Open your browser and navigate to `http://localhost:8080`

## 📖 Usage

### Getting Started
1. **Create an Account**: Sign up with a username and password
2. **Login**: Access your personal dashboard
3. **Explore Flights**: Use the map interface to view real-time flight data
4. **Add Favorites**: Save interesting destinations for quick access
5. **Track Details**: Click on aircraft markers for detailed flight information

### API Usage
Skylight provides a comprehensive REST API for flight data and user management. For detailed API documentation, see [API.md](./API.md).

Key endpoints include:
- `GET /api/flights` - Retrieve flight data by coordinates
- `GET /api/flightinfo/:callsign` - Get detailed flight information
- `POST /api/user/signup` - User registration
- `GET /api/favorites` - Manage favorite destinations

## 🏗️ Project Structure

```
skylight/
├── frontend/                 # React application
│   ├── components/          # Reusable UI components
│   ├── routes/             # Application routing
│   ├── assets/             # Static assets
│   └── styles.css          # Global styles
├── backend/                # Express server
│   ├── controllers/        # Request handlers
│   ├── models/            # Database models
│   ├── routers/           # API route definitions
│   └── server.js          # Application entry point
├── API.md                 # Comprehensive API documentation
└── README.md             # Project documentation
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm start` - Start production server

### Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 API Documentation

For comprehensive API documentation including request/response examples, authentication details, and endpoint specifications, please refer to [API.md](./API.md).

## 🤝 Contributing

We welcome contributions to Skylight! Please feel free to submit issues, feature requests, or pull requests. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Flight data provided by aviation APIs
- Google Maps for mapping and geolocation services
- Material-UI for the component library
- The open-source community for various tools and libraries

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the [API documentation](./API.md)
2. Search existing [GitHub issues](https://github.com/yourusername/skylight/issues)
3. Create a new issue with detailed information

---

**Built with ❤️ for aviation enthusiasts and developers**
