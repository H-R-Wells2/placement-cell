# Placement Cell Web Application

## Overview

This web application is designed for employees to manage student interviews and download data in CSV format. The application includes features for user authentication, data entry for students and interviews, and exporting data to CSV files.

## Features

- Employee Sign Up and Sign In
- Student management (list, add new)
- Interview management (list, add new)
- Allocate students to interviews
- Mark results for students in interviews
- Download all data in CSV format

## Setup Instructions

Follow these steps to set up the project on your local system.

### Prerequisites

- Node.js (v12.x or later)
- MongoDB (running locally or on a cloud service)
- NPM (v6.x or later)

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/h-r-wells2/placement-cell.git
    cd placement-cell
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Configure environment variables:**

    Create a `.env` file in the root directory and add the following:

    ```plaintext
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/placement-cell
    SESSION_SECRET=your-session-secret
    ```

4. **Start the application:**

    ```sh
    npm start
    ```

5. **Access the application:**

    Open your browser and go to `http://localhost:3000`.

### Usage

- **Sign Up and Sign In:**

    Employees can sign up and sign in to access the application features.

- **Student Management:**

    - View the list of students.
    - Add new students.

- **Interview Management:**

    - View the list of interviews.
    - Add new interviews.
    - Allocate students to interviews.
    - Mark interview results for students.

- **CSV Download:**

    Download a complete CSV of all data.

### Additional Information

For detailed information about each feature and how to use it, refer to the comments within the code files and the provided `views`.

## Video Walkthrough

[Watch the video walkthrough](https://drive.google.com/file/d/1Z-qAWjYHuSP3yPT4R7_HbejdumkIsX49/view?usp=drive_link) explaining the folder structure and project setup.

# Update for deploymet