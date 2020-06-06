import {StyleSheet, Dimensions} from 'react-native';

const menuStyles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        backgroundColor: 'red',
        flexDirection: 'column',
        alignSelf: 'stretch',
        height: '100%',
        width: '100%',
        flex: 1,
        zIndex: 9,
        transform: [{translateX: Dimensions.get('window').width}],
    },
});

export default menuStyles;
