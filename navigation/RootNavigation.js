import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import GuestLoginScreen from '../screens/GuestLoginScreen';
import TermsAndConditionsScreen from '../screens/TermsAndConditionsScreen';

import registerForPushNotificationsAsync from '../libs/registerForPushNotificationsAsync';

// Main App
const RootStackNavigator = StackNavigator({
    Home: { screen: LoginScreen },
    GuestLogin: { screen: GuestLoginScreen },
    TOC: { screen: TermsAndConditionsScreen },
}, { headerMode: 'none' });

export default class RootNavigator extends React.Component {
    componentDidMount() {
        this._notificationSubscription = this._registerForPushNotifications();
    }

    componentWillUnmount() {
        this._notificationSubscription && this._notificationSubscription.remove();
    }

    _registerForPushNotifications() {
        // Send our push token over to our backend so we can receive notifications
        // You can comment the following line out if you want to stop receiving
        // a notification every time you open the app. Check out the source
        // for this function in libs/registerForPushNotificationsAsync.js
        registerForPushNotificationsAsync();

        // Watch for incoming notifications
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }

    _handleNotification = ({ origin, data }) => {
        console.log( // eslint-disable-line
            `Push notification ${origin} with data: ${JSON.stringify(data)}`,
        );
    };

    render() {
        return <RootStackNavigator />;
    }
}
