import React from 'react';
import Header from "./../../../components/Header";
import { Text, Image, Linking } from "react-native";

import { Button, Container, Content, Icon, View, Card, CardItem, Body, Left, Thumbnail, Right } from "native-base";

import list from './list';
import styles from './styles';

class DoctorIndexScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: list
        };
    }

    openDrawer() {
        this.props.navigation.navigate('DrawerOpen');
    }

    render() {
        return (
            <Container>
                <Header
                    title="Lekári"
                    left={
                        <Button transparent onPress={this.openDrawer.bind(this)}>
                            <Icon name="menu" style={{ color: '#fff' }} />
                        </Button>
                    }
                    right={
                        <Button transparent>
                            <Icon name="search" style={{ color: '#fff' }} />
                        </Button>
                    }
                />
                <Content padder>


                    {this.state.items.map((item, i) => (
                        <Card style={styles.default} key={i}>
                            <View>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require('./../../../../resources/assets/images/customer-placeholder.png')} />
                                        <Body style={styles.body}>
                                            <View style={styles.labels}>
                                            </View>
                                            <View style={styles.name}>
                                                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                            </View>
                                            <View style={styles.meta}>
                                                <Text note>{item.specialization}</Text>
                                            </View>
                                            <View style={styles.controls}>
                                                <Button transparent onPress={() => Linking.openURL('mailto:email')}>
                                                    <Icon name="mail" style={{ color: '#9d0000' }} />
                                                </Button>
                                                <Button transparent onPress={() => Linking.openURL('tel:+123456789')}>
                                                    <Icon name="call" style={{ color: '#9d0000' }} />
                                                </Button>
                                                <Button transparent onPress={() => Linking.openURL('sms:+123456789')}>
                                                    <Icon name="text" style={{ color: '#9d0000' }} />
                                                </Button>
                                            </View>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </View>
                        </Card>
                    ))}

                </Content>
            </Container>
        );
    }
}

DoctorIndexScreen.navigationOptions = {
    drawerLabel: "Lekári",
    drawerIcon: ({ tintColor }) => <Image style={{ width: 24, height: 24 }} source={require('./../../../../resources/assets/images/menu_icons/doctors.png')} />
};

export default DoctorIndexScreen;
