import React from 'react';
import { View, Platform } from 'react-native';
import { Text, Picker, Item, Icon } from "native-base";

import styles from './styles';

const DoctorPicker = ({ style = {}, onChange, items, selected, ...rest }) => (
    <View style={{ width: '100%' }}>
        <View style={{ backgroundColor: '#ffffff', marginLeft: 20, position: 'relative', width: '90%', marginLeft: '5%', borderRadius: 2, marginRight: 20, marginBottom: 12 }}>
            <Picker
                iosHeader="Lekári"
                headerBackButtonText="Späť"
                mode="dialog"
                style={{ width: '100%' }}
                headerStyle={{ backgroundColor: "#9d0000" }}
                headerBackButtonTextStyle={{ color: "#fff" }}
                headerTitleStyle={{ color: "#fff" }}
                selectedValue={selected}
                onValueChange={(value) => { onChange(value) }}
            >
                {items.map((item, i) => {
                    return <Item key={i} label={item.name} value={item} />
                })}
            </Picker>
            {Platform.OS === 'ios' && <Icon name={'arrow-down'} style={{ position: 'absolute', right: 12, top: 8, color: '#9d0000' }} />}
        </View>
    </View>
);

/**
 * The displayName string is used in debugging messages.
 *
 * @see {@link https://reactjs.org/docs/react-component.html#displayname}
 */
DoctorPicker.displayName = 'DoctorPicker';

/**
 * Types of properties.
 *
 * @see {@link https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes}
 */
DoctorPicker.propTypes = {};

export default DoctorPicker;
