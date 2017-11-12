import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import RootNavigation from './navigation/RootNavigation';
import ConfigureStore from './redux/store';
import Colors from './constants/Colors';

class App extends React.Component {
    state = {
        isLoadingComplete: false,
    };

    _loadResourcesAsync = async () =>
        Promise.all([
            Asset.loadAsync([
                require('./assets/images/logo.png'),
                require('./assets/images/footer.png'),
            ]),
            Font.loadAsync([
                Ionicons.font,
                { 'os bold': require('./assets/fonts/OpenSans-Bold.ttf') },
                { 'os extra bold': require('./assets/fonts/OpenSans-ExtraBold.ttf') },
                { 'os semi bold': require('./assets/fonts/OpenSans-SemiBold.ttf') },
                { os: require('./assets/fonts/OpenSans-Regular.ttf') },
                { 'os light': require('./assets/fonts/OpenSans-Light.ttf') },
            ]),
        ]);

    _handleLoadingError = (error) => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error); // eslint-disable-line
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        }
        return (
            // Set the initial state as an empty object for now
            <Provider store={ConfigureStore({})}>
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
                    <RootNavigation />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.green2,
    },
});

App.propTypes = {
    skipLoadingScreen: PropTypes.bool,
};

export default App;
