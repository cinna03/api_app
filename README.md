           MY APP

**Harmoniq** is a mental wellness platform designed to help users achieve clarity, balance, and inner peace. This repository contains the front-end code for the website, including a contact form that submits user messages to a Google Sheet via Google Apps Script.

## Features

- **Responsive design**: The website is mobile-friendly and adapts to various screen sizes.
- **Home Section**: Provides an introduction to Harmoniq's services and mission.
- **Contact Form**: Allows users to submit their information (Name, Email, Phone, Subject, Message).
- **Google Sheets Integration**: Submitted form data is automatically saved into a Google Sheet via Google Apps Script.

## Structure

### 1. **HTML Structure**
- `index.html`: The main structure of the website, including the **Home** and **Contact** sections.
- The contact form is inside the `#contact` section, where users can submit their details.

### 2. **CSS**
- `swag.css`: Contains the styles for the website, ensuring a modern and clean design.
- Box icons are used for a sleek navigation menu.

### 3. **JavaScript**
- **Form Submission**: Handles the form data submission to a Google Apps Script using the `fetch()` API.
- **Message Feedback**: Displays a success message when the form is submitted successfully.
  
## How It Works

1. **Form Submission**: 
    - Users fill out the contact form, which includes fields for **Name**, **Email**, **Phone**, **Subject**, and **Message**.
    - Upon clicking "Submit," the form data is sent via a POST request to a Google Apps Script URL.

2. **Google Apps Script Integration**:
    - The data from the form is sent to a Google Apps Script (`script.google.com`) that processes the form data and writes it into a **Google Sheet**.
    - The Google Sheet stores the form submissions as new rows.

3. **Message Display**:
    - After successful submission, the website displays a confirmation message ("Message sent successfully") for 4 seconds.

## Setup Instructions

### Prerequisites
- A Google account to access Google Apps Script and Sheets.
- Basic understanding of HTML, CSS, JavaScript, and Google Apps Script.

### Steps to Set Up

1. **Clone the repository**:
   ```bash
   git clone https://github.com/cinna03/api_app

