import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Shadow from "../../constants/Shadow";
import Margin from "../../constants/Margin";

const AddItem = StyleSheet.create({
  input: {
    height: 50,
    padding: 8,
    fontSize: 14,
    lineHeight: 14,
    backgroundColor: Colors.tabBar,
    marginBottom: Margin.small,
    marginLeft: Margin.container.left,
    marginRight: Margin.container.right,
    shadowColor: Shadow.color,
    shadowOffset: {
      width: Shadow.offset.width,
      height: Shadow.offset.height,
    },
    shadowOpacity: Shadow.opacity,
    shadowRadius: Shadow.radius,

    elevation: Shadow.elevation,
  },
  btn: {
    padding: 9,
    marginBottom: Margin.small,
    backgroundColor: "#2f95dc",

    marginLeft: Margin.container.left,
    marginRight: Margin.container.right,
  },
  btnText: {
    fontSize: 17,
    textAlign: "center",
    color: "#fff",
    justifyContent: "space-between",
  },
});

export default AddItem;
