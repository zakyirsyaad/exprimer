import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './components/user/user';
import Home from './page/home/home';

function App() {
  return (
    <Router>
      <section className="container">
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="dashboard" element={<Home />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
