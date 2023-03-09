import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Rocket, Mission, MyProfile } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rocket />} />
        <Route index path="/Rocket" element={<Rocket />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Profile" element={<MyProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
