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
        style={styles.ImageBackground_0_888}
      />
      <View style={styles.View_0_889}>
        <Text style={styles.Text_0_889}>VENUE</Text>
      </View>
      <View style={styles.View_0_890} />
      <View style={styles.View_0_891}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e56/dc57/b92d6a713522001cee45ec7ac69bbc6c"
          }}
          style={styles.ImageBackground_I0_891_0_2344}
        />
        <View style={styles.View_I0_891_0_2345}>
          <Text style={styles.Text_I0_891_0_2345}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5b2/9b6e/9f4ebddedf0a67e048844bd03492656b"
          }}
          style={styles.ImageBackground_I0_891_0_2346}
        />
        <View style={styles.View_I0_891_0_2347}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_891_0_2348}
          />
          <View style={styles.View_I0_891_0_2351}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_891_0_2349}
            />
            <View style={styles.View_I0_891_0_2350} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_891_0_2352}
          />
        </View>
        <View style={styles.View_I0_891_0_2355}>
          <View style={styles.View_I0_891_0_2353} />
          <View style={styles.View_I0_891_0_2354} />
          <View style={styles.View_I0_891_0_2356} />
          <View style={styles.View_I0_891_0_2357} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_891_0_2360}
        />
        <View style={styles.View_I0_891_0_2362}>
          <View style={styles.View_I0_891_0_2362_0_2341} />
          <View style={styles.View_I0_891_0_2362_0_2342}>
            <Text style={styles.Text_I0_891_0_2362_0_2342}>Wedstimate</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e36d/93be/532f6e09be2b5797170ce63b206b9b6b"
          }}
          style={styles.ImageBackground_I0_891_0_2363}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff44/fa8f/7f5777859feb9dac514c69d6658e7071"
          }}
          style={styles.ImageBackground_I0_891_0_2367}
        />
        <View style={styles.View_I0_891_0_2368}>
          <Text style={styles.Text_I0_891_0_2368}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5b2/9b6e/9f4ebddedf0a67e048844bd03492656b"
          }}
          style={styles.ImageBackground_I0_891_0_2369}
        />
        <View style={styles.View_I0_891_0_2370}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_891_0_2371}
          />
          <View style={styles.View_I0_891_0_2374}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_891_0_2372}
            />
            <View style={styles.View_I0_891_0_2373} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_891_0_2375}
          />
        </View>
        <View style={styles.View_I0_891_0_2378}>
          <View style={styles.View_I0_891_0_2376} />
          <View style={styles.View_I0_891_0_2377} />
          <View style={styles.View_I0_891_0_2379} />
          <View style={styles.View_I0_891_0_2380} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_891_0_2383}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b665/d8ee/3c8a8a19467b25e87f2c74fd69879b30"
        }}
        style={styles.ImageBackground_0_892}
      />
      <View style={styles.View_0_893}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/470d/fd84/ffb33267a7252c77c285dfbdaf8b062a"
          }}
          style={styles.ImageBackground_0_894}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/922f/faf2/3071f693147682a25383e4096b3f4500"
          }}
          style={styles.ImageBackground_0_895}
        />
        <View style={styles.View_0_896} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a06a/ebd3/83c9941fefe3f8cc427a9dd0a49f9149"
          }}
          style={styles.ImageBackground_0_899}
        />
        <View style={styles.View_0_907}>
          <Text style={styles.Text_0_907}>DASHBOARD</Text>
        </View>
        <View style={styles.View_0_908}>
          <Text style={styles.Text_0_908}>prefs</Text>
        </View>
        <View style={styles.View_0_909}>
          <Text style={styles.Text_0_909}>Next</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fc7/ef6f/45a7d328b015ddbc5c17fbc18f30273a"
          }}
          style={styles.ImageBackground_0_910}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e75/74c2/63a37adbb05d2b02d5d87c55076cc362"
          }}
          style={styles.ImageBackground_0_913}
        />
        <View style={styles.View_0_918}>
          <Text style={styles.Text_0_918}>BACK</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9386/64fc/edb875b006e2a8fcb798700395efc937"
          }}
          style={styles.ImageBackground_0_919}
        />
      </View>
      <View style={styles.View_0_920} />
      <View style={styles.View_0_921}>
        <Text style={styles.Text_0_921}>Venue Style (choose 3)</Text>
      </View>
      <View style={styles.View_0_922}>
        <Text style={styles.Text_0_922}>Venue Considerations</Text>
      </View>
      <View style={styles.View_0_923}>
        <Text style={styles.Text_0_923}>Garden</Text>
      </View>
      <View style={styles.View_0_924}>
        <Text style={styles.Text_0_924}>Private Estate</Text>
      </View>
      <View style={styles.View_0_925}>
        <Text style={styles.Text_0_925}>Rooftop/Loft</Text>
      </View>
      <View style={styles.View_0_926}>
        <Text style={styles.Text_0_926}>HIstoric</Text>
      </View>
      <View style={styles.View_0_927}>
        <Text style={styles.Text_0_927}>Mansion</Text>
      </View>
      <View style={styles.View_0_928}>
        <Text style={styles.Text_0_928}>Nature</Text>
      </View>
      <View style={styles.View_0_929}>
        <Text style={styles.Text_0_929}>Beach</Text>
      </View>
      <View style={styles.View_0_930}>
        <Text style={styles.Text_0_930}>Restaurant</Text>
      </View>
      <View style={styles.View_0_931}>
        <Text style={styles.Text_0_931}>Vineyard</Text>
      </View>
      <View style={styles.View_0_932}>
        <Text style={styles.Text_0_932}>Banquet Hall</Text>
      </View>
      <View style={styles.View_0_933}>
        <Text style={styles.Text_0_933}>Boat</Text>
      </View>
      <View style={styles.View_0_934}>
        <Text style={styles.Text_0_934}>All Inclusive</Text>
      </View>
      <View style={styles.View_0_935}>
        <Text style={styles.Text_0_935}>Barn/Ranch</Text>
      </View>
      <View style={styles.View_0_936}>
        <Text style={styles.Text_0_936}>Church</Text>
      </View>
      <View style={styles.View_0_937}>
        <Text style={styles.Text_0_937}>Hotel</Text>
      </View>
      <View style={styles.View_0_938}>
        <Text style={styles.Text_0_938}>Waterfront</Text>
      </View>
      <View style={styles.View_0_939}>
        <Text style={styles.Text_0_939}>Museum</Text>
      </View>
      <View style={styles.View_0_940}>
        <Text style={styles.Text_0_940}>Country Club</Text>
      </View>
      <View style={styles.View_0_941}>
        <Text style={styles.Text_0_941}>Shaded Outdoor</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b4/e0f6/0601974dcd299d4246c4b368fca674ec"
        }}
        style={styles.ImageBackground_0_942}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b4/e0f6/0601974dcd299d4246c4b368fca674ec"
        }}
        style={styles.ImageBackground_0_943}
      />
      <View style={styles.View_0_944}>
        <Text style={styles.Text_0_944}>Outdoor</Text>
      </View>
      <View style={styles.View_0_945}>
        <Text style={styles.Text_0_945}>Clean-up</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b4/e0f6/0601974dcd299d4246c4b368fca674ec"
        }}
        style={styles.ImageBackground_0_946}
      />
      <View style={styles.View_0_947}>
        <Text style={styles.Text_0_947}>Indoor</Text>
      </View>
      <View style={styles.View_0_948}>
        <Text style={styles.Text_0_948}>Bar Services</Text>
      </View>
      <View style={styles.View_0_949}>
        <Text style={styles.Text_0_949}>Pet Friendly</Text>
      </View>
      <View style={styles.View_0_950}>
        <Text style={styles.Text_0_950}>Allow Outside Vendors</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b4/e0f6/0601974dcd299d4246c4b368fca674ec"
        }}
        style={styles.ImageBackground_0_951}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b4/e0f6/0601974dcd299d4246c4b368fca674ec"
        }}
        style={styles.ImageBackground_0_952}
      />
      <View style={styles.View_0_953}>
        <Text style={styles.Text_0_953}>WIFI</Text>
      </View>
      <View style={styles.View_0_954}>
        <Text style={styles.Text_0_954}>
          Click the filter icon to select your preferences so that we can show
          you the best vendors for your wedding.
        </Text>
      </View>
      <View style={styles.View_0_955}>
        <Text style={styles.Text_0_955}>Venue Details</Text>
      </View>
      <View style={styles.View_0_956}>
        <Text style={styles.Text_0_956}>Select your preferences here.</Text>
      </View>
      <View style={styles.View_0_957} />
      <View style={styles.View_0_958}>
        <Text style={styles.Text_0_958}>Zip Code</Text>
      </View>
      <View style={styles.View_0_959}>
        <Text style={styles.Text_0_959}># of Guests</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/508c/85bd/b4ac153d91b59a6e945dd2ae3bd3654c"
        }}
        style={styles.ImageBackground_0_960}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/508c/85bd/b4ac153d91b59a6e945dd2ae3bd3654c"
        }}
        style={styles.ImageBackground_0_961}
      />
      <View style={styles.View_0_962}>
        <Text style={styles.Text_0_962}>Date of Event</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04dd/1141/6e5d7b1f1cad87aadf6eeaea6c83b1df"
        }}
        style={styles.ImageBackground_0_963}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04dd/1141/6e5d7b1f1cad87aadf6eeaea6c83b1df"
        }}
        style={styles.ImageBackground_0_964}
      />
      <View style={styles.View_0_965}>
        <Text style={styles.Text_0_965}>94607</Text>
      </View>
      <View style={styles.View_0_966}>
        <Text style={styles.Text_0_966}>150</Text>
      </View>
      <View style={styles.View_0_967}>
        <Text style={styles.Text_0_967}>05/10/21</Text>
      </View>
      <View style={styles.View_0_968}>
        <Text style={styles.Text_0_968}>CUSTOMIZE</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_0_888: {
    width: 2335,
    minWidth: 2335,
    height: 654,
    minHeight: 654,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -532,
    top: 72
  },
  View_0_889: {
    width: 123,
    minWidth: 123,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    top: 99
  },
  Text_0_889: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_890: {
    width: 390,
    minWidth: 390,
    height: 99,
    minHeight: 99,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 910,
    backgroundColor: "rgba(239, 239, 239, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_891: {
    width: 390,
    minWidth: 390,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_891_0_2344: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_891_0_2345: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.679931640625,
    top: 11
  },
  Text_I0_891_0_2345: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_891_0_2346: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1201171875,
    top: 0
  },
  View_I0_891_0_2347: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.760009765625,
    top: 6.09375
  },
  ImageBackground_I0_891_0_2348: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_891_0_2351: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_891_0_2349: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.076904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.60009765625
  },
  View_I0_891_0_2350: {
    width: 2.600006103515625,
    height: 4.875,
    top: -0.076904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.60009765625,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_891_0_2352: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.080078125
  },
  View_I0_891_0_2355: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.919921875,
    top: 4.875
  },
  View_I0_891_0_2353: {
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
  View_I0_891_0_2354: {
    width: 3.1199951171875,
    height: 7.3125,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.679931640625,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_891_0_2356: {
    width: 3.1199951171875,
    height: 9.75,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.360107421875,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_891_0_2357: {
    width: 3.120025634765625,
    height: 12.1875,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.0400390625,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_891_0_2360: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8798828125,
    top: 6.09375
  },
  View_I0_891_0_2362: {
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
  View_I0_891_0_2362_0_2341: {
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
  View_I0_891_0_2362_0_2342: {
    flexGrow: 1,
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I0_891_0_2362_0_2342: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_I0_891_0_2363: {
    flexGrow: 1,
    width: 30.68000030517578,
    height: 20.109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.679931640625,
    top: 45.09375
  },
  ImageBackground_I0_891_0_2367: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_891_0_2368: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.679931640625,
    top: 11
  },
  Text_I0_891_0_2368: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_891_0_2369: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1201171875,
    top: 0
  },
  View_I0_891_0_2370: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.760009765625,
    top: 6.09375
  },
  ImageBackground_I0_891_0_2371: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_891_0_2374: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_891_0_2372: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.076904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.60009765625
  },
  View_I0_891_0_2373: {
    width: 2.600006103515625,
    height: 4.875,
    top: -0.076904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.60009765625,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_891_0_2375: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.080078125
  },
  View_I0_891_0_2378: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.919921875,
    top: 4.875
  },
  View_I0_891_0_2376: {
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
  View_I0_891_0_2377: {
    width: 3.1199951171875,
    height: 7.3125,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.679931640625,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_891_0_2379: {
    width: 3.1199951171875,
    height: 9.75,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.360107421875,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_891_0_2380: {
    width: 3.120025634765625,
    height: 12.1875,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.0400390625,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_891_0_2383: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8798828125,
    top: 6.09375
  },
  ImageBackground_0_892: {
    width: 390,
    minWidth: 390,
    height: 740,
    minHeight: 740,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 170
  },
  View_0_893: {
    width: 391,
    minWidth: 391,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 910,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_894: {
    width: 391,
    height: 1,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_895: {
    width: 24,
    height: 23,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185
  },
  View_0_896: {
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
  ImageBackground_0_899: {
    width: 24,
    height: 21,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252.5
  },
  View_0_907: {
    width: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 48.5
  },
  Text_0_907: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_908: {
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 48.5
  },
  Text_0_908: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_909: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 339,
    top: 48.5
  },
  Text_0_909: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_910: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345
  },
  ImageBackground_0_913: {
    width: 26,
    height: 21,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113
  },
  View_0_918: {
    width: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 48.5
  },
  Text_0_918: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_919: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  View_0_920: {
    width: 329,
    minWidth: 329,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 777,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_921: {
    width: 316,
    minWidth: 316,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 496
  },
  Text_0_921: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_922: {
    width: 329,
    minWidth: 329,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 740
  },
  Text_0_922: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_923: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 529
  },
  Text_0_923: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_924: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 562
  },
  Text_0_924: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_925: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 597
  },
  Text_0_925: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_926: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 630
  },
  Text_0_926: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_927: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 661
  },
  Text_0_927: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_928: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 694
  },
  Text_0_928: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_929: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 160,
    top: 529
  },
  Text_0_929: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_930: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 160,
    top: 562
  },
  Text_0_930: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_931: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 160,
    top: 597
  },
  Text_0_931: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_932: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 160,
    top: 630
  },
  Text_0_932: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_933: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 160,
    top: 661
  },
  Text_0_933: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_934: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 160,
    top: 694
  },
  Text_0_934: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_935: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 529
  },
  Text_0_935: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_936: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 562
  },
  Text_0_936: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_937: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 597
  },
  Text_0_937: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_938: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 630
  },
  Text_0_938: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_939: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 661
  },
  Text_0_939: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_940: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 694
  },
  Text_0_940: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_941: {
    width: 110,
    minWidth: 110,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 237,
    top: 777
  },
  Text_0_941: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_942: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 152,
    top: 836
  },
  ImageBackground_0_943: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 873
  },
  View_0_944: {
    width: 64,
    minWidth: 64,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 145,
    top: 777
  },
  Text_0_944: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_945: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 827
  },
  Text_0_945: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_946: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 835
  },
  View_0_947: {
    width: 53,
    minWidth: 53,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48,
    top: 777
  },
  Text_0_947: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_948: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58,
    top: 827
  },
  Text_0_948: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_949: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 260,
    top: 864
  },
  Text_0_949: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_950: {
    width: 152,
    minWidth: 152,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 864
  },
  Text_0_950: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_951: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 872
  },
  ImageBackground_0_952: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 258,
    top: 835
  },
  View_0_953: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 284,
    top: 827
  },
  Text_0_953: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_954: {
    width: 336,
    minWidth: 336,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 442
  },
  Text_0_954: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_955: {
    width: 119,
    minWidth: 119,
    minHeight: 86,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 211
  },
  Text_0_955: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_956: {
    width: 245,
    minWidth: 245,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 416
  },
  Text_0_956: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_957: {
    width: 343,
    minWidth: 343,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 312,
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_958: {
    width: 53,
    minWidth: 53,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 358
  },
  Text_0_958: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_959: {
    width: 64,
    minWidth: 64,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 286,
    top: 358
  },
  Text_0_959: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_960: {
    width: 1,
    minWidth: 1,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 319
  },
  ImageBackground_0_961: {
    width: 1,
    minWidth: 1,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 319
  },
  View_0_962: {
    width: 81,
    minWidth: 81,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 157,
    top: 358
  },
  Text_0_962: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_963: {
    width: 342,
    minWidth: 342,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 361
  },
  ImageBackground_0_964: {
    width: 342,
    minWidth: 342,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 311
  },
  View_0_965: {
    width: 67,
    minWidth: 67,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 322
  },
  Text_0_965: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_966: {
    width: 41,
    minWidth: 41,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297,
    top: 322
  },
  Text_0_966: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_967: {
    width: 98,
    minWidth: 98,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 153,
    top: 322
  },
  Text_0_967: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_968: {
    width: 87,
    minWidth: 87,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 188
  },
  Text_0_968: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_2: { height: 1009 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
