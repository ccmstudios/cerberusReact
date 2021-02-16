import React from 'react'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import Home from '../pages/home'
import News from '../pages/news'
import Podcast from '../pages/podcast'
import Profile from '../pages/profile'
import Fantasy from '../pages/fantasy'



class Navbar extends React.Component{
    render(){
        return(

            <div>
                <Router>
 <Switch>
       
            <Route exact path='/home' component={Home} />
            <Route path='/fantasy' component={Fantasy} />
            <Route path='/podcast' component={Podcast} />
            <Route path='/news' component={News} />

            

            <nav id='navbar'>
                 <ul id='navbar'>
                     <Link to= '/'>
                <li>Home<li/>
                     </li></Link>
            <Link to='/fantasy'>
                <li>Fantasy</li>
            </Link>
            <Link to='/podcast'>
                <li>Podcast</li>
            </Link>
            <Link to='/news'>
                <li>Football HQ</li>
            </Link>

            </ul>
            </nav>
            </Switch>
</Router>
            </div>
        )
    }
}

export default Navbar;