import React from 'react';
import { Text, Image } from "react-native";
import Header from "./../../../components/Header";
import { Button, Container, Content, Icon } from "native-base";

import styles from './styles';

class HistoryIndexScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    openDrawer() {
        this.props.navigation.navigate('DrawerOpen');
    }

    render() {
        return (
            <Container>
                <Header
                    title="História"
                    left={
                        <Button transparent onPress={this.openDrawer.bind(this)}>
                            <Icon name="menu" style={{ color: '#fff' }} />
                        </Button>
                    }
                />
                <Content padder>
                    <Text>HistoryIndexScreen</Text>
                </Content>
            </Container>
        );
    }
}

HistoryIndexScreen.navigationOptions = {
    drawerLabel: "História termínov",
    drawerIcon: ({ tintColor }) => <Image style={{ width: 24, height: 24 }} source={require('./../../../../resources/assets/images/menu_icons/report.png')} />
};

export default HistoryIndexScreen;
