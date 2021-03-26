import React from 'react'
import Table from 'react-bootstrap/Table'


const Stats = props =>{

        return(
            <div>
<Table striped bordered hover variant="light">
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th colSpan='3'>Passing</th>
      <th colSpan='2'>Rushing</th>
      <th colSpan='3'>Receiving</th>
      <th colSpan='4'>Defense</th>
      <th></th>
      <th> </th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <thead>
    <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Team</th>
      <th>Position</th>
      <th>Week</th>
      <th>Opponent</th>
      <th>Yards</th>
      <th>Touchdowns</th>
      <th>Interceptions</th>
      <th>Rush Yards</th>
      <th>Rush TD's</th>
      <th>Receptions</th>
      <th>Rec Yards</th>
      <th>Rec Td's</th>
      <th>Sacks</th>
      <th>Interceptions</th>
      <th>Force Fumble</th>
      <th>Fumble Recovery</th>
      <th>FPTs/G</th>
      <th>FPTs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{props.rank}</td>
      <td>{props.name}</td>
      <td>{props.team}</td>
      <td>{props.position}</td>
      <td>{props.week}</td>
      <td>{props.opponent}</td>
      <td>{props.passyards}</td>
      <td>{props.passtd}</td>
      <td>{props.passint}</td>
      <td>{props.rushyards}</td>
      <td>{props.rushtd}</td>
      <td>{props.receptions}</td>
      <td>{props.recyards}</td>
      <td>{props.rectd}</td>
      <td>{props.sacks}</td>
      <td>{props.defints}</td>
      <td>{props.forcefum}</td>
      <td>{props.fumrecovery}</td>
      <td>{props.fantasygame}</td>
      <td>{props.fantasypoints}</td>

    </tr>
  </tbody>
</Table>            </div>
        )
    }

export default Stats;