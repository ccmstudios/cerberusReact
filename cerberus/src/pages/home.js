import React from 'react'
import Highlight from '../components/highlights';
import Schedule from '../components/schedules';
import Featuremain from '../components/featuremain'
import Featurevideo from '../components/featurevideo'
import Featurepodcast from '../components/featurepodcast'
import About from '../components/about';

class Home extends React.Component{
    render(){
        return(
            <div id='home'>
                <Schedule/>
                <h1>This is where your content goes</h1>
                <Highlight/>
                <Featurevideo/>
                <Featuremain/>
                <Featurepodcast/>
                <About/>
                Feature
                <p>Insert content into this section here</p>
            </div>
        )
    }
}

export default Home;