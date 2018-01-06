import React from 'react';
import CallButton from './../../components/CallButton';
import HomeHeader from "./../../components/HomeHeader";
import DoctorPicker from './../../components/DoctorPicker';
import BusinessCard from './../../components/BusinessCard';
import { Text, Image, TouchableOpacity, Linking } from "react-native";
import { Button, Container, Content, Icon, View, Card, CardItem, Body, Left, Thumbnail, Right } from "native-base";

import list from './list';
import styles from './styles';

const USER_NAME = "Jean Doe";
const USER_PHONE = "+421944123458";
const USER_BIRTHDAY = "18.06.1992";
const USER_EMAIL = "john@gmail.com";

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: list,
            selected: list[0],
            mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }
        };
    }

    openDrawer() {
        this.props.navigation.navigate('DrawerOpen');
    }

    onChange(selected) {
        this.setState({ selected: selected });
    }

    onCommunication() { }

    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };

    onCall() {
        // Send information to server
        fetch('http://codingbot.sk/api/customer-account', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "telephone_number": USER_PHONE,
                "name": USER_NAME,
                "birthday": USER_BIRTHDAY,
                "email": USER_EMAIL
            })
        });

        // Make the call
        // Linking.openURL(`tel:${this.state.selected.phone || this.state.selected.mobil}`);
        Linking.openURL(`tel:+441138681930`);
    }

    render() {
        const { items, selected, selectedItem } = this.state;
        return (
            <Container>
                <HomeHeader hasMenuIcon menuAction={this.openDrawer.bind(this)} style={{ backgroundColor: '#9d0000' }}>
                    <DoctorPicker items={items} selected={selected} onChange={this.onChange.bind(this)} />
                </HomeHeader>
                <Content padder style={{ backgroundColor: '#ecf0f1' }}>
                    <BusinessCard item={selected} />
                    <View style={{ alignItems: 'center', justifyContent: 'center', flexGrow: 1, justifyContent: 'flex-end' }}>
                        <CallButton onPress={this.onCall.bind(this)} />
                    </View>
                </Content>
            </Container>
        );
    }
}

HomeScreen.navigationOptions = {
    drawerLabel: "MilkAgro",
    drawerIcon: ({ tintColor }) => <Image style={{ width: 24, height: 24 }} source={require('./../../../resources/assets/images/menu_icons/call.png')} />
};

export default HomeScreen;
