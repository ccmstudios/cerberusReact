import React from 'react'
import Cerberus from '../assets/images/cerberus.png'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import App from '../App'
 

class Profile extends React.Component{
    render(){
        return(
            <div id='profile'>
                <Router>
 <Switch>
       
            <Route exact path='/' component={App} />

            <Link to= '/'>
            <img id='logo' alt="logo" src={Cerberus}/>
                </Link>
               
</Switch>
</Router>
            </div>
        )
    }
}

export default Profile;