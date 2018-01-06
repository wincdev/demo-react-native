import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import styles from './styles';

/**
 * CallButton
 *
 * @param {Object} [style={}] - Component Style.
 * @param {*} [rest] - The rest of properties.
 * @returns {React.Component}
 */
const CallButton = ({ onPress, style = {}, ...rest }) => (
    <TouchableOpacity onPress={onPress} style={{ backgroundColor: '#2ecc71', padding: 25, borderRadius: 60, alignItems: 'center', justifyContent: 'center', marginVertical: 30 }}>
        <View>
            <Icon name="call" style={{ color: '#fff', textAlign: 'center', fontSize: 38, width: 38, height: 38 }} />
        </View>
    </TouchableOpacity>
);

/**
 * The displayName string is used in debugging messages.
 *
 * @see {@link https://reactjs.org/docs/react-component.html#displayname}
 */
CallButton.displayName = 'CallButton';

/**
 * Types of properties.
 *
 * @see {@link https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes}
 */
CallButton.propTypes = {};

export default CallButton;
