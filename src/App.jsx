import './App.css';
import Header from './components/Header';
import RogIn from './pages/RogIn';
import TopPage from './pages/TopPage';
import SignUp from './pages/SignUp';
import MyAccount from './pages/MyAccount'
import SearchResult from './pages/SearchResult';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NovelDetail from './pages/NovelDetail';




function App() {
  
  return (
    <Router>
      <div className="App" backgroundColor={"pink"}>
        <Header />
        <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/RogIn" element={<RogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path='/SearchResult' element={<SearchResult />} />
        <Route path='/NovelDetail' element={<NovelDetail />} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
