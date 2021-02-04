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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ab3/9e32/7b0d084f592def3e1c998f3820db37a7"
        }}
        style={styles.ImageBackground_0_2282}
      />
      <View style={styles.View_0_2283}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fa1/18ce/5d8543f1e64f4ccecd2cd50029193a83"
          }}
          style={styles.ImageBackground_I0_2283_0_2344}
        />
        <View style={styles.View_I0_2283_0_2345}>
          <Text style={styles.Text_I0_2283_0_2345}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ceba/6a87/d300f38e0d5e9079b0655d663aabb437"
          }}
          style={styles.ImageBackground_I0_2283_0_2346}
        />
        <View style={styles.View_I0_2283_0_2347}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_2283_0_2348}
          />
          <View style={styles.View_I0_2283_0_2351}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_2283_0_2349}
            />
            <View style={styles.View_I0_2283_0_2350} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_2283_0_2352}
          />
        </View>
        <View style={styles.View_I0_2283_0_2355}>
          <View style={styles.View_I0_2283_0_2353} />
          <View style={styles.View_I0_2283_0_2354} />
          <View style={styles.View_I0_2283_0_2356} />
          <View style={styles.View_I0_2283_0_2357} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_2283_0_2360}
        />
        <View style={styles.View_I0_2283_0_2362}>
          <View style={styles.View_I0_2283_0_2362_0_2341} />
          <View style={styles.View_I0_2283_0_2362_0_2342}>
            <Text style={styles.Text_I0_2283_0_2362_0_2342}>Wedstimate</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e36d/93be/532f6e09be2b5797170ce63b206b9b6b"
          }}
          style={styles.ImageBackground_I0_2283_0_2363}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff44/fa8f/7f5777859feb9dac514c69d6658e7071"
          }}
          style={styles.ImageBackground_I0_2283_0_2367}
        />
        <View style={styles.View_I0_2283_0_2368}>
          <Text style={styles.Text_I0_2283_0_2368}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ceba/6a87/d300f38e0d5e9079b0655d663aabb437"
          }}
          style={styles.ImageBackground_I0_2283_0_2369}
        />
        <View style={styles.View_I0_2283_0_2370}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_2283_0_2371}
          />
          <View style={styles.View_I0_2283_0_2374}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_2283_0_2372}
            />
            <View style={styles.View_I0_2283_0_2373} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_2283_0_2375}
          />
        </View>
        <View style={styles.View_I0_2283_0_2378}>
          <View style={styles.View_I0_2283_0_2376} />
          <View style={styles.View_I0_2283_0_2377} />
          <View style={styles.View_I0_2283_0_2379} />
          <View style={styles.View_I0_2283_0_2380} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_2283_0_2383}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba30/82b8/338e9a97874ed551b5e3c6f18e76d7c3"
        }}
        style={styles.ImageBackground_0_2284}
      />
      <View style={styles.View_0_2285} />
      <View style={styles.View_0_2286}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/470d/fd84/ffb33267a7252c77c285dfbdaf8b062a"
          }}
          style={styles.ImageBackground_0_2287}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/922f/faf2/3071f693147682a25383e4096b3f4500"
          }}
          style={styles.ImageBackground_0_2288}
        />
        <View style={styles.View_0_2289} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a06a/ebd3/83c9941fefe3f8cc427a9dd0a49f9149"
          }}
          style={styles.ImageBackground_0_2292}
        />
        <View style={styles.View_0_2300}>
          <Text style={styles.Text_0_2300}>DASHBOARD</Text>
        </View>
        <View style={styles.View_0_2301}>
          <Text style={styles.Text_0_2301}>prefs</Text>
        </View>
        <View style={styles.View_0_2302}>
          <Text style={styles.Text_0_2302}>Next</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fc7/ef6f/45a7d328b015ddbc5c17fbc18f30273a"
          }}
          style={styles.ImageBackground_0_2303}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e75/74c2/63a37adbb05d2b02d5d87c55076cc362"
          }}
          style={styles.ImageBackground_0_2306}
        />
        <View style={styles.View_0_2311}>
          <Text style={styles.Text_0_2311}>BACK</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9386/64fc/edb875b006e2a8fcb798700395efc937"
          }}
          style={styles.ImageBackground_0_2312}
        />
      </View>
      <View style={styles.View_0_2313}>
        <Text style={styles.Text_0_2313}>
          The Gold Plan is our beginner plan. For $49.99 per month we list you
          on our app and send you 5 warm leads per month.
        </Text>
      </View>
      <View style={styles.View_0_2314}>
        <Text style={styles.Text_0_2314}>
          The Platinum Plan is $59.99 per month. We list you on our app and you
          have the ability to post deals and packages to stand out among the
          other vendors.
        </Text>
      </View>
      <View style={styles.View_0_2315}>
        <Text style={styles.Text_0_2315}>
          The Diamond Plan is $69.99 per month. We list you on our app and you
          have the ability to post deals and packages to stand out among the
          other vendors. And you are guranteed 15  warm leads per month.
        </Text>
      </View>
      <View style={styles.View_0_2316}>
        <Text style={styles.Text_0_2316}>Lead generation made simple.</Text>
      </View>
      <View style={styles.View_0_2317}>
        <Text style={styles.Text_0_2317}>Our Service</Text>
      </View>
      <View style={styles.View_0_2318}>
        <Text style={styles.Text_0_2318}>
          Wedstimate helps you connect with the clients that are best  for your
          service. We curate leads for you and send you warm leads that are
          looking for your service, in your price range, with a similar
          sensibility. We make it easy for them to find you and then we connect
          you.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04dd/1141/6e5d7b1f1cad87aadf6eeaea6c83b1df"
        }}
        style={styles.ImageBackground_0_2319}
      />
      <View style={styles.View_0_2320}>
        <Text style={styles.Text_0_2320}>
          You are an elite  vendor in your area.
        </Text>
      </View>
      <View style={styles.View_0_2321}>
        <Text style={styles.Text_0_2321}>Welcome to Wedstimate</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04dd/1141/6e5d7b1f1cad87aadf6eeaea6c83b1df"
        }}
        style={styles.ImageBackground_0_2322}
      />
      <View style={styles.View_0_2323}>
        <Text style={styles.Text_0_2323}>+ Gold Plan $49.99</Text>
      </View>
      <View style={styles.View_0_2324}>
        <Text style={styles.Text_0_2324}>+ Platinum Plan $59.99</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6f7/751f/ff8c1c7437925a75d59760c22c5d0923"
        }}
        style={styles.ImageBackground_0_2325}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6f7/751f/ff8c1c7437925a75d59760c22c5d0923"
        }}
        style={styles.ImageBackground_0_2326}
      />
      <View style={styles.View_0_2327}>
        <Text style={styles.Text_0_2327}>+ Diamond Plan</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_0_2282: {
    width: 2335,
    minWidth: 2335,
    height: 654,
    minHeight: 654,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -969,
    top: -18
  },
  View_0_2283: {
    width: 390,
    minWidth: 390,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2283_0_2344: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_2283_0_2345: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.6800537109375,
    top: 11
  },
  Text_I0_2283_0_2345: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_2283_0_2346: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1199951171875,
    top: 0
  },
  View_I0_2283_0_2347: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.760009765625,
    top: 6.09375
  },
  ImageBackground_I0_2283_0_2348: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_2283_0_2351: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_2283_0_2349: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.0767822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375
  },
  View_I0_2283_0_2350: {
    width: 2.600006103515625,
    height: 4.875,
    top: -0.0767822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_2283_0_2352: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.08001708984375
  },
  View_I0_2283_0_2355: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.91998291015625,
    top: 4.875
  },
  View_I0_2283_0_2353: {
    width: 3.120025634765625,
    height: 5.484375,
    top: 6.703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_2283_0_2354: {
    width: 3.1199951171875,
    height: 7.3125,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.67999267578125,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_2283_0_2356: {
    width: 3.1199951171875,
    height: 9.75,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.36004638671875,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_2283_0_2357: {
    width: 3.120025634765625,
    height: 12.1875,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.03997802734375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_2283_0_2360: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8800048828125,
    top: 6.09375
  },
  View_I0_2283_0_2362: {
    flexGrow: 1,
    width: 175,
    height: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107,
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2283_0_2362_0_2341: {
    flexGrow: 1,
    width: 175,
    height: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_2283_0_2362_0_2342: {
    flexGrow: 1,
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I0_2283_0_2362_0_2342: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_I0_2283_0_2363: {
    flexGrow: 1,
    width: 30.68000030517578,
    height: 20.109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.6800537109375,
    top: 45.09375
  },
  ImageBackground_I0_2283_0_2367: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_2283_0_2368: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.6800537109375,
    top: 11
  },
  Text_I0_2283_0_2368: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_2283_0_2369: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1199951171875,
    top: 0
  },
  View_I0_2283_0_2370: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.760009765625,
    top: 6.09375
  },
  ImageBackground_I0_2283_0_2371: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_2283_0_2374: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_2283_0_2372: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.0767822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375
  },
  View_I0_2283_0_2373: {
    width: 2.600006103515625,
    height: 4.875,
    top: -0.0767822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_2283_0_2375: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.08001708984375
  },
  View_I0_2283_0_2378: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.91998291015625,
    top: 4.875
  },
  View_I0_2283_0_2376: {
    width: 3.120025634765625,
    height: 5.484375,
    top: 6.703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_2283_0_2377: {
    width: 3.1199951171875,
    height: 7.3125,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.67999267578125,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_2283_0_2379: {
    width: 3.1199951171875,
    height: 9.75,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.36004638671875,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_2283_0_2380: {
    width: 3.120025634765625,
    height: 12.1875,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.03997802734375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_2283_0_2383: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8800048828125,
    top: 6.09375
  },
  ImageBackground_0_2284: {
    width: 392,
    minWidth: 392,
    height: 676,
    minHeight: 676,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2,
    top: 168
  },
  View_0_2285: {
    width: 390,
    minWidth: 390,
    height: 99,
    minHeight: 99,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 747,
    backgroundColor: "rgba(239, 239, 239, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_2286: {
    width: 391,
    minWidth: 391,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 747,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_2287: {
    width: 391,
    height: 1,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_2288: {
    width: 24,
    height: 23,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185
  },
  View_0_2289: {
    width: 140,
    height: 6,
    top: 83.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125,
    backgroundColor: "rgba(51, 51, 51, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_2292: {
    width: 24,
    height: 21,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252.5
  },
  View_0_2300: {
    width: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 48.5
  },
  Text_0_2300: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_2301: {
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 48.5
  },
  Text_0_2301: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_2302: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 339,
    top: 48.5
  },
  Text_0_2302: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_2303: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345
  },
  ImageBackground_0_2306: {
    width: 26,
    height: 21,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113
  },
  View_0_2311: {
    width: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 48.5
  },
  Text_0_2311: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_2312: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  View_0_2313: {
    width: 340,
    minWidth: 340,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 440
  },
  Text_0_2313: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.7139999866485596,
    textTransform: "none"
  },
  View_0_2314: {
    width: 344,
    minWidth: 344,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 525
  },
  Text_0_2314: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.7139999866485596,
    textTransform: "none"
  },
  View_0_2315: {
    width: 348,
    minWidth: 348,
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 629
  },
  Text_0_2315: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.7139999866485596,
    textTransform: "none"
  },
  View_0_2316: {
    width: 192,
    minWidth: 192,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 90
  },
  Text_0_2316: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2317: {
    width: 86,
    minWidth: 86,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 274
  },
  Text_0_2317: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.9179999828338623,
    textTransform: "none"
  },
  View_0_2318: {
    width: 342,
    minWidth: 342,
    minHeight: 95,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 300
  },
  Text_0_2318: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.7139999866485596,
    textTransform: "none"
  },
  ImageBackground_0_2319: {
    width: 342,
    minWidth: 342,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 401
  },
  View_0_2320: {
    width: 161,
    minWidth: 161,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 191
  },
  Text_0_2320: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_2321: {
    width: 252,
    minWidth: 252,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 226
  },
  Text_0_2321: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.2239999771118164,
    textTransform: "none"
  },
  ImageBackground_0_2322: {
    width: 342,
    minWidth: 342,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.5,
    top: 263
  },
  View_0_2323: {
    width: 205,
    minWidth: 205,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 407
  },
  Text_0_2323: {
    color: "rgba(93, 93, 93, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14687733352184296,
    textTransform: "none"
  },
  View_0_2324: {
    width: 249,
    minWidth: 249,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 493
  },
  Text_0_2324: {
    color: "rgba(93, 93, 93, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14687733352184296,
    textTransform: "none"
  },
  ImageBackground_0_2325: {
    width: 341,
    minWidth: 341,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 485
  },
  ImageBackground_0_2326: {
    width: 341,
    minWidth: 341,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 589
  },
  View_0_2327: {
    width: 175,
    minWidth: 175,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 596
  },
  Text_0_2327: {
    color: "rgba(93, 93, 93, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14687733352184296,
    textTransform: "none"
  },
  View_2: { height: 844 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
