import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Import HashRouter instead of BrowserRouter
import Homescreen from "./screens/Homescreen";
import Homepage from './components/Homepage';
import Indexpage from './components/Indexpage';
import Index from './components/chapters/Index';
import ChapterOneIndex from './components/chapters/exercises/exercise1/ChapterOneIndex';

function App() {
  return (
   <Router>
    <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/indexpage" element={<Indexpage />} />
        <Route path="/Chapter/:id" element={<Index />} />
        <Route path="/Exercise/:id" element={<ChapterOneIndex />} />
        <Route path="/" element={<Homescreen />} />
    </Routes>
   </Router>  
  );
}

export default App;
