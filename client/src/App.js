import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router,Route,Switch }
 from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
      <Route path="/"> 
          <Home/>
      </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
