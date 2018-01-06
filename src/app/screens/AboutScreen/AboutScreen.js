import React from 'react';
import { Text, Image } from "react-native";
import Header from "./../../components/Header";
import { Button, Container, Content, Icon } from "native-base";

import styles from './styles';

class AboutScreen extends React.Component {

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
                    title="O aplikácií"
                    left={
                        <Button transparent onPress={this.openDrawer.bind(this)}>
                            <Icon name="menu" style={{ color: '#fff' }} />
                        </Button>
                    }
                />
                <Content padder>
                    <Text>AboutScreen</Text>
                </Content>
            </Container>
        );
    }
}

AboutScreen.navigationOptions = {
    drawerLabel: "O aplikácií",
    drawerIcon: ({ tintColor }) => <Image style={{ width: 24, height: 24 }} source={require('./../../../resources/assets/images/menu_icons/about.png')} />
};
export default AboutScreen;
