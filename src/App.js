import './App.css';
import Header from './components/Header';
import RogIn from './components/RogIn';
import TopPage from './components/TopPage';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/RogIn" element={<RogIn />} />
        <Route path="/SignUp" element={<SignUp />} />

        </Routes>
      </div>
    </Router>  
  );
}

export default App;
