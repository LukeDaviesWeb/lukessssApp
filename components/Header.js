import React from 'react';
import {View, Text} from 'react-native';
import MenuIcon from './modules/MenuIcon';
import globalStyles from '../Styles/Styles';

const Header = ({title}) => {
    return (
        <View style={globalStyles.titleContainer}>
            <Text style={globalStyles.titleText}>{title}</Text>
            <MenuIcon />
        </View>
    );
};

Header.defaultProps = {
    title: 'Title not set',
};

export default Header;
