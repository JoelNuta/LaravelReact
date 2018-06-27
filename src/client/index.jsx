import React from 'react';
import {render} from 'react-dom';
import Map from './Map';
import RouterForm from './RouteForm';
import Result from './Result';

class App extends React.Component{

  constructor(props){
    super(props)
    this.findRoute = this.findRoute.bind(this)
    this.state = { route : {} }
  }


  findRoute(routeData){
    // console.log(routeData)
    fetch("/route",{
      method : "POST",
      headers : {
        "content-type":"application/json"
      },
      body : JSON.stringify(routeData)
    }).then(resp => resp.json())
      .then( route => this.setState({route}) )
      .catch(alert)
  }

  render(){
    return ( 
      <main>
        <RouterForm onFind={this.findRoute}/>
        <Result route={this.state.route} />
      </main>
    )
  }

}

render(<App/>, document.getElementById('app'));
