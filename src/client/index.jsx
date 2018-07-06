import React from 'react';
import { render } from 'react-dom';
import Map from './Map';
import RouterForm from './RouteForm';
import Result from './Result';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.findRoute = this.findRoute.bind(this)
        this.updateMarkers = this.updateMarkers.bind(this)
        this.state = { route: {} }
        this.markers = []
    }


    updateMarkers (stops){
        this.markers.forEach(m=> m.setMap(null))
        this.markers = []
        const points = stops.map( s => ({lat:s.latitude,lng:s.longitude, id : s.id, title: s.name}))
        points.forEach( p => {    
            const marker = new google.maps.Marker({
                position: p,
                map: map,
                draggable: false,
                label: "" + p.id,
                title: "" + p.title
            })
            this.markers.push(marker)
        })
        
        const waypoints =  points.slice(1, -1).map( p => ({ location : p , stopover : false}))

        directionsService.route({
            origin: points[0],
            destination: points[points.length - 1],
            waypoints: waypoints,
            optimizeWaypoints: true,
            travelMode: 'DRIVING'
            },function(response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response)
                directionsDisplay.setOptions({
                    suppressMarkers: true
                });
            } else {
                console.error(response)
            }
        })
    }

    findRoute(routeData) {
        fetch("/route", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(routeData)
        }).then(resp => resp.json())
            .then(route => {
                this.setState({ route })
                this.updateMarkers(route)
            })
                // TODO dibujar la ruta en el mapa
            .catch(error => console.error(error.response.data))
    }

    render() {
        return (
            <main>
                <RouterForm onFind={this.findRoute} />
                <Result route={this.state.route} />
            </main>
        )
    }

}

render(<App />, document.getElementById('app'));

// Mapa de google maps

var directionsDisplay = new google.maps.DirectionsRenderer;
var directionsService = new google.maps.DirectionsService;

var bsas = { lat: -34.6037, lng: -58.3816 };

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: bsas
})
directionsDisplay.setMap(map);

/*
fetch("/allRoutes")
    .then(resp => resp.json())
    .catch(console.error)
*/