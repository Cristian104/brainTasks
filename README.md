# To-Do List Application

## Project Overview

This project is a basic To-Do list application built with Node.js, Express.js, and MongoDB. It is deployed on Heroku and allows users to add, view, update, and delete tasks. This version, marked as **Version Alpha**, includes the foundational setup and basic functionality necessary to run the application.

## Features

- **Add Tasks:** Create new to-do items.
- **View Tasks:** Display a list of all tasks.
- **Update Tasks:** Mark tasks as completed or edit existing tasks.
- **Delete Tasks:** Remove tasks that are no longer needed.

## Technologies Used

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js:** A minimal and flexible Node.js web application framework.
- **MongoDB:** A NoSQL database used for storing tasks.
- **Heroku:** A cloud platform-as-a-service supporting several programming languages.

## Setup Instructions

### Prerequisites

Ensure you have Node.js, npm, and Git installed on your machine.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone
   cd todo-list-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Environment Setup:**

   - Create a `.env` file in the root directory and provide your MongoDB connection string.

     ```
     MONGODB_URI=your-mongodb-connection-string
     ```

4. **Run the Application:**

   ```bash
   npm start
   ```

   Access the app at `http://localhost:3000`.

### Deployment

To deploy this application on Heroku:

1. **Ensure the `Procfile` is Present:**

   The `Procfile` should contain:

   ```
   web: node index.js
   ```

2. **Push to Heroku:**

   ```bash
   git add .
   git commit -m "Deploy Version Alpha"
   git push heroku master
   ```

## Version Information

This README describes the **Version Alpha** of the project. Future updates will include more advanced features, error handling, and improved user interface.

## Contributing

Contribution guidelines will be provided in future versions. For now, feel free to fork the repository and experiment on your own.

## License

This project is licensed under the MIT License.

---

Feel free to modify this README to reflect any additional changes or features you add to your application!
