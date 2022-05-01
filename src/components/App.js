import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Portfolio } from './Portfolio';
import { About } from './About';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
};
