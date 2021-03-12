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
                <h3><li>NFL<li/>
                     </li></h3></Link>
            <Link to='/fantasy'>
                <h3><li>NCAAF</li></h3>
            </Link>
            <Link to='/podcast'>
                <h3><li>Stats</li></h3>
            </Link>
            <Link to='/news'>
                <h3><li>Fantasy HQ</li></h3>
            </Link>
            <Link to='/news'>
                <h3><li>Articles</li></h3>
            </Link>
            <Link to='/news'>
                <h3><li>News</li></h3>
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