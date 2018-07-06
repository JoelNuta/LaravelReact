import React from 'react'


export default class Map extends React.Component{

    constructor(props){
        super(props)
        this.markers = []
    }

    showMap(elm){
        this.map = new google.maps.Map(elm,{
            zoom: 12,
            center :  {lat: -34.6037, lng: -58.3816} // Bs As
        })
        this.map.addListener("click",(event)=>{
            const cords = event.latLng
            this.props.selectMapPoint({lat:cords.lat(),lng : cords.lng()})
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        nextProps.markers.forEach( marker => {
            
        })
        return false;
    }

    render(){
        return <div style={{height:500,width:500}} ref={elm=>this.showMap(elm)}></div>
    }
}
