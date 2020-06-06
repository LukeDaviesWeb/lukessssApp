import React, { useState } from "react";
import { View, Alert } from "react-native";

import AddItem from "../components/AddItem";
import CompletedItems from "../components/CompletedItems";
import UncompletedItems from "../components/UncompletedItems";
import IntroText from "../components/IntroText";

import globalStyles from "../Styles/Styles";

const TodoScreen = () => {
  const [items, setItems] = useState([
    { id: Math.random(), text: "Login" },
    { id: Math.random(), text: "home" },
    { id: Math.random(), text: "guitar notes page" },
    { id: Math.random(), text: "Resume" },
    { id: Math.random(), text: "FireBase" },
    { id: Math.random(), text: "on tap do show more information" },
    { id: Math.random(), text: "reorder drag" },
    { id: Math.random(), text: "google calendar integration" },
  ]);

  const [completedItems, setCompletedItems] = useState([]);

  const deleteItem = (item) => {
    item.complete
      ? setCompletedItems((prevItems) => {
          return prevItems.filter((prevItem) => prevItem.id !== item.id);
        })
      : (setItems((prevItems) => {
          return prevItems.filter((prevItem) => prevItem.id !== item.id);
        }),
        setCompletedItems((prevItems) => {
          return [
            { id: Math.random(), text: item.text, complete: true },
            ...prevItems,
          ];
        }));
  };

  const addItem = (text) => {
    !text
      ? Alert.alert("Uh Oh", "Please enter an Item", { text: "OK" })
      : setItems((prevItems) => {
          return [{ id: Math.random(), text: text }, ...prevItems];
        });
  };

  const updateItem = (clickedItem) => {
    if (clickedItem.text === "") {
      Alert.alert("Uh Oh", "Please update the item", { text: "OK" });
    } else {
      let spreadItems = [...items];
      let itemIndex = getIndex(clickedItem.id, spreadItems, "id");

      spreadItems[itemIndex].text = clickedItem.text;

      setItems((prevItems) => {
        return [...spreadItems];
      });
    }
  };

  const getIndex = (value, arr, prop) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1;
  };

  return (
    <View style={globalStyles.contentContainer}>
      <IntroText
        text="This is a first crack at a native App, theres lots to do,
                have a look below"
      />

      <AddItem addItem={addItem} />

      <UncompletedItems
        items={items}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />

      {completedItems.length >= 1 && (
        <View>
          <IntroText text="Completed Items appear here, tap the cross to remove completely" />
          <CompletedItems
            completedItems={completedItems}
            deleteItem={deleteItem}
          />
        </View>
      )}
    </View>
  );
};

export default TodoScreen;
