import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Portfolio } from './Portfolio';
import { About } from './About';
import { AboutBeta } from './AboutBeta';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/beta" element={<AboutBeta />} />
      </Routes>
    </Router>
  )
};


