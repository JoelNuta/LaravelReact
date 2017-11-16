import React from 'react';

export class AddTask extends React.Component{

    constructor(prods){
        super(prods)
        
        this.state = {
            "newTaskName" : ""
        }
    }
    
    changeInput(e){
        const newValue = e.target.value
        this.setState({
            "newTaskName" : newValue
        })
    }
    
    addTask(){
        const data = {
            "newTaskName" : this.state.newTaskName
        }
        
        fetch("/task",
             {
                "method" : "POST",
                "body" : JSON.stringify(data),
                "headers" :  {
                    'Content-Type': 'application/json'
                }
            }).then((resp) => resp.json())
            .then((data) => {
                this.setState({"newTaskName" : ""})
                this.props.onUpdate()
            })
            .catch((err)=>console.error(err))
    }
    
    render(){
        const value1 = "Mi valor"
        
        return <div>
            <input 
                value={this.state.newTaskName}
                onChange={(e) => this.changeInput(e)}/>
            <button onClick={() => this.addTask()}>Agregar</button>
        </div>
    }
}