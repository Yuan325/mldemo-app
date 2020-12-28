import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import Main from './MainComponent';

function App() {
  return (
		<Router>
    <div className="App">
		<Main />
    </div>
		</Router>
  );
}

export default App;
