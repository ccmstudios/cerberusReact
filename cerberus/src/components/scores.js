import { useState } from 'react'
import React from 'react'
import { render} from 'react-dom'
import Cardgroup from './cardgroup'
import Carousel from 'react-bootstrap/Carousel'


// fix the class extends into a Function component This will be where Thomas's API will target.


function Scores() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
<div id='scores'>
<h1 id='scorestext'>NFL Scores</h1>    
<br></br>
<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <Cardgroup game='Atlanta Falcons vs Carolina panthers' 
        home ='40' 
        away='39'
        awaylogo='https://images.search.yahoo.com/search/images;_ylt=Awr9ImAca1dgnwkAFwhXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZANBMDYxNV8xBHNlYwNwaXZz?p=atlanta+falcons+logo&fr2=piv-web&fr=mcafee#id=0&iurl=http%3A%2F%2Fflytothegame.com%2Fwp-content%2Fuploads%2F2014%2F07%2FAtlanta-Falcons-team-logo.png&action=click' 
        homelogo ='https://images.search.yahoo.com/search/images;_ylt=Awr9CJ7galdgaW4AUdRXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZANBMDYxNV8xBHNlYwNwaXZz?p=carolina+panthers+logo&fr2=piv-web&fr=mcafee#id=6&iurl=https%3A%2F%2Fimages.homedepot-static.com%2FproductImages%2Fb20fe78a-f543-4a3f-82df-e5f9acd7e363%2Fsvn%2Fblacks-wall-decals-fh89-00496-64_1000.jpg&action=click' 
        date = 'Dec 10th 2021'/>

        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Cardgroup/>

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Cardgroup/>

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
);
    }

  // render(<Scores />);

export default Scores;