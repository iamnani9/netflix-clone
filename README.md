🎬 Netflix Clone

A modern, responsive Netflix-style web application built using React 19 and Vite, integrating the TMDB API to browse movies, watch trailers, and search content with a clean, production-like UI.

⚠️ This project is for educational and portfolio purposes only.
It is not affiliated with or endorsed by Netflix.

📸 Screenshots



✨ Features

🎥 Browse movies by category (Trending, Top Rated, Action, Comedy, etc.)

⭐ Netflix Originals section

🔍 Dedicated Search page with debounced input

🎬 Trailer modal with:

Full-screen overlay

Click outside to close

ESC key support

📱 Fully responsive design (mobile, tablet, desktop)

⚡ Fast performance using Vite

🎨 Netflix-style UI with custom CSS animations

❤️ Custom watermark: Made with love by Team Alpha

🛠️ Tech Stack
Core

React 19

Vite

Routing

React Router DOM

Data & API

Axios

TMDB API

Styling

Vanilla CSS 3

Component-level CSS files

Media & UX

react-youtube

movie-trailer

react-icons

🧱 Project Structure
netflix_clone/
├── .env
├── index.html
├── package.json
└── src/
    ├── components/
    │   ├── Banner.jsx / .css
    │   ├── Nav.jsx / .css
    │   ├── Row.jsx / .css
    │   ├── TrailerModal.jsx / .css
    │   └── Watermark.jsx / .css
    ├── pages/
    │   ├── HomeScreen.jsx / .css
    │   └── SearchPage.jsx / .css
    ├── services/
    │   ├── axios.js
    │   └── requests.js
    ├── App.jsx
    ├── index.css
    └── main.jsx

🔑 Environment Variables

Create a .env file in the root directory:

VITE_TMDB_API_KEY=your_tmdb_api_key_here


⚠️ Do not commit .env to GitHub.

📡 TMDB Attribution

This product uses the TMDB API but is not endorsed or certified by TMDB.

🧠 Key Implementation Highlights

Centralized API layer using Axios instance

Reusable components (Row, Banner, TrailerModal)

Debounced search to reduce unnecessary API calls

Trailer modal UX instead of inline playback

Mobile-first responsive design

Clean separation of concerns

📈 Future Improvements

Skeleton loaders for better perceived performance

Watchlist feature using localStorage or Firebase

Authentication (Firebase / Auth0)

Keyboard navigation

Performance optimization & Lighthouse audit

AI-based recommendations

🧑‍💻 Author

N A N I
Made with ❤️ for learning and portfolio purposes.

📄 License

This project is licensed under the MIT License.

✅ Next Step

