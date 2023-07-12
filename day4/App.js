import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Header/NavigationBar';
// import About from './Components/About/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavigationBar />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
