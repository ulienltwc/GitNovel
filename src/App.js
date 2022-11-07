import './App.css';
import Header from './components/Header';
import RogIn from './components/RogIn';
import TopPage from './components/TopPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles'


function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
       primary: {
         main: '#FD91AB',
         light: '#ffa2a3',
         dark: '#d6565c'
        }
      }  
  })
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/RogIn" element={<RogIn />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>

    
  );
}

export default App;
