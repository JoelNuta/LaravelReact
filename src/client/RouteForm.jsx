import React from 'react'
import LatLongFields from './LatLongFields';

export default class RouterForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            from : { lat : -34.55931882107318 , lng : -58.456907455139174},
            to : { lat : -34.58049629262017 , lng : -58.45130747926478}
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(id,field,value){
        this.setState( prevState => {
            const newField = Object.assign({},prevState[id],{[field]:value})
            return Object.assign({},prevState,{[id]:newField})
        })
    }

    render(){
        return (
            <div>
                <LatLongFields 
                    id="from" 
                    title="Desde" 
                    value={this.state.from}
                    onChange={this.onChange} />
                <LatLongFields 
                        id="to" 
                        title="Hasta" 
                        value={this.state.to}
                        onChange={this.onChange} />
                <button onClick={() => this.props.onFind(this.state)}>Buscar routa</button>
            </div>
        )
    }

}