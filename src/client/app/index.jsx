import React from 'react';
import {render} from 'react-dom';
import {List} from './List.jsx'
import {Counter} from './Counter.jsx'

class App extends React.Component {

  constructor(props){
      super(props)
      
      this.state = {
          dinamicList : []
      }
  }
    
  componentDidMount(){
      fetch("/datos")
        .then((resp)=>resp.json())
        .then((datos)=>{
          this.setState({
            dinamicList : datos.list
              })
          })
  }
    
  render () {
    const staticList = ["Esta","es","una","lista","estatica"]
    
    return <div >
        <List dataList={staticList} />
        <hr/>
        <List dataList={this.state.dinamicList} />
        <hr/>
        <Counter />
    </div>;
  }
}

render(<App/>, document.getElementById('app'));
