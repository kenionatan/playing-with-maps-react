import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyle from '../mapstyle/mapstyle';
import "./SimpleMap.css";

const AnyReactComponent = ({ text }) =>
    <div className="marker">
        {text}
    </div>;

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
            [
            <div className="categories">
                <div className="category">
                    Cidades
                </div>
                <div className="category">Restaurantes</div>
                <div className="category">Lojas</div>
                <div className="category">Bares e Cafeterias</div>
                <div className="category">Hoteis e Pousadas</div>
                <div className="category">Atrações da Cidade</div>
            </div>,

            <div style={{ height: '400px', width: '800px', marginTop: '38px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDPAmxUyhF4nSB8qBrg16bok1slDysO0gk' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={mapOptions}
                >

                    <AnyReactComponent
                        lat={-9.654459}
                        lng={-35.706921}
                        text="Hotel Ritz Suítes.."
                    />

                    <AnyReactComponent
                        lat={-9.642120}
                        lng={-35.703230}
                        text="Rex Jazz.."
                    />
                </GoogleMapReact>
            </div>
            ]
        );
    }
}

export default SimpleMap;