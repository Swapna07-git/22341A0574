import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShortenURLForm from './components/ShortenURLForm';
import RedirectHandler from './components/RedirectHandler';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShortenURLForm />} />
        <Route path="/:shortcode" element={<RedirectHandler />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
