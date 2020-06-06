import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import MenuIcon from "./modules/MenuIcon";
import AddItemStyles from "../Styles/components/AddItem";
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");

  const onChange = (value) => setText(value);

  const addItemFunc = (text) => {
    addItem(text);
    setText("");
  };

  return (
    <View>
      <TextInput
        placeholder="Add Item.. "
        style={AddItemStyles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity
        style={AddItemStyles.btn}
        onPress={() => addItemFunc(text)}
      >
        <Text style={AddItemStyles.btnText}>
          {/* <Icon name="plus" size={18} /> */}
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;
