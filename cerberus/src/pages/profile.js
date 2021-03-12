import React from 'react'
import Cerberus from '../assets/images/cerberus.png'
class Profile extends React.Component{
    render(){
        return(
            <div id='profile'>
               <img id='logo' src={Cerberus}/>

            </div>
        )
    }
}

export default Profile;