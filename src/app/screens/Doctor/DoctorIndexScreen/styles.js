import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    meta: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
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
        fontSize: 16,
        marginLeft: 5,
        color: '#f1c40f'
    },
    labelsIconLock: {
        fontSize: 14,
        marginLeft: 5,
        marginTop: 1,
        color: '#2c3e50'
    }
});
