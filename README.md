# usePopcorn

A React + TypeScript application for searching movies through the OMDB API, displaying detailed information, and maintaining a personal watchlist.

## Features
- **Search Movies**: Enter a movie title to retrieve results from the OMDB API.  
- **Movie Details**: View a movie’s title, year, runtime, genre, director, plot, cast, and ratings.  
- **Watchlist Management**: Add/search for unwatched items, remove completed ones, and store personalized ratings.  
- **User Ratings**: Assign and update custom ratings for each watched movie.  
- **Theme Toggle**: Switch between light and dark themes.  

## Description
usePopcorn streamlines movie discovery and watchlist tracking. It fetches data from OMDB using a combination of React hooks and a modular component structure. The application stores user preferences (like theme and watchlist) locally, ensuring they persist between sessions.

## Installation
1. **Clone the repository**:  
   ```sh
   git clone https://github.com/your-username/usePopcorn.git
   cd usePopcorn
   ```
2. **Install dependencies**:  
   ```sh
   npm install
   ```

## Usage
1. **Start the development server**:  
   ```sh
   npm run dev
   ```
2. **Open your browser** at [http://localhost:3000](http://localhost:3000) to explore the application.

## Scripts
- **dev**: Starts the development server.  
- **build**: Bundles the application for production.  
- **lint**: Checks for style and syntax issues.  
- **preview**: Locally serves the production build.

## Project Structure
- **src/**: Contains all React components, hooks, and logic.  
- **styles/**: Houses CSS files.  
- **public/**: Contains static assets.  
- **vite.config.ts**: Configuration file for Vite (build and dev server).

## License
MIT License