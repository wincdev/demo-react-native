import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    meta: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    body: {
        marginLeft: 20
    },
    controls: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    labels: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    labelsIconHeart: {
        color: '#e74c3c',
        fontSize: 13, marginLeft: 5,
        marginTop: 2
    },
    labelsIconStar: {
        fontSize: 12,
        marginLeft: 5,
        color: '#2ecc71'
    },
    labelsIconLock: {
        fontSize: 14,
        marginLeft: 5,
        marginTop: 1,
        color: '#2c3e50'
    }
});
