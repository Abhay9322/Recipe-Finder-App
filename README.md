# Recipe Finder App (MERN Stack)

This is a fullstack Recipe Finder App built using the MERN stack (MongoDB, Express, React, Node.js) with Vite and integrated with the Spoonacular API. It allows users to search recipes by ingredients and filter them by meal type (breakfast, lunch, dinner).

## Features

- Search recipes by ingredients (like "chicken", "paneer")
- Filter recipes by meal type (breakfast, lunch, dinner)
- Display recipe image, title, calories, and ingredients
- Save recipe data to MongoDB
- Show loading and error messages properly

## Tech Stack

Frontend:
- React (with Vite)
- Axios

Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- Spoonacular API

## Setup Instructions

1. Clone the Repository

git clone https://github.com/your-username/Recipe-Finder-App.git
cd Recipe-Finder-App

2. Setup Backend

cd backend
npm install

Create a .env file with the following content:

MONGO_URI=your_mongodb_connection_string  
SPOONACULAR_API_KEY=your_api_key  
PORT=5000

Then run:

npm run server

3. Setup Frontend

cd ../frontend
npm install
npm run dev

## API Used

Spoonacular API  
You can get a free API key from: https://spoonacular.com/food-api

## How It Works

- User searches for a recipe using the search box
- Frontend sends the request to the backend
- Backend calls the Spoonacular API and processes the response
- Backend stores the response data in MongoDB
- Frontend shows the recipes using React components

## Author

Abhay Suryawanshi  
GitHub: https://github.com/Abhay9322
