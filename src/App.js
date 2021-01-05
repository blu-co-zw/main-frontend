import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivacyPolicy from './PrivacyPolicy';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/bookkeeper/privacy-policy" component={PrivacyPolicy} exact />
      </Switch>
    </Router>
  );
}

function Home() {
  document.body.style.backgroundColor = "#7BD0FF"
  return (
    <div className="home">
      <div className="left-white-box"></div>
      <div className="right-white-box">
        <span className="number-three">03</span>
      </div>
      <span className="bottom-left-text">blu.co.zw</span>
    </div>
  );
}

export default App;
