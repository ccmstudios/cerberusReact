
import './assets/css/App.css';
import './assets/css/App.scss';
import Header from './components/header'
import Home from './pages/home'
import Footer from './components/footer'
import Navbar from './components/navbar';
import Subheader from './components/subheader';
import Scores from './components/scores'
import News from './pages/news'
import Podcast from './pages/podcast'
import Profile from './pages/profile'
import Fantasy from './pages/fantasy'
import NFL from './pages/nfl'
import NCAAF from './pages/ncaaf'
import Stats from './pages/stats'
import Articles from './pages/articles'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import Livescores from './components/livescores';


function App() {
  return (
    <div className="App">
                      <Router>
      <Subheader/>
                        {/* <Livescores/> */}
      <Scores/>
 <Switch>
       

            <Route path='/fantasy' component={Fantasy} />
            <Route path='/nfl' component={NFL} />
            <Route path='/ncaaf' component={NCAAF} />
            <Route path='/stats' component={Stats} />
            <Route path='/articles' component={Articles} />
            <Route path='/news' component={News} />

<Header/>
<Home/>
<Footer/>
</Switch>
</Router>
    </div>
  );
}

export default App;
