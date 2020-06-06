import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from './ListItem';
import globalStyles from '../Styles/Styles';

const CompletedItems = ({completedItems, deleteItem}) => {
    return (
        <FlatList
            style={globalStyles.listWrapper}
            data={completedItems}
            renderItem={({item}) => (
                <ListItem item={item} deleteItem={deleteItem} />
            )}
            keyExtractor={(item) => item.id}
        />
    );
};

export default CompletedItems;
