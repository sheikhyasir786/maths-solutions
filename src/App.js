import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Homescreen from "./screens/Homescreen";
import Frontpage from './components/Frontpage';
import Indexpage from './components/Indexpage';
import Index from './components/chapters/Index';
import Exercise1Index from './components/chapters/exercises/exercise1/Exercise1Index';

function App() {
  return (
   <Router>
    <Routes> {/* Use Routes instead of Switch */}
        <Route path="/frontpage" element={<Frontpage />} /> {/* Use element prop instead of component */}
        <Route path="/indexpage" element={<Indexpage />} /> {/* Use element prop instead of component */}
        <Route path="/Chapter/:id" element={<Index />} />

        {/* Exercise Indexing */}
        <Route path="/Exercise/:id" element={<Exercise1Index />} />


        <Route path="/" element={<Homescreen />} /> {/* Use element prop instead of component */}
    </Routes> {/* Use Routes instead of Switch */}
   </Router>  
  );
}
export default App;
