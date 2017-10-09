import React, { Component } from 'react';
import { Link } from 'react-router';

class OppsPage extends Component {

  constructor(props){
  super(props);
  this.state = {
    oppsData: [
    {	id: 1,
    	name: 'Greenpeace Philippines',
    	description:  'An active volunteer organization that campaigns for their mission to save the environment.',
    	skills: ['Project Management', 'Presentation Skills', 'Background in Science'],
    	interests: ['Environmental Work'],
    	sdg: ['13 - Climate Action' , '15 - Life on Land'],
    	startdate: '12 November 2017',
    	enddate: '12 May 2018'
    },
    {	id: 2,
    	name: 'Volunteer Youth Leaders for Health-Philippines',
    	description: 'A service-oriented organization that aims to empower the Filipino Youth for health.',
    	skills: ['Project Management', 'Presentation Skills', 'Background in Healthcare Management/Medicine/Nutrition'],
    	interests: ['Community Development'],
    	sdg: ['3 - Good Health and Well-Being'],
    	startdate: '22 October 2017',
    	enddate: '22 April 2018'
    },
    {	id: 3,
    	name: 'Love Yourself',
    	description: 'A volunteer organization for the youth and the LGBT-MSM that aims to promote loving oneself.',
    	skills: ['Project Management', 'Presentation Skills', 'Background in Psychology/Humanities'],
    	interests: ['Community Development', 'LGBT Rights and Issues'],
    	sdg: ['5 - Gender Equality'],
    	startdate: '05 Jan 2018',
    	enddate: '05 July 2018'
    },
    {	id: 4,
    	name: 'PinoyME Foundation',
    	description: 'Started out as a social consortium to support the growth of Microfinance Institution (MFIs) before becoming a social investment banker for microentrepreneurs.',
    	skills: ['Project Management', 'Presentation Skills', 'Background in Business Management/Economics'],
    	interests: ['Community Development' ],
    	sdg: ['8 - Decent Worth and Economic Growth', '9 - Industry, Innovation, and Infrastucture'],
    	startdate: '09 February 2018',
    	enddate: '09 August 2018'
    },
    {	id: 5,
    	name: 'United Nations World Food Programme',
    	description:  'the leading humanitarian organization which addresses the issue of hunger.',
    	skills: ['Project Management', 'Presentation Skills', 'Background in Healthcare Management/Medicine/Nutrition'],
    	interests: ['Community Development'],
    	sdg: ['2 - Zero Hunger'],
    	startdate: '10 March 2018',
    	enddate: '10 September 2018'
    }
  ]}
}

  render(){
    var xthis = this;
    var oppInfo = this.state.oppsData.find(function (opp) {
      return (opp.id == xthis.props.params.id)
    })

    console.log(oppInfo);

    return(
      <div>
      <h3>Here is information about the opportunity!!!</h3>
      Project ID: {this.props.params.id}
      <br/>
      {oppInfo.name} - {oppInfo.description}
      <br/>
      <Link to="/">Back</Link>
      </div>
    )

  }
}

export default OppsPage;
