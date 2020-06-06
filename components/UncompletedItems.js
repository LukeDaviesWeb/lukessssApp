import React from "react";
import { View, FlatList } from "react-native";
import ListItem from "./ListItem";
import globalStyles from "../Styles/Styles";

const UncompletedItems = ({ items, deleteItem, updateItem }) => {
  return (
    <View>
      <FlatList
        style={globalStyles.listWrapper}
        data={items}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            deleteItem={deleteItem}
            updateItem={updateItem}
            removeEditBtn={true}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default UncompletedItems;
