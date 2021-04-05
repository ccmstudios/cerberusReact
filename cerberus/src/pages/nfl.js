import React from 'react'
import Statstable from '../pages/statstable'
import Highlight from '../components/highlights'

class NFL extends React.Component{
    render(){
        return(
            <div>
<h1>This is where your NFL content goes!</h1>
<Statstable/>
<Highlight/>
            </div>
        )
    }
}

export default NFL;