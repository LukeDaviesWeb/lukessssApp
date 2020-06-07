import { StyleSheet } from "react-native";
import Layout from "../constants/Layout";
import Margin from "../constants/Margin";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 40,
    backgroundColor: "#fff",
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "#7371FC",
    paddingTop: 60,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "bold",
  },
  normalText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  introText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
    paddingBottom: 30,
  },
  contentContainer: {
    flex: 8,
    position: "relative",
    height: Layout.window.height,
  },
  btn: {
    padding: 9,
    marginBottom: Margin.small,
    backgroundColor: "#2f95dc",

    marginLeft: Margin.container.left,
    marginRight: Margin.container.right,
  },
  altBtn: {
    padding: 9,
    marginBottom: Margin.small,
    backgroundColor: "red",

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

export default globalStyles;
