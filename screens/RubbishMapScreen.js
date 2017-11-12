import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Location, Permissions,  MapView } from 'expo';
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
            latitudeDelta: 0,
            longitudeDelta: 0,
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
                latitudeDelta: 0.1, // hardcode zoom levels just for example
                longitudeDelta: 0.1,
            },
        });
    };

    addMarker = (info) => {
        console.log("BOOP");
        console.log(info);
    }

    render() {
        return (
            <View style={styles.container}>
                <MapNav title={Localization.rubbishMap} />
                <MapView
                    // onPress={info => this.addMarker(info)}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    style={styles.map}
                    initialRegion={this.state.region}
                >
                    {this.state.markers.map((marker) => {
                        <MapView.Marker
                            coordinate={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                            }}
                            title="title"
                            description="description"
                        />;
                    })}
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
        flex: 1,
    },
    map: {
        position: 'absolute',
        height: Layout.window.height,
        width: Layout.window.width,
        zIndex: -1,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
    },
});

RubbishMap.propTypes = {
    navigation: PropTypes.object.isRequired,
};
