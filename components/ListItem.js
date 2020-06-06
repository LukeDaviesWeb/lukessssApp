import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ListItemStyles from "../Styles/components/ListItem";
import TabBarIcon from "../components/TabBarIcon";
import Colors from "../constants/Colors";

const ListItem = ({ item, deleteItem, updateItem, removeEditBtn }) => {
  const [text, setText] = useState("");
  const [editState, setEditState] = useState(false);

  const onChange = (value) => setText(value);

  const update = () => {
    setEditState(!editState);
  };

  const updateIconOnPress = () => {
    updateItem({ id: item.id, text: text });
    setEditState(!editState);
  };

  return (
    <TouchableOpacity style={ListItemStyles.listItem}>
      <View style={ListItemStyles.view}>
        {editState ? (
          <TextInput
            placeholder="Update Item.. "
            style={ListItemStyles.input}
            onChangeText={onChange}
          />
        ) : (
          <Text style={ListItemStyles.text} id={item.id}>
            {item.text}
          </Text>
        )}
        {editState ? (
          <View style={ListItemStyles.iconWrapper}>
            <Ionicons
              name={"ios-add"}
              size={25}
              style={{ marginTop: 4 }}
              color={Colors.tabIconDefault}
              onPress={() => updateIconOnPress()}
            />
          </View>
        ) : (
          <View style={ListItemStyles.iconWrapper}>
            {removeEditBtn && (
              <Ionicons
                name={"ios-construct"}
                size={20}
                style={{ marginTop: 4 }}
                color={Colors.tabIconDefault}
                onPress={() => update()}
              />
            )}

            <Ionicons
              name={"ios-close"}
              size={30}
              style={{ marginBottom: -3 }}
              color={Colors.tabIconDefault}
              onPress={() => deleteItem(item)}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
