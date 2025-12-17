import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from './pages/HomeScreen';

import SearchScreen from './pages/SearchScreen';
import MyListScreen from './pages/MyListScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/my-list" element={<MyListScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
