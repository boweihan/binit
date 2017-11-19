import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import TinyButton from '../components/TinyButton';

class MapFooter extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rows}>
                    <View style={{ flex: 1 }} />
                    <View style={styles.row}>
                        <TinyButton
                            image={require('../assets/images/add.png')}
                            disabled={false}
                            onPress={() => this.props.navigation.navigate('Rubbish')}
                            shadow={true}
                        />
                    </View>
                    <View style={styles.row}>
                        <TinyButton
                            image={require('../assets/images/search.png')}
                            disabled={false}
                            onPress={() => this.props.navigation.navigate('Home')}
                            shadow={true}
                        />
                    </View>
                    <View style={styles.row}>
                        <TinyButton
                            image={require('../assets/images/info.png')}
                            disabled={false}
                            onPress={() => this.props.navigation.navigate('Home')}
                            shadow={true}
                        />
                    </View>
                    <View style={styles.row}>
                        <TinyButton
                            image={require('../assets/images/contact.png')}
                            disabled={false}
                            onPress={() => this.props.navigation.navigate('Home')}
                            shadow={true}
                        />
                    </View>
                    <View style={{ flex: 1 }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: Layout.window.width,
        backgroundColor: Colors.green1,
    },
    rows: {
        flex: 1,
        flexDirection: 'row',
    },
    row: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        paddingTop: 10,
    },
});

MapFooter.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default MapFooter;
