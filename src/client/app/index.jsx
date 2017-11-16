import React from 'react';
import {render} from 'react-dom';
import {List} from './List.jsx';
import {AddTask} from './AddTask.jsx';

class App extends React.Component {

  constructor(props){
      super(props)
      
      this.state = {
          dinamicList : []
      }
  }
    
  componentDidMount(){
      this.updateList()
  }
    
  updateList(){
      fetch("/task")
        .then((resp)=>resp.json())
        .then((datos)=>{
          this.setState({
            dinamicList : datos.list
              })
          })
  }
    
  render () {
    
    return <div >
        <h1>Mis Tareas</h1>
        <hr/>
        <List dataList={this.state.dinamicList} />
        <hr/>
        <AddTask onUpdate={ ()=> this.updateList() }/>
    </div>;
  }
}

render(<App/>, document.getElementById('app'));
