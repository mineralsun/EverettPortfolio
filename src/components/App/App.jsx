import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Portfolio from '../Portfolio/Portfolio.jsx';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
      <h1>Everett's Portfolio</h1>
      <Router>
        <Container fixed>
          <Route path="/" exact>
            <Portfolio />
          </Route>

          {/* Add Movie page */}
        </Container>
      </Router>
    </div>
  );
}


export default App;
