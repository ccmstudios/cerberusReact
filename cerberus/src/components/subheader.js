import React from 'react'
import Navbar from './navbar'
import Login from './login'
import Profile from '../pages/profile'

class Subheader extends React.Component{
    render(){
        return(
            <div>
                 <div className='row'>
                <div id='loginDiv'className='col-md-2'>
<Login/>                </div>
                <div className='col-md-8'>
<Navbar/>
                </div>
                <div id='profileDiv'className='col-md-2'>
<Profile/>
                </div>
            </div>
            </div>
        )
    }
}

export default Subheader;