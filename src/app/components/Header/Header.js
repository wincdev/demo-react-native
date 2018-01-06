import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { Body, Header as NativeHeader, Left, Right, Subtitle, Title, View } from 'native-base';

import styles from './styles';

/**
 * Component that renders as Header (navbar) for your screen.
 * 
 * @param {React.Component} [left] - The left part of the header.
 * @param {string} [title] - The title of the header.
 * @param {string} [subtitle] - The subtitle of the header.
 * @param {(Array.<React.Component>|React.Component)} [right] - The right part of the header.
 * @param {boolean} [hasStatusBar=true] - Determines whether the header will have offset from top of the screen on Android.
 * @param {Object} [style={}] - Component Style.
 * @param {*} [rest] - The rest of properties.
 * @returns {React.Component} - Header.
 */
const Header = ({ left = null, title = null, subtitle = null, right = null, hasStatusBar = true, style = {}, ...rest }) => (
    <View>
        {hasStatusBar && Platform.OS === 'android' && <View style={styles.statusBar} />}
        <NativeHeader noShadow style={[styles.default, style]} iosBarStyle="light-content" {...rest}>
            <Left>{left}</Left>
            <Body>
                {title && <Title style={{ color: '#fff' }}>{title}</Title>}
                {subtitle && <Subtitle style={{ color: '#fff' }}>{subtitle}</Subtitle>}
            </Body>
            <Right>{right}</Right>
        </NativeHeader>
    </View>
);

/**
 * Types of properties.
 */
Header.propTypes = {
    left: PropTypes.element,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    right: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]),
    style: NativeHeader.propTypes.style,
    hasStatusBar: PropTypes.bool
};

export default Header;
