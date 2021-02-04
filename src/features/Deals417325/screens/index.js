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
      <View style={styles.View_0_271}>
        <View style={styles.View_0_273} />
        <View style={styles.View_0_272} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67f4/06b3/e8608803db39760a9e788b6b7f9da8ae"
          }}
          style={styles.ImageBackground_0_274}
        />
      </View>
      <View style={styles.View_0_275}>
        <Text style={styles.Text_0_275}>Find your</Text>
      </View>
      <View style={styles.View_0_276}>
        <Text style={styles.Text_0_276}>Deals</Text>
      </View>
      <View style={styles.View_0_277}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/493f/44dd/ac46194963961572f2ef738f0f527512"
          }}
          style={styles.ImageBackground_I0_277_0_2344}
        />
        <View style={styles.View_I0_277_0_2345}>
          <Text style={styles.Text_I0_277_0_2345}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d6/9634/ba7c10ccfea81b2a44522930760c78f4"
          }}
          style={styles.ImageBackground_I0_277_0_2346}
        />
        <View style={styles.View_I0_277_0_2347}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_277_0_2348}
          />
          <View style={styles.View_I0_277_0_2351}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_277_0_2349}
            />
            <View style={styles.View_I0_277_0_2350} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_277_0_2352}
          />
        </View>
        <View style={styles.View_I0_277_0_2355}>
          <View style={styles.View_I0_277_0_2353} />
          <View style={styles.View_I0_277_0_2354} />
          <View style={styles.View_I0_277_0_2356} />
          <View style={styles.View_I0_277_0_2357} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_277_0_2360}
        />
        <View style={styles.View_I0_277_0_2362}>
          <View style={styles.View_I0_277_0_2362_0_2341} />
          <View style={styles.View_I0_277_0_2362_0_2342}>
            <Text style={styles.Text_I0_277_0_2362_0_2342}>Wedstimate</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e36d/93be/532f6e09be2b5797170ce63b206b9b6b"
          }}
          style={styles.ImageBackground_I0_277_0_2363}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff44/fa8f/7f5777859feb9dac514c69d6658e7071"
          }}
          style={styles.ImageBackground_I0_277_0_2367}
        />
        <View style={styles.View_I0_277_0_2368}>
          <Text style={styles.Text_I0_277_0_2368}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d6/9634/ba7c10ccfea81b2a44522930760c78f4"
          }}
          style={styles.ImageBackground_I0_277_0_2369}
        />
        <View style={styles.View_I0_277_0_2370}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_277_0_2371}
          />
          <View style={styles.View_I0_277_0_2374}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_277_0_2372}
            />
            <View style={styles.View_I0_277_0_2373} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_277_0_2375}
          />
        </View>
        <View style={styles.View_I0_277_0_2378}>
          <View style={styles.View_I0_277_0_2376} />
          <View style={styles.View_I0_277_0_2377} />
          <View style={styles.View_I0_277_0_2379} />
          <View style={styles.View_I0_277_0_2380} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_277_0_2383}
        />
      </View>
      <View style={styles.View_0_278} />
      <View style={styles.View_0_279}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/470d/fd84/ffb33267a7252c77c285dfbdaf8b062a"
          }}
          style={styles.ImageBackground_0_280}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/922f/faf2/3071f693147682a25383e4096b3f4500"
          }}
          style={styles.ImageBackground_0_281}
        />
        <View style={styles.View_0_282} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a06a/ebd3/83c9941fefe3f8cc427a9dd0a49f9149"
          }}
          style={styles.ImageBackground_0_285}
        />
        <View style={styles.View_0_293}>
          <Text style={styles.Text_0_293}>DASHBOARD</Text>
        </View>
        <View style={styles.View_0_294}>
          <Text style={styles.Text_0_294}>prefs</Text>
        </View>
        <View style={styles.View_0_295}>
          <Text style={styles.Text_0_295}>Next</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fc7/ef6f/45a7d328b015ddbc5c17fbc18f30273a"
          }}
          style={styles.ImageBackground_0_296}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e75/74c2/63a37adbb05d2b02d5d87c55076cc362"
          }}
          style={styles.ImageBackground_0_299}
        />
        <View style={styles.View_0_304}>
          <Text style={styles.Text_0_304}>BACK</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9386/64fc/edb875b006e2a8fcb798700395efc937"
          }}
          style={styles.ImageBackground_0_305}
        />
      </View>
      <View style={styles.View_0_306}>
        <View style={styles.View_0_307}>
          <View style={styles.View_0_309} />
          <View style={styles.View_0_308} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5692/fe77/cd1ecf8d3101e3857f6787b92c25640d"
            }}
            style={styles.ImageBackground_0_310}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2469/48f4/e07fb3c32fc946cd437363b0dc244936"
          }}
          style={styles.ImageBackground_0_311}
        />
        <View style={styles.View_0_312}>
          <Text style={styles.Text_0_312}>$4,000.00*</Text>
        </View>
        <View style={styles.View_0_313}>
          <Text style={styles.Text_0_313}>$500 OFF for 6hr event!</Text>
        </View>
        <View style={styles.View_0_314}>
          <Text style={styles.Text_0_314}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_315}>
          <Text style={styles.Text_0_315}>
            *Prices may vary based on time, date,  and circumstances.
          </Text>
        </View>
        <View style={styles.View_0_316}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff22/4672/83188506274d3e5fc37c05cacb1226af"
            }}
            style={styles.ImageBackground_0_317}
          />
          <View style={styles.View_0_318}>
            <Text style={styles.Text_0_318}>+</Text>
          </View>
        </View>
        <View style={styles.View_0_319}>
          <View style={styles.View_0_320}>
            <View style={styles.View_0_322} />
            <View style={styles.View_0_321} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0728/84f8/726c0d923127d4c5cd8cfe225206e5c4"
              }}
              style={styles.ImageBackground_0_323}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2469/48f4/e07fb3c32fc946cd437363b0dc244936"
          }}
          style={styles.ImageBackground_0_324}
        />
        <View style={styles.View_0_325}>
          <Text style={styles.Text_0_325}>$1,200.00*</Text>
        </View>
        <View style={styles.View_0_326}>
          <Text style={styles.Text_0_326}>1/2 Price  Rehearsal Dinner!</Text>
        </View>
        <View style={styles.View_0_327}>
          <Text style={styles.Text_0_327}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_328}>
          <Text style={styles.Text_0_328}>
            *Prices may vary based on time, date,  and circumstances.
          </Text>
        </View>
        <View style={styles.View_0_329}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff22/4672/83188506274d3e5fc37c05cacb1226af"
            }}
            style={styles.ImageBackground_0_330}
          />
          <View style={styles.View_0_331}>
            <Text style={styles.Text_0_331}>+</Text>
          </View>
        </View>
        <View style={styles.View_0_332}>
          <View style={styles.View_0_333}>
            <View style={styles.View_0_335} />
            <View style={styles.View_0_334} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5158/41f7/37bf9e092c123aa9c35d21f9090d07bf"
              }}
              style={styles.ImageBackground_0_336}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc31/8a9c/26aa33fc166c4d1cd3bb4548089f6946"
              }}
              style={styles.ImageBackground_0_337}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2469/48f4/e07fb3c32fc946cd437363b0dc244936"
          }}
          style={styles.ImageBackground_0_338}
        />
        <View style={styles.View_0_339}>
          <Text style={styles.Text_0_339}>$500.00*</Text>
        </View>
        <View style={styles.View_0_340}>
          <Text style={styles.Text_0_340}>Extra !/2 Dozen Cupcakes FREE!</Text>
        </View>
        <View style={styles.View_0_341}>
          <Text style={styles.Text_0_341}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_342}>
          <Text style={styles.Text_0_342}>
            *Prices may vary based on time, date,  and circumstances.
          </Text>
        </View>
        <View style={styles.View_0_343}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff22/4672/83188506274d3e5fc37c05cacb1226af"
            }}
            style={styles.ImageBackground_0_344}
          />
          <View style={styles.View_0_345}>
            <Text style={styles.Text_0_345}>+</Text>
          </View>
        </View>
        <View style={styles.View_0_346}>
          <View style={styles.View_0_347}>
            <View style={styles.View_0_348}>
              <View style={styles.View_0_350} />
              <View style={styles.View_0_349} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ef1/00c7/64961a1a87286197b83b1cf187b383c8"
                }}
                style={styles.ImageBackground_0_351}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2469/48f4/e07fb3c32fc946cd437363b0dc244936"
          }}
          style={styles.ImageBackground_0_352}
        />
        <View style={styles.View_0_353}>
          <Text style={styles.Text_0_353}>$4,500.00*</Text>
        </View>
        <View style={styles.View_0_354}>
          <Text style={styles.Text_0_354}>
            Extra Hors d’Ouerves for Cocktail Hour FREE!
          </Text>
        </View>
        <View style={styles.View_0_355}>
          <Text style={styles.Text_0_355}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_356}>
          <Text style={styles.Text_0_356}>
            *Prices may vary based on time, date,  and circumstances.
          </Text>
        </View>
        <View style={styles.View_0_357}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff22/4672/83188506274d3e5fc37c05cacb1226af"
            }}
            style={styles.ImageBackground_0_358}
          />
          <View style={styles.View_0_359}>
            <Text style={styles.Text_0_359}>+</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_271: {
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
  View_0_273: {
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
  View_0_272: {
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
  ImageBackground_0_274: {
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
  View_0_275: {
    width: 64,
    minWidth: 64,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 102
  },
  Text_0_275: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_276: {
    width: 93,
    minWidth: 93,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 117
  },
  Text_0_276: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.7796841859817505,
    textTransform: "none"
  },
  View_0_277: {
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
  ImageBackground_I0_277_0_2344: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_277_0_2345: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.67999267578125,
    top: 11
  },
  Text_I0_277_0_2345: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_277_0_2346: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1199951171875,
    top: 0
  },
  View_I0_277_0_2347: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.760009765625,
    top: 6.09375
  },
  ImageBackground_I0_277_0_2348: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_277_0_2351: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_277_0_2349: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.076904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375
  },
  View_I0_277_0_2350: {
    width: 2.600006103515625,
    height: 4.875,
    top: -0.076904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_277_0_2352: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.08001708984375
  },
  View_I0_277_0_2355: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.91998291015625,
    top: 4.875
  },
  View_I0_277_0_2353: {
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
  View_I0_277_0_2354: {
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
  View_I0_277_0_2356: {
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
  View_I0_277_0_2357: {
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
  ImageBackground_I0_277_0_2360: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8800048828125,
    top: 6.09375
  },
  View_I0_277_0_2362: {
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
  View_I0_277_0_2362_0_2341: {
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
  View_I0_277_0_2362_0_2342: {
    flexGrow: 1,
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I0_277_0_2362_0_2342: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_I0_277_0_2363: {
    flexGrow: 1,
    width: 30.68000030517578,
    height: 20.109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.67999267578125,
    top: 45.09375
  },
  ImageBackground_I0_277_0_2367: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_277_0_2368: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.67999267578125,
    top: 11
  },
  Text_I0_277_0_2368: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_277_0_2369: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1199951171875,
    top: 0
  },
  View_I0_277_0_2370: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.760009765625,
    top: 6.09375
  },
  ImageBackground_I0_277_0_2371: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_277_0_2374: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_277_0_2372: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.076904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375
  },
  View_I0_277_0_2373: {
    width: 2.600006103515625,
    height: 4.875,
    top: -0.076904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_277_0_2375: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.08001708984375
  },
  View_I0_277_0_2378: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.91998291015625,
    top: 4.875
  },
  View_I0_277_0_2376: {
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
  View_I0_277_0_2377: {
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
  View_I0_277_0_2379: {
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
  View_I0_277_0_2380: {
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
  ImageBackground_I0_277_0_2383: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8800048828125,
    top: 6.09375
  },
  View_0_278: {
    width: 390,
    minWidth: 390,
    height: 99,
    minHeight: 99,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 745,
    backgroundColor: "rgba(239, 239, 239, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_279: {
    width: 391,
    minWidth: 391,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 745,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_280: {
    width: 391,
    height: 1,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_281: {
    width: 24,
    height: 23,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185
  },
  View_0_282: {
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
  ImageBackground_0_285: {
    width: 24,
    height: 21,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252.5
  },
  View_0_293: {
    width: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 48.5
  },
  Text_0_293: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_294: {
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 48.5
  },
  Text_0_294: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_295: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 339,
    top: 48.5
  },
  Text_0_295: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_296: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345
  },
  ImageBackground_0_299: {
    width: 26,
    height: 21,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113
  },
  View_0_304: {
    width: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 48.5
  },
  Text_0_304: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_305: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  View_0_306: {
    width: 1175,
    minWidth: 1175,
    height: 471,
    minHeight: 471,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -236,
    top: 184,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_307: {
    width: 269,
    minWidth: 269,
    height: 291,
    minHeight: 291,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_309: {
    width: 269,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_308: {
    width: 269,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_310: {
    width: 269,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_311: {
    width: 269,
    height: 197,
    minHeight: 197,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 274
  },
  View_0_312: {
    width: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 157,
    top: 385
  },
  Text_0_312: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_313: {
    width: 235,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 291
  },
  Text_0_313: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_314: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 318
  },
  Text_0_314: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_315: {
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 436
  },
  Text_0_315: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_316: {
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
  ImageBackground_0_317: {
    width: 32,
    height: 32,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_318: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 0
  },
  Text_0_318: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  View_0_319: {
    width: 269,
    minWidth: 269,
    height: 291,
    minHeight: 291,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298,
    top: 0
  },
  View_0_320: {
    width: 269,
    minWidth: 269,
    height: 291,
    minHeight: 291,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_322: {
    width: 269,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_321: {
    width: 269,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_323: {
    width: 269,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_324: {
    width: 269,
    height: 197,
    minHeight: 197,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298,
    top: 274
  },
  View_0_325: {
    width: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 455,
    top: 385
  },
  Text_0_325: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_326: {
    width: 180,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314,
    top: 287
  },
  Text_0_326: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_327: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314,
    top: 341
  },
  Text_0_327: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_328: {
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314,
    top: 436
  },
  Text_0_328: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_329: {
    width: 32,
    height: 49,
    top: 420,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 525,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_330: {
    width: 32,
    height: 32,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_331: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 0
  },
  Text_0_331: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  View_0_332: {
    width: 269,
    minWidth: 269,
    height: 291,
    minHeight: 291,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 602,
    top: 0
  },
  View_0_333: {
    width: 269,
    minWidth: 269,
    height: 291,
    minHeight: 291,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_335: {
    width: 269,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_334: {
    width: 269,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_336: {
    width: 269,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_337: {
    width: 69,
    height: 25,
    top: 174,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124
  },
  ImageBackground_0_338: {
    width: 269,
    height: 197,
    minHeight: 197,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 602,
    top: 274
  },
  View_0_339: {
    width: 85,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 760,
    top: 390
  },
  Text_0_339: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_340: {
    width: 169,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 618,
    top: 291
  },
  Text_0_340: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_341: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 618,
    top: 347
  },
  Text_0_341: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_342: {
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 618,
    top: 436
  },
  Text_0_342: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_343: {
    width: 32,
    height: 49,
    top: 420,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 829,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_344: {
    width: 32,
    height: 32,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_345: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 0
  },
  Text_0_345: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  View_0_346: {
    width: 269,
    minWidth: 269,
    height: 291,
    minHeight: 291,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 906,
    top: 0
  },
  View_0_347: {
    width: 269,
    minWidth: 269,
    height: 291,
    minHeight: 291,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_348: {
    width: 269,
    minWidth: 269,
    height: 291,
    minHeight: 291,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_350: {
    width: 269,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_349: {
    width: 269,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_351: {
    width: 269,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_352: {
    width: 269,
    height: 197,
    minHeight: 197,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 906,
    top: 274
  },
  View_0_353: {
    width: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1063,
    top: 385
  },
  Text_0_353: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_354: {
    width: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 922,
    top: 291
  },
  Text_0_354: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_355: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 922,
    top: 347
  },
  Text_0_355: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_356: {
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 922,
    top: 436
  },
  Text_0_356: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_357: {
    width: 32,
    height: 49,
    top: 420,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1133,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_358: {
    width: 32,
    height: 32,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_359: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 0
  },
  Text_0_359: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
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
