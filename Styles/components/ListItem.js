import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const ListItemStyles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    textTransform: "capitalize",
    flex: 9,
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
  },
  iconWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 16,
    flex: 9,
  },
});

export default ListItemStyles;
