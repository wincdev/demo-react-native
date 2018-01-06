import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import HomeHeader from './../HomeHeader';

import styles from './styles';

/**
 * DrawerHeader
 *
 * @param {Object} [style={}] - Component Style.
 * @param {*} [rest] - The rest of properties.
 * @returns {React.Component}
 */
const DrawerHeader = ({ style = {}, ...rest }) => (
    <HomeHeader style={{ height: 120, marginBottom: 8, backgroundColor: 'white' }}>
    </HomeHeader>
);

/**
 * The displayName string is used in debugging messages.
 *
 * @see {@link https://reactjs.org/docs/react-component.html#displayname}
 */
DrawerHeader.displayName = 'DrawerHeader';

/**
 * Types of properties.
 *
 * @see {@link https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes}
 */
DrawerHeader.propTypes = {};

export default DrawerHeader;
