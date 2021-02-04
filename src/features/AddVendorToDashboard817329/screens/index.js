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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7746/9c62/3ea4c2f0dbc057d7eaf147048e52361b"
        }}
        style={styles.ImageBackground_0_361}
      />
      <View style={styles.View_0_362}>
        <Text style={styles.Text_0_362}>Recommended</Text>
      </View>
      <View style={styles.View_0_363}>
        <Text style={styles.Text_0_363}>Caterers</Text>
      </View>
      <View style={styles.View_0_364}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/493f/44dd/ac46194963961572f2ef738f0f527512"
          }}
          style={styles.ImageBackground_I0_364_0_2344}
        />
        <View style={styles.View_I0_364_0_2345}>
          <Text style={styles.Text_I0_364_0_2345}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5b2/9b6e/9f4ebddedf0a67e048844bd03492656b"
          }}
          style={styles.ImageBackground_I0_364_0_2346}
        />
        <View style={styles.View_I0_364_0_2347}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_364_0_2348}
          />
          <View style={styles.View_I0_364_0_2351}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_364_0_2349}
            />
            <View style={styles.View_I0_364_0_2350} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_364_0_2352}
          />
        </View>
        <View style={styles.View_I0_364_0_2355}>
          <View style={styles.View_I0_364_0_2353} />
          <View style={styles.View_I0_364_0_2354} />
          <View style={styles.View_I0_364_0_2356} />
          <View style={styles.View_I0_364_0_2357} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_364_0_2360}
        />
        <View style={styles.View_I0_364_0_2362}>
          <View style={styles.View_I0_364_0_2362_0_2341} />
          <View style={styles.View_I0_364_0_2362_0_2342}>
            <Text style={styles.Text_I0_364_0_2362_0_2342}>Wedstimate</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e36d/93be/532f6e09be2b5797170ce63b206b9b6b"
          }}
          style={styles.ImageBackground_I0_364_0_2363}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff44/fa8f/7f5777859feb9dac514c69d6658e7071"
          }}
          style={styles.ImageBackground_I0_364_0_2367}
        />
        <View style={styles.View_I0_364_0_2368}>
          <Text style={styles.Text_I0_364_0_2368}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5b2/9b6e/9f4ebddedf0a67e048844bd03492656b"
          }}
          style={styles.ImageBackground_I0_364_0_2369}
        />
        <View style={styles.View_I0_364_0_2370}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_364_0_2371}
          />
          <View style={styles.View_I0_364_0_2374}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_364_0_2372}
            />
            <View style={styles.View_I0_364_0_2373} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_364_0_2375}
          />
        </View>
        <View style={styles.View_I0_364_0_2378}>
          <View style={styles.View_I0_364_0_2376} />
          <View style={styles.View_I0_364_0_2377} />
          <View style={styles.View_I0_364_0_2379} />
          <View style={styles.View_I0_364_0_2380} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_364_0_2383}
        />
      </View>
      <View style={styles.View_0_365}>
        <View style={styles.View_0_366}>
          <View style={styles.View_0_368} />
          <View style={styles.View_0_367} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5692/fe77/cd1ecf8d3101e3857f6787b92c25640d"
            }}
            style={styles.ImageBackground_0_369}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b76/c2e3/a216a1d1eccb33395e340ee4bfbe9171"
          }}
          style={styles.ImageBackground_0_370}
        />
        <View style={styles.View_0_371}>
          <Text style={styles.Text_0_371}>$4,500.00*</Text>
        </View>
        <View style={styles.View_0_372}>
          <Text style={styles.Text_0_372}>Caterer 1</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_373}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_374}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_375}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_376}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_377}
        />
        <View style={styles.View_0_378}>
          <Text style={styles.Text_0_378}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_379}>
          <Text style={styles.Text_0_379}>
            *Prices may vary based on time, date,  and circumstances.
          </Text>
        </View>
        <View style={styles.View_0_380}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff22/4672/83188506274d3e5fc37c05cacb1226af"
            }}
            style={styles.ImageBackground_0_381}
          />
          <View style={styles.View_0_382}>
            <Text style={styles.Text_0_382}>+</Text>
          </View>
        </View>
        <View style={styles.View_0_383}>
          <View style={styles.View_0_384}>
            <View style={styles.View_0_386} />
            <View style={styles.View_0_385} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0728/84f8/726c0d923127d4c5cd8cfe225206e5c4"
              }}
              style={styles.ImageBackground_0_387}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2469/48f4/e07fb3c32fc946cd437363b0dc244936"
          }}
          style={styles.ImageBackground_0_388}
        />
        <View style={styles.View_0_389}>
          <Text style={styles.Text_0_389}>$4,500.00*</Text>
        </View>
        <View style={styles.View_0_390}>
          <Text style={styles.Text_0_390}>Caterer 2</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_391}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_392}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_393}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_394}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_395}
        />
        <View style={styles.View_0_396}>
          <Text style={styles.Text_0_396}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_397}>
          <Text style={styles.Text_0_397}>
            *Prices may vary based on time, date,  and circumstances.
          </Text>
        </View>
        <View style={styles.View_0_398}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff22/4672/83188506274d3e5fc37c05cacb1226af"
            }}
            style={styles.ImageBackground_0_399}
          />
          <View style={styles.View_0_400}>
            <Text style={styles.Text_0_400}>+</Text>
          </View>
        </View>
        <View style={styles.View_0_401}>
          <View style={styles.View_0_402}>
            <View style={styles.View_0_404} />
            <View style={styles.View_0_403} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5158/41f7/37bf9e092c123aa9c35d21f9090d07bf"
              }}
              style={styles.ImageBackground_0_405}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc31/8a9c/26aa33fc166c4d1cd3bb4548089f6946"
              }}
              style={styles.ImageBackground_0_406}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2469/48f4/e07fb3c32fc946cd437363b0dc244936"
          }}
          style={styles.ImageBackground_0_407}
        />
        <View style={styles.View_0_408}>
          <Text style={styles.Text_0_408}>$4,500.00*</Text>
        </View>
        <View style={styles.View_0_409}>
          <Text style={styles.Text_0_409}>Caterer 3</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_410}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_411}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_412}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_413}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_414}
        />
        <View style={styles.View_0_415}>
          <Text style={styles.Text_0_415}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_416}>
          <Text style={styles.Text_0_416}>
            *Prices may vary based on time, date,  and circumstances.
          </Text>
        </View>
        <View style={styles.View_0_417}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff22/4672/83188506274d3e5fc37c05cacb1226af"
            }}
            style={styles.ImageBackground_0_418}
          />
          <View style={styles.View_0_419}>
            <Text style={styles.Text_0_419}>+</Text>
          </View>
        </View>
        <View style={styles.View_0_420}>
          <View style={styles.View_0_421}>
            <View style={styles.View_0_422}>
              <View style={styles.View_0_424} />
              <View style={styles.View_0_423} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ef1/00c7/64961a1a87286197b83b1cf187b383c8"
                }}
                style={styles.ImageBackground_0_425}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2469/48f4/e07fb3c32fc946cd437363b0dc244936"
          }}
          style={styles.ImageBackground_0_426}
        />
        <View style={styles.View_0_427}>
          <Text style={styles.Text_0_427}>$4,500.00*</Text>
        </View>
        <View style={styles.View_0_428}>
          <Text style={styles.Text_0_428}>Caterer 4</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_429}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_430}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_431}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_432}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac7/dd08/813f093e66a7ef70a3b35100721d09d2"
          }}
          style={styles.ImageBackground_0_433}
        />
        <View style={styles.View_0_434}>
          <Text style={styles.Text_0_434}>
            Choose a venue, based on your needs, to add to your Dashboard.
          </Text>
        </View>
        <View style={styles.View_0_435}>
          <Text style={styles.Text_0_435}>
            *Prices may vary based on time, date,  and circumstances.
          </Text>
        </View>
        <View style={styles.View_0_436}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff22/4672/83188506274d3e5fc37c05cacb1226af"
            }}
            style={styles.ImageBackground_0_437}
          />
          <View style={styles.View_0_438}>
            <Text style={styles.Text_0_438}>+</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_439} />
      <View style={styles.View_0_440}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/470d/fd84/ffb33267a7252c77c285dfbdaf8b062a"
          }}
          style={styles.ImageBackground_0_441}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/922f/faf2/3071f693147682a25383e4096b3f4500"
          }}
          style={styles.ImageBackground_0_442}
        />
        <View style={styles.View_0_443} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a06a/ebd3/83c9941fefe3f8cc427a9dd0a49f9149"
          }}
          style={styles.ImageBackground_0_446}
        />
        <View style={styles.View_0_454}>
          <Text style={styles.Text_0_454}>DASHBOARD</Text>
        </View>
        <View style={styles.View_0_455}>
          <Text style={styles.Text_0_455}>prefs</Text>
        </View>
        <View style={styles.View_0_456}>
          <Text style={styles.Text_0_456}>Next</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fc7/ef6f/45a7d328b015ddbc5c17fbc18f30273a"
          }}
          style={styles.ImageBackground_0_457}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e75/74c2/63a37adbb05d2b02d5d87c55076cc362"
          }}
          style={styles.ImageBackground_0_460}
        />
        <View style={styles.View_0_465}>
          <Text style={styles.Text_0_465}>BACK</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9386/64fc/edb875b006e2a8fcb798700395efc937"
          }}
          style={styles.ImageBackground_0_466}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_0_361: {
    width: 2453,
    minWidth: 2453,
    height: 687,
    minHeight: 687,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -579,
    top: 78
  },
  View_0_362: {
    width: 107,
    minWidth: 107,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 99
  },
  Text_0_362: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_363: {
    width: 144,
    minWidth: 144,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 111
  },
  Text_0_363: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_364: {
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
  ImageBackground_I0_364_0_2344: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_364_0_2345: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.68017578125,
    top: 11
  },
  Text_I0_364_0_2345: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_364_0_2346: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1201171875,
    top: 0
  },
  View_I0_364_0_2347: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.759765625,
    top: 6.09375
  },
  ImageBackground_I0_364_0_2348: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_364_0_2351: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_364_0_2349: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.076904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.60009765625
  },
  View_I0_364_0_2350: {
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
  ImageBackground_I0_364_0_2352: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.080078125
  },
  View_I0_364_0_2355: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.919921875,
    top: 4.875
  },
  View_I0_364_0_2353: {
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
  View_I0_364_0_2354: {
    width: 3.1199951171875,
    height: 7.3125,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.68017578125,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_364_0_2356: {
    width: 3.1199951171875,
    height: 9.75,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.35986328125,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_364_0_2357: {
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
  ImageBackground_I0_364_0_2360: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8798828125,
    top: 6.09375
  },
  View_I0_364_0_2362: {
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
  View_I0_364_0_2362_0_2341: {
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
  View_I0_364_0_2362_0_2342: {
    flexGrow: 1,
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I0_364_0_2362_0_2342: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_I0_364_0_2363: {
    flexGrow: 1,
    width: 30.68000030517578,
    height: 20.109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.68017578125,
    top: 45.09375
  },
  ImageBackground_I0_364_0_2367: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_364_0_2368: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.68017578125,
    top: 11
  },
  Text_I0_364_0_2368: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_364_0_2369: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1201171875,
    top: 0
  },
  View_I0_364_0_2370: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.759765625,
    top: 6.09375
  },
  ImageBackground_I0_364_0_2371: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_364_0_2374: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_364_0_2372: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.076904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.60009765625
  },
  View_I0_364_0_2373: {
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
  ImageBackground_I0_364_0_2375: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.080078125
  },
  View_I0_364_0_2378: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.919921875,
    top: 4.875
  },
  View_I0_364_0_2376: {
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
  View_I0_364_0_2377: {
    width: 3.1199951171875,
    height: 7.3125,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.68017578125,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_364_0_2379: {
    width: 3.1199951171875,
    height: 9.75,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.35986328125,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_364_0_2380: {
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
  ImageBackground_I0_364_0_2383: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8798828125,
    top: 6.09375
  },
  View_0_365: {
    width: 1175,
    minWidth: 1175,
    height: 471,
    minHeight: 471,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -528,
    top: 186,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_366: {
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
  View_0_368: {
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
  View_0_367: {
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
  ImageBackground_0_369: {
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
  ImageBackground_0_370: {
    width: 269,
    height: 197,
    minHeight: 197,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 274
  },
  View_0_371: {
    width: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 157,
    top: 385
  },
  Text_0_371: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_372: {
    width: 92,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 291
  },
  Text_0_372: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_373: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18
  },
  ImageBackground_0_374: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42
  },
  ImageBackground_0_375: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66
  },
  ImageBackground_0_376: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 89
  },
  ImageBackground_0_377: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113
  },
  View_0_378: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 318
  },
  Text_0_378: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_379: {
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 436
  },
  Text_0_379: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_380: {
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
  ImageBackground_0_381: {
    width: 32,
    height: 32,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_382: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 0
  },
  Text_0_382: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  View_0_383: {
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
  View_0_384: {
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
  View_0_386: {
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
  View_0_385: {
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
  ImageBackground_0_387: {
    width: 269,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_388: {
    width: 269,
    height: 197,
    minHeight: 197,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298,
    top: 274
  },
  View_0_389: {
    width: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 455,
    top: 385
  },
  Text_0_389: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_390: {
    width: 92,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314,
    top: 291
  },
  Text_0_390: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_391: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316
  },
  ImageBackground_0_392: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 340
  },
  ImageBackground_0_393: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 364
  },
  ImageBackground_0_394: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 387
  },
  ImageBackground_0_395: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 411
  },
  View_0_396: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314,
    top: 318
  },
  Text_0_396: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_397: {
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314,
    top: 436
  },
  Text_0_397: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_398: {
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
  ImageBackground_0_399: {
    width: 32,
    height: 32,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_400: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 0
  },
  Text_0_400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  View_0_401: {
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
  View_0_402: {
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
  View_0_404: {
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
  View_0_403: {
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
  ImageBackground_0_405: {
    width: 269,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_406: {
    width: 69,
    height: 25,
    top: 174,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124
  },
  ImageBackground_0_407: {
    width: 269,
    height: 197,
    minHeight: 197,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 602,
    top: 274
  },
  View_0_408: {
    width: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 759,
    top: 385
  },
  Text_0_408: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_409: {
    width: 92,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 618,
    top: 291
  },
  Text_0_409: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_410: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 620
  },
  ImageBackground_0_411: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 644
  },
  ImageBackground_0_412: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 668
  },
  ImageBackground_0_413: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 691
  },
  ImageBackground_0_414: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 715
  },
  View_0_415: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 618,
    top: 318
  },
  Text_0_415: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_416: {
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 618,
    top: 436
  },
  Text_0_416: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_417: {
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
  ImageBackground_0_418: {
    width: 32,
    height: 32,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_419: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 0
  },
  Text_0_419: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  View_0_420: {
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
  View_0_421: {
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
  View_0_422: {
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
  View_0_424: {
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
  View_0_423: {
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
  ImageBackground_0_425: {
    width: 269,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_426: {
    width: 269,
    height: 197,
    minHeight: 197,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 906,
    top: 274
  },
  View_0_427: {
    width: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1063,
    top: 385
  },
  Text_0_427: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_428: {
    width: 92,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 922,
    top: 291
  },
  Text_0_428: {
    color: "rgba(18, 70, 112, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_429: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 924
  },
  ImageBackground_0_430: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 948
  },
  ImageBackground_0_431: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 972
  },
  ImageBackground_0_432: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 995
  },
  ImageBackground_0_433: {
    width: 20,
    height: 20,
    top: 390,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1019
  },
  View_0_434: {
    width: 243,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 922,
    top: 318
  },
  Text_0_434: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_435: {
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 922,
    top: 436
  },
  Text_0_435: {
    color: "rgba(111, 111, 111, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_436: {
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
  ImageBackground_0_437: {
    width: 32,
    height: 32,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_438: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 0
  },
  Text_0_438: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  View_0_439: {
    width: 390,
    minWidth: 390,
    height: 99,
    minHeight: 99,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 746,
    backgroundColor: "rgba(239, 239, 239, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_440: {
    width: 391,
    minWidth: 391,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 746,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_441: {
    width: 391,
    height: 1,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_442: {
    width: 24,
    height: 23,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185
  },
  View_0_443: {
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
  ImageBackground_0_446: {
    width: 24,
    height: 21,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252.5
  },
  View_0_454: {
    width: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 48.5
  },
  Text_0_454: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_455: {
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 48.5
  },
  Text_0_455: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_456: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 339,
    top: 48.5
  },
  Text_0_456: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_457: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345
  },
  ImageBackground_0_460: {
    width: 26,
    height: 21,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113
  },
  View_0_465: {
    width: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 48.5
  },
  Text_0_465: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_466: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
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
