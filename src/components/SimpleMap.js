import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyle from '../mapstyle/mapstyle';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: -9.654459,
            lng: -35.706921
        },
        zoom: 14
    };

    render() {
        const mapOptions = {
            styles: mapStyle
        };

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '400px', width: '800px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAkGWCgbnd31w6kYrRZKQOy4VNqZa9JocM' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={mapOptions}
                >
                    <AnyReactComponent
                        lat={-9.654459}
                        lng={-35.706921}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;