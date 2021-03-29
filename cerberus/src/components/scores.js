import { useState } from 'react'
import React from 'react'
import { render} from 'react-dom'
import Cardgroup from './cardgroup'
import Carousel from 'react-bootstrap/Carousel'
import Game from './game'

// fix the class extends into a Function component This will be where Thomas's API will target.


function Scores() {
  const Logo = "http://loodibee.com/wp-content/uploads/nfl-";
  const Teams = {
    ARI: `${Logo}arizona-cardinals-team-logo-2-768x768.png`,
    ATL: `${Logo}atlanta-falcons-team-logo-2-768x768.png`,
    BAL: `${Logo}baltimore-ravens-team-logo-2-768x768.png`,
    BUF: `${Logo}buffalo-bills-team-logo-2-768x768.png`,
    CAR: `${Logo}carolina-panthers-team-logo-2-768x768.png`,
    CHI: `${Logo}chicago-bears-team-logo-2-768x768.png`,
    CIN: `${Logo}cincinnati-bengals-team-logo-768x768.png`,
    CLE: `${Logo}cleveland-browns-team-logo-2-768x768.png`,
    DAL: `${Logo}dallas-cowboys-team-logo-2-768x768.png`,
    DET: `${Logo}detroit-lions-team-logo-2-768x768.png`,
    GB: `${Logo}green-bay-packers-team-logo-2-768x768.png`,
    IND: `${Logo}indianapolis-colts-team-logo-2-768x768.png`,
    KC: `${Logo}kansas-city-chiefs-team-logo-2-768x768.png`,
    LAR: `${Logo}los-angeles-rams-team-logo-2-768x768.png`,
    MIA: `${Logo}miami-dolphins-team-logo-2-768x768.png`,
    MIN: `${Logo}minnesota-vikings-team-logo-2-768x768.png`,
    NO: `${Logo}new-orleans-saints-team-logo-2-768x768.png`,
    NYG: `${Logo}new-york-giants-team-logo-2-768x768.png`,
    NYJ: `${Logo}new-york-jets-team-logo-768x768.png`,
    PIT: `${Logo}pittsburgh-steelers-team-logo-2-768x768.png`,
    TB: `${Logo}tampa-bay-buccaneers-team-logo-2-768x768.png`,
    TEN: `${Logo}tennessee-titans-team-logo-2-768x768.png`,
  }
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
      <Game
            time="2:32 - 2nd"
            drive="2nd & 10"
            yard="MIN 25"
            channel="NBC"
            away={{ name: "MIN", score: 24, logo: Teams.MIN }} 
            home={{ name: "DAL", score: 7, logo: Teams.DAL }}
            final={false}
          />

        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Game 
            away={{ name: "DET", score: 13, logo: Teams.DET }} 
            home={{ name: "CHI", score: 20, logo: Teams.CHI }}
            final={true}
          />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id='testcarousel'>
      <Game
            away={{ name: "BAL", score: 49, logo: Teams.BAL }} 
            home={{ name: "CIN", score: 13, logo: Teams.CIN }}
            final={true}
          />
          <Game
            away={{ name: "BAL", score: 49, logo: Teams.BAL }} 
            home={{ name: "CIN", score: 13, logo: Teams.CIN }}
            final={true}
          />
          <Game
            away={{ name: "BAL", score: 49, logo: Teams.BAL }} 
            home={{ name: "CIN", score: 13, logo: Teams.CIN }}
            final={true}
          />
          <Game
            away={{ name: "BAL", score: 49, logo: Teams.BAL }} 
            home={{ name: "CIN", score: 13, logo: Teams.CIN }}
            final={true}
          />
          <Game
            away={{ name: "BAL", score: 49, logo: Teams.BAL }} 
            home={{ name: "CIN", score: 13, logo: Teams.CIN }}
            final={true}
          />
          <Game
            away={{ name: "BAL", score: 49, logo: Teams.BAL }} 
            home={{ name: "CIN", score: 13, logo: Teams.CIN }}
            final={true}
          />

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