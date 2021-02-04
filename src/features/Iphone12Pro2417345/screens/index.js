import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_0_2259}>
        <Text style={styles.Text_0_2259}>Avenir - Title Header - 24pt</Text>
      </View>
      <View style={styles.View_0_2260}>
        <Text style={styles.Text_0_2260}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida
          sagittis ante, vitae egestas magna imperdiet sed. Nullam rhoncus
          ligula eu est fringilla, volutpat tincidunt arcu luctus. Sed a semper
          urna. Integer.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04dd/1141/6e5d7b1f1cad87aadf6eeaea6c83b1df"
        }}
        style={styles.ImageBackground_0_2261}
      />
      <View style={styles.View_0_2262}>
        <Text style={styles.Text_0_2262}>
          AVENIR UPPERCASE SECTION DESCRIPTION - 14PT
        </Text>
      </View>
      <View style={styles.View_0_2263}>
        <Text style={styles.Text_0_2263}>ADD</Text>
      </View>
      <View style={styles.View_0_2264}>
        <Text style={styles.Text_0_2264}>+</Text>
      </View>
      <View style={styles.View_0_2265}>
        <Text style={styles.Text_0_2265}>Avenir - Section Intro - 24pt</Text>
      </View>
      <View style={styles.View_0_2266}>
        <Text style={styles.Text_0_2266}>
          Menu Items | Menu Items | Menu Items
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1911/3fd7/fe955a9e203b1a689150a0cfaf8161bd"
        }}
        style={styles.ImageBackground_0_2267}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3307/1ae5/ba81e21f52f6dea697366828ce1dabd0"
        }}
        style={styles.ImageBackground_0_2268}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3307/1ae5/ba81e21f52f6dea697366828ce1dabd0"
        }}
        style={styles.ImageBackground_0_2269}
      />
      <View style={styles.View_0_2270}>
        <Text style={styles.Text_0_2270}>Active List</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/180c/56a3/367fa9f5225b533f5a755581824aa616"
        }}
        style={styles.ImageBackground_0_2271}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb1/cbd8/80b05448d784d3e94ae3b5026885970f"
        }}
        style={styles.ImageBackground_0_2272}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5969/7a0b/ae15c158b276c6dc945a39005d9655e3"
        }}
        style={styles.ImageBackground_0_2273}
      />
      <View style={styles.View_0_2274}>
        <Text style={styles.Text_0_2274}>Build your </Text>
      </View>
      <View style={styles.View_0_2275}>
        <Text style={styles.Text_0_2275}>Wedding</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04dd/1141/6e5d7b1f1cad87aadf6eeaea6c83b1df"
        }}
        style={styles.ImageBackground_0_2276}
      />
      <View style={styles.View_0_2277}>
        <Text style={styles.Text_0_2277}>+ Catering</Text>
      </View>
      <View style={styles.View_0_2278}>
        <Text style={styles.Text_0_2278}>+ DJ</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6f7/751f/ff8c1c7437925a75d59760c22c5d0923"
        }}
        style={styles.ImageBackground_0_2279}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6f7/751f/ff8c1c7437925a75d59760c22c5d0923"
        }}
        style={styles.ImageBackground_0_2280}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_2259: {
    width: 197,
    minWidth: 197,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1106,
    top: 390
  },
  Text_0_2259: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.9179999828338623,
    textTransform: "none"
  },
  View_0_2260: {
    width: 330,
    minWidth: 330,
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1106,
    top: 416
  },
  Text_0_2260: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.7139999866485596,
    textTransform: "none"
  },
  ImageBackground_0_2261: {
    width: 342,
    minWidth: 342,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1106.375,
    top: 144.125
  },
  View_0_2262: {
    width: 197,
    minWidth: 197,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1107,
    top: 304
  },
  Text_0_2262: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_2263: {
    width: 30,
    minWidth: 30,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1183,
    top: 815
  },
  Text_0_2263: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_2264: {
    width: 14,
    minWidth: 14,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1217,
    top: 815
  },
  Text_0_2264: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_2265: {
    width: 277,
    minWidth: 277,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1106,
    top: 333
  },
  Text_0_2265: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.2239999771118164,
    textTransform: "none"
  },
  View_0_2266: {
    width: 301,
    minWidth: 301,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1120,
    top: 108
  },
  Text_0_2266: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.9179999828338623,
    textTransform: "none"
  },
  ImageBackground_0_2267: {
    width: 276,
    minWidth: 276,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1106,
    top: 581
  },
  ImageBackground_0_2268: {
    width: 57,
    minWidth: 57,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1107,
    top: 813
  },
  ImageBackground_0_2269: {
    width: 57,
    minWidth: 57,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1177,
    top: 813
  },
  View_0_2270: {
    width: 152,
    minWidth: 152,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1118,
    top: 588
  },
  Text_0_2270: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2271: {
    width: 8,
    minWidth: 8,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1351,
    top: 604
  },
  ImageBackground_0_2272: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1393,
    top: 580
  },
  ImageBackground_0_2273: {
    width: 334,
    minWidth: 334,
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1107,
    top: 677
  },
  View_0_2274: {
    width: 100,
    minWidth: 100,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1125,
    top: 688
  },
  Text_0_2274: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2275: {
    width: 198,
    minWidth: 198,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1125,
    top: 709
  },
  Text_0_2275: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.039578914642334,
    textTransform: "none"
  },
  ImageBackground_0_2276: {
    width: 342,
    minWidth: 342,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1106.5,
    top: 379
  },
  View_0_2277: {
    width: 114,
    minWidth: 114,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1121,
    top: 158
  },
  Text_0_2277: {
    color: "rgba(93, 93, 93, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14687733352184296,
    textTransform: "none"
  },
  View_0_2278: {
    width: 50,
    minWidth: 50,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1121,
    top: 213
  },
  Text_0_2278: {
    color: "rgba(93, 93, 93, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14687733352184296,
    textTransform: "none"
  },
  ImageBackground_0_2279: {
    width: 341,
    minWidth: 341,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1114,
    top: 198
  },
  ImageBackground_0_2280: {
    width: 341,
    minWidth: 341,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1114,
    top: 253
  },
  View_2: { height: 2704 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
