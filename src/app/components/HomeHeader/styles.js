import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', // aby pozadi nepretekalo kontejner
        backgroundColor: '#fff',
        position: 'relative',
        height: 200,
        backgroundColor: '#3498db'
    },
    headerMenu: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                top: 15,
            },
            android: {
                top: 30,
            },
        }),

        left: 0
    },
    headerBackground: {
        position: 'absolute',
        resizeMode: 'cover',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    headerLogo: {
        marginTop: 35,
        marginBottom: 15,
        height: 400, // vyska
        width: 180, // sirka loga
        resizeMode: 'contain',
    }
});
