
import './assets/css/App.css';
import Header from './components/header'
import Home from './pages/home'
import Footer from './components/footer'
import Navbar from './components/navbar';
import Subheader from './components/subheader';

function App() {
  return (
    <div className="App">
      <Subheader/>
<Header/>
<Home/>
<Footer/>
    </div>
  );
}

export default App;
