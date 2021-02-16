import React from 'react'
import Navbar from '../components/navbar'
import Profile from '../pages/profile'
import Login from '../components/login'

class Header extends React.Component{
    render(){
        return(
            <div>
                    <div id='header' className="container-fluid d-flex content-justify-center">
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
            </div>
        )
    }
}

export default Header;