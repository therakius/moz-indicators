<div align="center">

# 🗺️ Moz Demographic Indicators

**An interactive dashboard for exploring Mozambique's demographic data across time.**

[![React](https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![REST API](https://img.shields.io/badge/REST-API-0078D4?style=for-the-badge&logo=fastapi&logoColor=white)](https://moz-demog-api.vercel.app/v1/docs)

[Live Demo](https://moz-indicators.vercel.app) · [API Docs](https://moz-demog-api.vercel.app/v1/docs) · [Report Bug](https://github.com/therakius)

</div>

---

## 📖 Overview

**Moz Demographic Indicators** is a web application that brings Mozambique's demographic statistics to life through a clean, year-by-year dashboard. Users can explore key indicators ranging from population and urbanization to health metrics, all sourced from official national data.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📅 Year Selector | Browse demographic data from **2017 to 2026** |
| 👥 Population | Total population with male/female breakdown and sex ratio |
| 🏙️ Urbanization | Urban population rate, growth rate, and dependency ratio |
| 🩺 Health & Age | Median age, life expectancy, and infant mortality rate |
| 💚 Health Monitor | Live service status and uptime display |

---

## 🛠️ Tech Stack

### Frontend

- **[React.js](https://reactjs.org/)** — component-based UI with reactive state management for seamless year selection and dynamic data rendering
- **JavaScript (ES6+)** — modern application logic, async data fetching, and DOM interactions
- **CSS3** — responsive card layout and clean visual design

### Data Layer

- **REST API** — all demographic data is consumed from the [moz-demog-api](https://moz-demog-api.vercel.app/v1/docs) over standard HTTP/JSON endpoints
- **JSON** — lightweight data exchange format between the API and the frontend

---

## 📡 Data Source

Demographic statistics are sourced from the **[INE — Instituto Nacional de Estatísticas de Moçambique](https://www.ine.gov.mz/)**, the official national body responsible for collecting and publishing Mozambican statistical data.

These statistics are exposed through **[moz-demog-api](https://moz-demog-api.vercel.app/v1/docs)**, a purpose-built REST API developed and maintained by the author of this project.

> **moz-demog-api** provides structured, versioned access to Mozambican demographic data, making it easy to integrate into any application.

---

## 🚀 Usage

1. Open the application in your browser
2. Use the **year selector** to pick any year between 2017 and 2026
3. The dashboard automatically fetches and displays the corresponding indicators

---

## 👤 Author

Built with 🖤 by **[therakius](https://github.com/therakius)**
— developer of both this dashboard and the underlying [moz-demog-api](https://moz-demog-api.vercel.app/v1/docs).

---

## 📄 License

© 2026 [therakius](https://github.com/therakius). All rights reserved.