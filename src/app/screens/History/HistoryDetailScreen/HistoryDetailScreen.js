import React from 'react';
import { Text } from "react-native";
import Header from "./../../../components/Header";
import { Button, Container, Content, Icon } from "native-base";

import styles from './styles';

class HistoryDetailScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.goBack = this.goBack.bind(this);
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    goBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Container>
                <Header
                    title="HistoryDetailScreen"
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon name="arrow-round-back" style={{ color: '#fff' }} />
                        </Button>
                    }
                />
                <Content padder>
                    <Text>HistoryDetailScreen</Text>
                </Content>
            </Container>
        );
    }
}

export default HistoryDetailScreen;
