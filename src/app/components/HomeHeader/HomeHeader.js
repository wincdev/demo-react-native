import React from 'react';
import { View, StyleSheet, Image, Text } from "react-native";
import { Button, Icon } from "native-base";

import styles from './styles';

const resourceHeaderBackground = require('./../../../resources/assets/images/header.png');
const resourceHeaderLogo = require('./../../../resources/assets/images/icon/logo.png');

const ApplicationHeader = ({ hasMenuIcon, menuAction, style, children }) => (
    <View style={[styles.header, style]}>
        {/* <Image style={styles.headerBackground} source={resourceHeaderBackground} /> */}
        <Image style={styles.headerLogo} source={resourceHeaderLogo}/>
        {hasMenuIcon && (
            <Button style={styles.headerMenu} transparent onPress={menuAction}>
                <Icon name='menu' style={{ color: '#fff', fontSize: 32 }} />
            </Button>
        )}
        {children}
    </View>
);

export default ApplicationHeader;