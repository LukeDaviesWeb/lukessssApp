import React from 'react';
import {View, Text} from 'react-native';
import MenuStyles from '../../Styles/components/modules/menu';

const MenuIcon = () => {
    return (
        <View style={MenuStyles.MenuIconContainer}>
            <View style={MenuStyles.MenuIconBar} />
            <View style={MenuStyles.MenuIconBar} />
            <View style={MenuStyles.MenuIconBar} />
        </View>
    );
};

export default MenuIcon;
