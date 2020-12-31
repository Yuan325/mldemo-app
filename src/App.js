import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import Main from './MainComponent';
import Header from './HeaderComponent';

function App() {
  return (
		<Router>
		<Header />
    <div className="App">
		<Main />
    </div>
		</Router>
  );
}

export default App;
