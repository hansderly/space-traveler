import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Rocket from './pages/Rocket/Rocket';
import Mission from './pages/Mission/Mission';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rocket />} />
        <Route index path="/Rocket" element={<Rocket />} />
        <Route path="/Mission" element={<Mission />} />
      </Route>
    </Routes>
  );
}

export default App;
