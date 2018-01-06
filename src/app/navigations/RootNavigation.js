import React from 'react';
import { DrawerItems, DrawerNavigator } from "react-navigation";
import { ScrollView } from "react-native";

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import DoctorNavigation from './DoctorNavigation';
import HistoryNavigation from './HistoryNavigation';
import DrawerHeader from '../components/DrawerHeader';
import SettingsScreen from '../screens/SettingsScreen';

const config = {
    contentComponent: props => (
        <ScrollView contentContainerStyle={{ paddingBottom: 25, backgroundColor: '#ecf0f1', flex: 1 }}>
            <DrawerHeader />
            <DrawerItems {...props} />
        </ScrollView>
    ),
    contentOptions: {
        activeTintColor: '#9d0000'
    },
};

const RootNavigation = DrawerNavigator({
    "home": { screen: HomeScreen },
    "doctor": { screen: DoctorNavigation },
    "history": { screen: HistoryNavigation },
    "settings": { screen: SettingsScreen },
    "about": { screen: AboutScreen },
}, config);

export default RootNavigation;