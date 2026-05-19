<div align="center">

# 🌤️ Weather Forecast Web App

### Real-time weather data, 7-day forecasts & interactive maps — all in one place

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-weather--forecast--web--app.vercel.app-black?style=for-the-badge)](https://weather-forecast-web-app-mu.vercel.app/)
[![React](https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Leaflet](https://img.shields.io/badge/Leaflet.js-Interactive%20Maps-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com/)

</div>

---

## 📌 Overview

A modern, fully responsive weather application built with **React.js** and **Vite**. Search any city and get instant real-time weather conditions, a detailed 7-day forecast, and an interactive map showing the exact location — all powered by live weather API data.

---

## ✨ Features

- 🌡️ **Real-Time Weather** — Current temperature, conditions, humidity, wind speed, and more
- 📅 **7-Day Forecast** — Extended daily weather outlook for any location
- 🗺️ **Interactive Maps** — Leaflet.js powered map showing the searched location with a pin
- 🔍 **City Search** — Search weather for any city worldwide
- 🕓 **Search History** — Quickly re-access recently searched locations
- ✅ **Input Validation** — Clean error handling for invalid or empty searches
- 📱 **Fully Responsive** — Optimised layout for both desktop and mobile

---

## 🛠️ Tech Stack

| Tech | Purpose |
|---|---|
| React.js + Vite | UI framework & fast dev server |
| CSS3 | Styling & responsive layout |
| Weather API | Real-time weather & forecast data |
| [Leaflet.js](https://leafletjs.com/) | Interactive map rendering |
| [React-Leaflet](https://react-leaflet.js.org/) | React wrapper for Leaflet maps |

---

## 📂 Project Structure

```
Weather-Forecast-Web-App/
├── public/                 # Static assets
├── src/                    # React components, hooks & styles
├── index.html              # App entry point
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- A free API key from [OpenWeatherMap](https://openweathermap.org/api) or similar weather API

### 1. Clone the Repository

```bash
git clone https://github.com/Gauri-Nagariya/Weather-Forecast-Web-App.git
cd Weather-Forecast-Web-App
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

> Get a free API key at [openweathermap.org](https://openweathermap.org/api)

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🔮 How It Works

```
User searches for a city
        ↓
React fetches live data from Weather API
        ↓
Current conditions + 7-day forecast displayed
        ↓
Leaflet.js renders an interactive map pinpointing the city 🗺️
        ↓
Search saved to history for quick re-access
```

---

## 📬 Contact

**Gauri Nagariya** — Full-Stack / MERN Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Gauri%20Nagariya-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/gauri-nagariya/)
[![GitHub](https://img.shields.io/badge/GitHub-Gauri--Nagariya-181717?style=flat&logo=github)](https://github.com/Gauri-Nagariya)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Site-ff69b4?style=flat&logo=vercel)](https://gaurinagariyaportfolio.vercel.app/)

---

<div align="center">
  <sub>Built with ❤️ by Gauri Nagariya</sub>
</div>
