import React from 'react';
import {Text} from 'react-native';
import globalStyles from '../Styles/Styles';

const IntroText = ({text}) => {
    return <Text style={globalStyles.introText}>{text}</Text>;
};

export default IntroText;
