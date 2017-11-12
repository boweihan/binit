import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Location, Permissions, MapView } from 'expo';
import { StyleSheet, View, Image, Text } from 'react-native';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import Localization from '../constants/Localization';
import MapNav from '../components/MapNav';
import MapFooter from '../components/MapFooter';

export default class RubbishMap extends Component {
    state = {
        region: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 100,
            longitudeDelta: 100,
        },
        markers: [],
    }

    componentWillMount() {
        this._getLocationAsync();
    }

    _getLocationAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            // this.setState({
            //     errorMessage: 'Permission to access location was denied',
            // });
        }

        const location = await Location.getCurrentPositionAsync({});
        this.setState({
            region: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 100,
                longitudeDelta: 100,
            },
        });
    };

    addMarker = (e) => {
        console.log(e.nativeEvent);
        const m = this.state.markers;
        m.push({
            coordinate: e.nativeEvent.coordinate,
        });
        this.setState({ markers: m });
    }

    render() {
        return (
            <View style={styles.container}>
                <MapNav title={Localization.rubbishMap} />
                <MapView
                    onPress={e => this.addMarker(e)}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    key={this.state.markers}
                    provider={MapView.PROVIDER_GOOGLE}
                    style={styles.map}
                    region={this.state.region}
                    // customMapStyle={mapStyle}
                >
                    {this.state.markers.map((marker) => {
                        console.log(this.state.markers);
                        return (
                            <MapView.Marker
                                coordinate={{
                                    latitude: marker.coordinate.latitude,
                                    longitude: marker.coordinate.longitude,
                                }}
                                title="title"
                                description="description"
                            />
                        );
                    })}
                    <MapView.Marker
                        coordinate={{
                            latitude: 62,
                            longitude: 65,
                        }}
                        title="title"
                        description="description"
                    />
                </MapView>
                <View style={styles.footer}>
                    <MapFooter />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        flex: 1,
    },
    map: {
        flex: 1,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
    },
});

RubbishMap.propTypes = {
    navigation: PropTypes.object.isRequired,
};
