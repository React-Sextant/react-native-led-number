import { StyleSheet, ViewStyle } from "react-native";

interface LEDStyle {
  column: ViewStyle;
  row: ViewStyle;
  horizontal: ViewStyle;
  center: ViewStyle;
  margin: ViewStyle;
  hide: ViewStyle;
  triangleUp: ViewStyle;
  triangleRight: ViewStyle;
  right: ViewStyle;
  triangleDown: ViewStyle;
  triangleLeft: ViewStyle;
  left: ViewStyle;
  topLeft: ViewStyle;
  topRight: ViewStyle;
  bottomLeft: ViewStyle;
  bottomRight: ViewStyle;
}

export default ({ size = 1.3, color = "rgba(121, 121, 121, 1)" }) =>
  StyleSheet.create<LEDStyle>({
    column: {
      width: size * 2,
      height: size * 6,
      backgroundColor: color,
    },
    row: {
      height: size * 2,
      width: size * 6,
      backgroundColor: color,
    },
    horizontal: {
      flexDirection: "row",
    },
    center: {
      justifyContent: "center",
      alignItems: "center",
    },
    margin: {
      marginBottom: -(size / 1.1),
    },
    hide: {
      opacity: 0,
    },
    triangleUp: {
      width: 0,
      height: 0,
      borderLeftWidth: size,
      borderLeftColor: "transparent",
      borderRightWidth: size,
      borderRightColor: "transparent",
      borderBottomWidth: size,
      borderBottomColor: color,
    },
    triangleRight: {
      width: 0,
      height: 0,
      borderTopWidth: size,
      borderTopColor: "transparent",
      borderLeftWidth: size,
      borderLeftColor: color,
      borderBottomWidth: size,
      borderBottomColor: "transparent",
    },
    right: {
      width: 0,
      height: 0,
      borderTopWidth: size,
      borderTopColor: "transparent",
      borderLeftWidth: size * 2,
      borderLeftColor: color,
      borderBottomWidth: size,
      borderBottomColor: "transparent",
    },
    triangleDown: {
      width: 0,
      height: 0,
      borderLeftWidth: size,
      borderLeftColor: "transparent",
      borderRightWidth: size,
      borderRightColor: "transparent",
      borderTopWidth: size,
      borderTopColor: color,
    },
    triangleLeft: {
      width: 0,
      height: 0,
      borderTopWidth: size,
      borderTopColor: "transparent",
      borderRightWidth: size,
      borderRightColor: color,
      borderBottomWidth: size,
      borderBottomColor: "transparent",
    },
    left: {
      width: 0,
      height: 0,
      borderTopWidth: size,
      borderTopColor: "transparent",
      borderRightWidth: size * 2,
      borderRightColor: color,
      borderBottomWidth: size,
      borderBottomColor: "transparent",
    },
    topLeft: {
      width: 0,
      height: 0,
      borderTopWidth: size,
      borderTopColor: color,
      borderRightWidth: size * 2,
      borderRightColor: "transparent",
    },
    topRight: {
      width: 0,
      height: 0,
      borderTopWidth: size,
      borderTopColor: color,
      borderLeftWidth: size * 2,
      borderLeftColor: "transparent",
    },
    bottomLeft: {
      width: 0,
      height: 0,
      borderBottomWidth: size,
      borderBottomColor: color,
      borderRightWidth: size * 2,
      borderRightColor: "transparent",
    },
    bottomRight: {
      width: 0,
      height: 0,
      borderBottomWidth: size,
      borderBottomColor: color,
      borderLeftWidth: size * 2,
      borderLeftColor: "transparent",
    },
  });
