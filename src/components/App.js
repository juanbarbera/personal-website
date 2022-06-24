import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Portfolio } from './Portfolio';
import { About } from './About';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  )
};
