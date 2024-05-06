import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Import HashRouter instead of BrowserRouter
import Homescreen from "./screens/Homescreen";
import Frontpage from './components/Frontpage';
import Indexpage from './components/Indexpage';
import Index from './components/chapters/Index';
import Exercise1Index from './components/chapters/exercises/exercise1/Exercise1Index';

function App() {
  return (
   <Router>
    <Routes>
        <Route path="/frontpage" element={<Frontpage />} />
        <Route path="/indexpage" element={<Indexpage />} />
        <Route path="/Chapter/:id" element={<Index />} />
        <Route path="/Exercise/:id" element={<Exercise1Index />} />
        <Route path="/" element={<Homescreen />} />
    </Routes>
   </Router>  
  );
}

export default App;
