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
      <View style={styles.View_0_170}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/493f/44dd/ac46194963961572f2ef738f0f527512"
          }}
          style={styles.ImageBackground_I0_170_0_2344}
        />
        <View style={styles.View_I0_170_0_2345}>
          <Text style={styles.Text_I0_170_0_2345}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d6/9634/ba7c10ccfea81b2a44522930760c78f4"
          }}
          style={styles.ImageBackground_I0_170_0_2346}
        />
        <View style={styles.View_I0_170_0_2347}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_170_0_2348}
          />
          <View style={styles.View_I0_170_0_2351}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_170_0_2349}
            />
            <View style={styles.View_I0_170_0_2350} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_170_0_2352}
          />
        </View>
        <View style={styles.View_I0_170_0_2355}>
          <View style={styles.View_I0_170_0_2353} />
          <View style={styles.View_I0_170_0_2354} />
          <View style={styles.View_I0_170_0_2356} />
          <View style={styles.View_I0_170_0_2357} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_170_0_2360}
        />
        <View style={styles.View_I0_170_0_2362}>
          <View style={styles.View_I0_170_0_2362_0_2341} />
          <View style={styles.View_I0_170_0_2362_0_2342}>
            <Text style={styles.Text_I0_170_0_2362_0_2342}>Wedstimate</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e36d/93be/532f6e09be2b5797170ce63b206b9b6b"
          }}
          style={styles.ImageBackground_I0_170_0_2363}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff44/fa8f/7f5777859feb9dac514c69d6658e7071"
          }}
          style={styles.ImageBackground_I0_170_0_2367}
        />
        <View style={styles.View_I0_170_0_2368}>
          <Text style={styles.Text_I0_170_0_2368}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d6/9634/ba7c10ccfea81b2a44522930760c78f4"
          }}
          style={styles.ImageBackground_I0_170_0_2369}
        />
        <View style={styles.View_I0_170_0_2370}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_170_0_2371}
          />
          <View style={styles.View_I0_170_0_2374}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_170_0_2372}
            />
            <View style={styles.View_I0_170_0_2373} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_170_0_2375}
          />
        </View>
        <View style={styles.View_I0_170_0_2378}>
          <View style={styles.View_I0_170_0_2376} />
          <View style={styles.View_I0_170_0_2377} />
          <View style={styles.View_I0_170_0_2379} />
          <View style={styles.View_I0_170_0_2380} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_170_0_2383}
        />
      </View>
      <View style={styles.View_0_171} />
      <View style={styles.View_0_172}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/470d/fd84/ffb33267a7252c77c285dfbdaf8b062a"
          }}
          style={styles.ImageBackground_0_173}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/922f/faf2/3071f693147682a25383e4096b3f4500"
          }}
          style={styles.ImageBackground_0_174}
        />
        <View style={styles.View_0_175} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a06a/ebd3/83c9941fefe3f8cc427a9dd0a49f9149"
          }}
          style={styles.ImageBackground_0_178}
        />
        <View style={styles.View_0_186}>
          <Text style={styles.Text_0_186}>DASHBOARD</Text>
        </View>
        <View style={styles.View_0_187}>
          <Text style={styles.Text_0_187}>prefs</Text>
        </View>
        <View style={styles.View_0_188}>
          <Text style={styles.Text_0_188}>Next</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fc7/ef6f/45a7d328b015ddbc5c17fbc18f30273a"
          }}
          style={styles.ImageBackground_0_189}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e75/74c2/63a37adbb05d2b02d5d87c55076cc362"
          }}
          style={styles.ImageBackground_0_192}
        />
        <View style={styles.View_0_197}>
          <Text style={styles.Text_0_197}>BACK</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9386/64fc/edb875b006e2a8fcb798700395efc937"
          }}
          style={styles.ImageBackground_0_198}
        />
      </View>
      <View style={styles.View_0_199}>
        <View style={styles.View_0_201} />
        <View style={styles.View_0_200} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67f4/06b3/e8608803db39760a9e788b6b7f9da8ae"
          }}
          style={styles.ImageBackground_0_202}
        />
      </View>
      <View style={styles.View_0_203}>
        <Text style={styles.Text_0_203}>Choose </Text>
      </View>
      <View style={styles.View_0_204}>
        <Text style={styles.Text_0_204}>Packages</Text>
      </View>
      <View style={styles.View_0_205}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7808/b7ca/1440bf50c51f21d8102fb3f598e8536e"
          }}
          style={styles.ImageBackground_0_206}
        />
        <View style={styles.View_0_207}>
          <Text style={styles.Text_0_207}>Premiere Package</Text>
        </View>
        <View style={styles.View_0_208}>
          <Text style={styles.Text_0_208}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_209}>
          <Text style={styles.Text_0_209}>Venue 1</Text>
        </View>
        <View style={styles.View_0_210}>
          <Text style={styles.Text_0_210}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_211}>
          <Text style={styles.Text_0_211}>$25,000</Text>
        </View>
        <View style={styles.View_0_212}>
          <Text style={styles.Text_0_212}>DJ 1</Text>
        </View>
        <View style={styles.View_0_213}>
          <Text style={styles.Text_0_213}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_214}>
          <Text style={styles.Text_0_214}>Photographer 1</Text>
        </View>
        <View style={styles.View_0_215}>
          <Text style={styles.Text_0_215}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_216}>
          <Text style={styles.Text_0_216}>Planner 1</Text>
        </View>
        <View style={styles.View_0_217}>
          <Text style={styles.Text_0_217}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_218}>
          <Text style={styles.Text_0_218}>
            *Prices may vary based on time, date,  and circumstances.
          </Text>
        </View>
        <View style={styles.View_0_219}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff22/4672/83188506274d3e5fc37c05cacb1226af"
            }}
            style={styles.ImageBackground_0_220}
          />
          <View style={styles.View_0_221}>
            <Text style={styles.Text_0_221}>+</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7808/b7ca/1440bf50c51f21d8102fb3f598e8536e"
          }}
          style={styles.ImageBackground_0_222}
        />
        <View style={styles.View_0_223}>
          <Text style={styles.Text_0_223}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_224}>
          <Text style={styles.Text_0_224}>Venue 1</Text>
        </View>
        <View style={styles.View_0_225}>
          <Text style={styles.Text_0_225}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_226}>
          <Text style={styles.Text_0_226}>$30,000</Text>
        </View>
        <View style={styles.View_0_227}>
          <Text style={styles.Text_0_227}>DJ 1</Text>
        </View>
        <View style={styles.View_0_228}>
          <Text style={styles.Text_0_228}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_229}>
          <Text style={styles.Text_0_229}>Photographer 1</Text>
        </View>
        <View style={styles.View_0_230}>
          <Text style={styles.Text_0_230}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_231}>
          <Text style={styles.Text_0_231}>Planner 1</Text>
        </View>
        <View style={styles.View_0_232}>
          <Text style={styles.Text_0_232}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_233}>
          <Text style={styles.Text_0_233}>
            *Prices may vary based on time, date,  and circumstances.
          </Text>
        </View>
        <View style={styles.View_0_234}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff22/4672/83188506274d3e5fc37c05cacb1226af"
            }}
            style={styles.ImageBackground_0_235}
          />
          <View style={styles.View_0_236}>
            <Text style={styles.Text_0_236}>+</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7808/b7ca/1440bf50c51f21d8102fb3f598e8536e"
          }}
          style={styles.ImageBackground_0_237}
        />
        <View style={styles.View_0_238}>
          <Text style={styles.Text_0_238}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_239}>
          <Text style={styles.Text_0_239}>Venue 1</Text>
        </View>
        <View style={styles.View_0_240}>
          <Text style={styles.Text_0_240}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_241}>
          <Text style={styles.Text_0_241}>$32,500</Text>
        </View>
        <View style={styles.View_0_242}>
          <Text style={styles.Text_0_242}>DJ 1</Text>
        </View>
        <View style={styles.View_0_243}>
          <Text style={styles.Text_0_243}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_244}>
          <Text style={styles.Text_0_244}>Photographer 1</Text>
        </View>
        <View style={styles.View_0_245}>
          <Text style={styles.Text_0_245}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_246}>
          <Text style={styles.Text_0_246}>Planner 1</Text>
        </View>
        <View style={styles.View_0_247}>
          <Text style={styles.Text_0_247}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_248}>
          <Text style={styles.Text_0_248}>
            *Prices may vary based on time, date,  and circumstances.
          </Text>
        </View>
        <View style={styles.View_0_249}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff22/4672/83188506274d3e5fc37c05cacb1226af"
            }}
            style={styles.ImageBackground_0_250}
          />
          <View style={styles.View_0_251}>
            <Text style={styles.Text_0_251}>+</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7808/b7ca/1440bf50c51f21d8102fb3f598e8536e"
          }}
          style={styles.ImageBackground_0_252}
        />
        <View style={styles.View_0_253}>
          <Text style={styles.Text_0_253}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_254}>
          <Text style={styles.Text_0_254}>Venue 1</Text>
        </View>
        <View style={styles.View_0_255}>
          <Text style={styles.Text_0_255}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_256}>
          <Text style={styles.Text_0_256}>$35,000</Text>
        </View>
        <View style={styles.View_0_257}>
          <Text style={styles.Text_0_257}>DJ 1</Text>
        </View>
        <View style={styles.View_0_258}>
          <Text style={styles.Text_0_258}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_259}>
          <Text style={styles.Text_0_259}>Photographer 1</Text>
        </View>
        <View style={styles.View_0_260}>
          <Text style={styles.Text_0_260}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_261}>
          <Text style={styles.Text_0_261}>Planner 1</Text>
        </View>
        <View style={styles.View_0_262}>
          <Text style={styles.Text_0_262}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_263}>
          <Text style={styles.Text_0_263}>
            *Prices may vary based on time, date,  and circumstances.
          </Text>
        </View>
        <View style={styles.View_0_264}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff22/4672/83188506274d3e5fc37c05cacb1226af"
            }}
            style={styles.ImageBackground_0_265}
          />
          <View style={styles.View_0_266}>
            <Text style={styles.Text_0_266}>+</Text>
          </View>
        </View>
        <View style={styles.View_0_267}>
          <Text style={styles.Text_0_267}>Ultra Package</Text>
        </View>
        <View style={styles.View_0_268}>
          <Text style={styles.Text_0_268}>Super Package</Text>
        </View>
        <View style={styles.View_0_269}>
          <Text style={styles.Text_0_269}>Luxury Package</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_170: {
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
  ImageBackground_I0_170_0_2344: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_170_0_2345: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.67999267578125,
    top: 11
  },
  Text_I0_170_0_2345: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_170_0_2346: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1199951171875,
    top: 0
  },
  View_I0_170_0_2347: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.760009765625,
    top: 6.09375
  },
  ImageBackground_I0_170_0_2348: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_170_0_2351: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_170_0_2349: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.07666015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375
  },
  View_I0_170_0_2350: {
    width: 2.600006103515625,
    height: 4.875,
    top: -0.07666015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_170_0_2352: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.08001708984375
  },
  View_I0_170_0_2355: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.91998291015625,
    top: 4.875
  },
  View_I0_170_0_2353: {
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
  View_I0_170_0_2354: {
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
  View_I0_170_0_2356: {
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
  View_I0_170_0_2357: {
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
  ImageBackground_I0_170_0_2360: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8800048828125,
    top: 6.09375
  },
  View_I0_170_0_2362: {
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
  View_I0_170_0_2362_0_2341: {
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
  View_I0_170_0_2362_0_2342: {
    flexGrow: 1,
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I0_170_0_2362_0_2342: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_I0_170_0_2363: {
    flexGrow: 1,
    width: 30.68000030517578,
    height: 20.109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.67999267578125,
    top: 45.09375
  },
  ImageBackground_I0_170_0_2367: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_170_0_2368: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.67999267578125,
    top: 11
  },
  Text_I0_170_0_2368: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_170_0_2369: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1199951171875,
    top: 0
  },
  View_I0_170_0_2370: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.760009765625,
    top: 6.09375
  },
  ImageBackground_I0_170_0_2371: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_170_0_2374: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_170_0_2372: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.07666015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375
  },
  View_I0_170_0_2373: {
    width: 2.600006103515625,
    height: 4.875,
    top: -0.07666015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_170_0_2375: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.08001708984375
  },
  View_I0_170_0_2378: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.91998291015625,
    top: 4.875
  },
  View_I0_170_0_2376: {
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
  View_I0_170_0_2377: {
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
  View_I0_170_0_2379: {
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
  View_I0_170_0_2380: {
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
  ImageBackground_I0_170_0_2383: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8800048828125,
    top: 6.09375
  },
  View_0_171: {
    width: 390,
    minWidth: 390,
    height: 99,
    minHeight: 99,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 745,
    backgroundColor: "rgba(239, 239, 239, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_172: {
    width: 391,
    minWidth: 391,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 745,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_173: {
    width: 391,
    height: 1,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_174: {
    width: 24,
    height: 23,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185
  },
  View_0_175: {
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
  ImageBackground_0_178: {
    width: 24,
    height: 21,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252.5
  },
  View_0_186: {
    width: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 48.5
  },
  Text_0_186: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_187: {
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 48.5
  },
  Text_0_187: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_188: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 339,
    top: 48.5
  },
  Text_0_188: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_189: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345
  },
  ImageBackground_0_192: {
    width: 26,
    height: 21,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113
  },
  View_0_197: {
    width: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 48.5
  },
  Text_0_197: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_198: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  View_0_199: {
    width: 391,
    minWidth: 391,
    height: 667,
    minHeight: 667,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 78
  },
  View_0_201: {
    width: 391,
    minWidth: 391,
    height: 667,
    minHeight: 667,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_200: {
    width: 391,
    minWidth: 391,
    height: 667,
    minHeight: 667,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_202: {
    width: 391,
    minWidth: 391,
    height: 667,
    minHeight: 667,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_203: {
    width: 59,
    minWidth: 59,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 102
  },
  Text_0_203: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_204: {
    width: 163,
    minWidth: 163,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 120
  },
  Text_0_204: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.7796841859817505,
    textTransform: "none"
  },
  View_0_205: {
    width: 1198,
    minWidth: 1198,
    height: 471,
    minHeight: 471,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -248,
    top: 187,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_206: {
    width: 269,
    height: 471,
    minHeight: 471,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_207: {
    width: 181,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 20
  },
  Text_0_207: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_208: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 47
  },
  Text_0_208: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_209: {
    width: 81,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 90
  },
  Text_0_209: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_210: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 117
  },
  Text_0_210: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_211: {
    width: 131,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 390
  },
  Text_0_211: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_212: {
    width: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 160
  },
  Text_0_212: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_213: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 187
  },
  Text_0_213: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_214: {
    width: 156,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 230
  },
  Text_0_214: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_215: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 257
  },
  Text_0_215: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_216: {
    width: 95,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 300
  },
  Text_0_216: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_217: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 327
  },
  Text_0_217: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_218: {
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 436
  },
  Text_0_218: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_219: {
    width: 32,
    height: 49,
    top: 420,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 227,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_220: {
    width: 32,
    height: 32,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_221: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 0
  },
  Text_0_221: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  ImageBackground_0_222: {
    width: 269,
    height: 471,
    minHeight: 471,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 308,
    top: 0
  },
  View_0_223: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324,
    top: 47
  },
  Text_0_223: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_224: {
    width: 81,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324,
    top: 90
  },
  Text_0_224: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_225: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324,
    top: 117
  },
  Text_0_225: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_226: {
    width: 131,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 326,
    top: 390
  },
  Text_0_226: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_227: {
    width: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324,
    top: 160
  },
  Text_0_227: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_228: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324,
    top: 187
  },
  Text_0_228: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_229: {
    width: 156,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324,
    top: 230
  },
  Text_0_229: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_230: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324,
    top: 257
  },
  Text_0_230: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_231: {
    width: 95,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 300
  },
  Text_0_231: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_232: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 327
  },
  Text_0_232: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_233: {
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324,
    top: 436
  },
  Text_0_233: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_234: {
    width: 32,
    height: 49,
    top: 420,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 535,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_235: {
    width: 32,
    height: 32,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_236: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 0
  },
  Text_0_236: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  ImageBackground_0_237: {
    width: 269,
    height: 471,
    minHeight: 471,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 618,
    top: 0
  },
  View_0_238: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 634,
    top: 47
  },
  Text_0_238: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_239: {
    width: 81,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 634,
    top: 90
  },
  Text_0_239: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_240: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 634,
    top: 117
  },
  Text_0_240: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_241: {
    width: 131,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 636,
    top: 390
  },
  Text_0_241: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_242: {
    width: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 634,
    top: 160
  },
  Text_0_242: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_243: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 634,
    top: 187
  },
  Text_0_243: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_244: {
    width: 156,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 634,
    top: 230
  },
  Text_0_244: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_245: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 634,
    top: 257
  },
  Text_0_245: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_246: {
    width: 95,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 637,
    top: 300
  },
  Text_0_246: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_247: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 637,
    top: 327
  },
  Text_0_247: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_248: {
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 634,
    top: 436
  },
  Text_0_248: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_249: {
    width: 32,
    height: 49,
    top: 420,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 840,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_250: {
    width: 32,
    height: 32,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_251: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 0
  },
  Text_0_251: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  ImageBackground_0_252: {
    width: 269,
    height: 471,
    minHeight: 471,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 929,
    top: 0
  },
  View_0_253: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 945,
    top: 47
  },
  Text_0_253: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_254: {
    width: 81,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 945,
    top: 90
  },
  Text_0_254: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_255: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 945,
    top: 117
  },
  Text_0_255: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_256: {
    width: 131,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 947,
    top: 390
  },
  Text_0_256: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_257: {
    width: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 945,
    top: 160
  },
  Text_0_257: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_258: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 945,
    top: 187
  },
  Text_0_258: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_259: {
    width: 156,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 945,
    top: 230
  },
  Text_0_259: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_260: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 945,
    top: 257
  },
  Text_0_260: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_261: {
    width: 95,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 948,
    top: 300
  },
  Text_0_261: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_262: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 948,
    top: 327
  },
  Text_0_262: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_263: {
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 945,
    top: 436
  },
  Text_0_263: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_264: {
    width: 32,
    height: 49,
    top: 418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1156,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_265: {
    width: 32,
    height: 32,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_266: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 0
  },
  Text_0_266: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  View_0_267: {
    width: 139,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 326,
    top: 17
  },
  Text_0_267: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_268: {
    width: 151,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 634,
    top: 17
  },
  Text_0_268: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_269: {
    width: 162,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 951,
    top: 19
  },
  Text_0_269: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
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
