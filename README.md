# UTM Tracking Landing Page Setup & Testing

## Overview
This project is a **landing page with UTM parameter tracking**, built with HTML, CSS, and JavaScript, and backed by an **Express.js server with MongoDB**. It captures UTM parameters from the URL and stores user submissions in MongoDB.

## Features
- Tracks UTM parameters from URL
- Stores user data along with UTM parameters in MongoDB
- Simple Express.js backend for handling form submissions
- Deployment on **Vercel**

---

## **1. Setup & Installation**

### **Frontend (Client-Side)**
1. Clone the repository:
   ```sh
   git clone https://github.com/vamsi2106/utm-task
   cd utm-task
   ```
2. Open `index.html` in a browser

### **Backend (Express Server)**
1. Install dependencies:
   ```sh
   npm install
   ```
2. Create a **.env** file in the `backend` folder and add:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
3. Start the Express server:
   ```sh
   npm start
   ```
   The server should run at **http://localhost:5000**

---


## **3. Testing & Analyzing UTM Parameters**

### **Step 1: Generate UTM Links**
Use [Google Campaign URL Builder](https://ga-dev-tools.google/ga4/campaign-url-builder/) to create UTM links.
Example:
```sh
https://utm-task-vamsis-projects-92b5d911.vercel.app/?utm_source=facebook&utm_medium=cpc&utm_campaign=spring_sale&utm_term=running_shoes&utm_content=banner_ad_1
```

### **Step 2: Open the Link**
Open the generated link in your browser. The form will auto-fill hidden UTM fields.

### **Step 3: Submit the Form**
Click **Submit** and check network tab for api request and response.

---

## **4. Expected Output & Analysis**

### **When a user submits the form:**
- The data is stored in MongoDB with UTM parameters.
- Example MongoDB entry:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'm interested!",
    "utm_source": "facebook",
    "utm_medium": "cpc",
    "utm_campaign": "spring_sale",
    "utm_term": "running_shoes",
    "utm_content": "banner_ad_1",
    "timestamp": "2025-03-05T12:00:00Z"
  }
  ```

---
Let me know if you need any modifications! 🚀

