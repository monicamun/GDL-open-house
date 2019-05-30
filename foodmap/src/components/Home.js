import React from "react";
import MapComponent from "./MapComponent";
import { Link } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


class Home extends React.Component{
    render(){
        const style ={
          width: "100vw",
          height: "50vh"
        }
        return(
            <Map style={style} google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
           
        </InfoWindow>
      </Map>
        )
    }
}

export default Home;
