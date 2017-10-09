import React, { Component } from 'react';
import { Link } from 'react-router';

class OppsCard extends Component {
  render(){
    return(
      <div>
      <h3>Here is the list of available opps!!!</h3>
        <ul>
          {this.props.oppsData.map((opps, i) => <li key={i}><Link to={`/opportunity/${opps.id}`}>{opps.name}</Link></li>)}
        </ul>
      </div>
    )
  }
}


export default OppsCard;
