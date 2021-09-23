import React from "react";
import { View } from "react-native";
import LedStyle from "./style";

const Led = (props) => {
  const styles = LedStyle(props);
  const text = props.text + "";
  return (
    <View>
      <View
        style={[
          styles.center,
          styles.margin,
          ["-", "1", "4"].includes(text) && styles.hide,
        ]}
      >
        <View style={styles.horizontal}>
          <View style={styles.triangleLeft} />
          <View style={styles.row} />
          <View style={styles.triangleRight} />
        </View>
      </View>

      <View style={[styles.horizontal, styles.center, styles.margin]}>
        {/* 上左 */}
        <View style={[["-", "1", "2", "3", "7"].includes(text) && styles.hide]}>
          <View style={styles.triangleUp} />
          <View style={styles.column} />
          <View style={styles.topLeft} />
        </View>
        <View style={[styles.row, { backgroundColor: "transparent" }]} />
        {/* 上右 */}
        <View style={[["-", "5", "6", "c"].includes(text) && styles.hide]}>
          <View style={styles.triangleUp} />
          <View style={styles.column} />
          <View style={styles.topRight} />
        </View>
      </View>

      {/* 中 */}
      <View
        style={[
          styles.center,
          styles.margin,
          ["0", "1", "7", "c"].includes(text) && styles.hide,
        ]}
      >
        <View style={styles.horizontal}>
          <View style={styles.left} />
          <View style={styles.row} />
          <View style={styles.right} />
        </View>
      </View>

      <View style={[styles.horizontal, styles.center, styles.margin]}>
        {/* 下左 */}
        <View
          style={[
            ["-", "1", "3", "4", "5", "7", "9"].includes(text) && styles.hide,
          ]}
        >
          <View style={styles.bottomLeft} />
          <View style={styles.column} />
          <View style={styles.triangleDown} />
        </View>
        <View style={[styles.row, { backgroundColor: "transparent" }]} />
        {/* 下右 */}
        <View style={[["-", "2", "c"].includes(text) && styles.hide]}>
          <View style={styles.bottomRight} />
          <View style={styles.column} />
          <View style={styles.triangleDown} />
        </View>
      </View>
      {/* 下 */}
      <View
        style={[
          styles.center,
          ["-", "1", "4", "7"].includes(text) && styles.hide,
        ]}
      >
        <View style={styles.horizontal}>
          <View style={styles.triangleLeft} />
          <View style={styles.row} />
          <View style={styles.triangleRight} />
        </View>
      </View>
    </View>
  );
};

export default Led;
