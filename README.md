# COVID-19 Tracker

A simple web application that tracks and displays COVID-19 statistics globally. Users can view data for all countries, add selected countries to a notes page with additional information, and explore detailed insights about specific countries.

---

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)

---

## Project Description

The **COVID-19 Tracker** is a React-based web application that displays real-time COVID-19 data for all countries using the [disease.sh API](https://disease.sh/v3/covid-19/countries). It enables users to:
- Browse global COVID-19 statistics.
- Add specific countries to a notes page.
- Add custom notes for each selected country.
- View, edit, and delete notes.
- Access detailed insights about COVID-19 statistics for selected countries.

This project demonstrates the use of React Context API for state management, Tailwind CSS for styling, and local storage for persistent data storage.

---

## Features

### 1. **Home Page**
- Displays COVID-19 data for all countries in a table format.
- Features search and sorting functionality:
  - Sort by name (A-Z, Z-A).
  - Sort by cases (ascending, descending).
  - Sort by deaths (ascending, descending).
- Buttons to view details or add a country to the notes page.

### 2. **Notes Page**
- Displays a list of countries added by the user along with their custom notes.
- Features include:
  - View detailed COVID-19 data for a specific country.
  - Edit or delete custom notes.
  - Search and sort functionality similar to the home page.

### 3. **Modals**
- **Add Note Modal**: Allows users to add a custom note for a country.
- **Detail Modal**: Displays detailed COVID-19 statistics for a selected country.
- **Delete Confirmation Modal**: Confirms deletion of a note.

### 4. **Navigation**
- A navbar for navigating between the Home Page and Notes Page.
- Highlights the active page for better user experience.

---

## Technologies Used

### Frontend:
- **React.js**: For building user interfaces.
- **Tailwind CSS**: For styling components with modern, responsive design.
- **React Router DOM**: For navigation between pages.
- **Context API**: For managing global state (notes and filters).

### Backend/API:
- **disease.sh API**: For fetching real-time COVID-19 data.

### State Management:
- **React Context API**: For managing notes and state across components.

### Storage:
- **Local Storage**: For persistent storage of notes.

---

## Usage

### Home Page
1. View COVID-19 data for all countries.
2. Use the search bar to filter countries by name.
3. Sort data using the dropdown menu.
4. Add a country to the Notes Page by clicking "Tambahkan ke Note Page".
5. View detailed COVID-19 data by clicking "Lihat Detail".

### Notes Page
1. View a list of saved countries with custom notes.
2. Edit or delete notes as needed.
3. Access detailed COVID-19 data by clicking "Lihat Detail".
4. Add a new note or modify an existing one for better organization.
