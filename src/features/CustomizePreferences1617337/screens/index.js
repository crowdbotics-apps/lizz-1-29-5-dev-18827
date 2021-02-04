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
        style={styles.ImageBackground_0_1332}
      />
      <View style={styles.View_0_1333}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/493f/44dd/ac46194963961572f2ef738f0f527512"
          }}
          style={styles.ImageBackground_I0_1333_0_2344}
        />
        <View style={styles.View_I0_1333_0_2345}>
          <Text style={styles.Text_I0_1333_0_2345}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5b2/9b6e/9f4ebddedf0a67e048844bd03492656b"
          }}
          style={styles.ImageBackground_I0_1333_0_2346}
        />
        <View style={styles.View_I0_1333_0_2347}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_1333_0_2348}
          />
          <View style={styles.View_I0_1333_0_2351}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_1333_0_2349}
            />
            <View style={styles.View_I0_1333_0_2350} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_1333_0_2352}
          />
        </View>
        <View style={styles.View_I0_1333_0_2355}>
          <View style={styles.View_I0_1333_0_2353} />
          <View style={styles.View_I0_1333_0_2354} />
          <View style={styles.View_I0_1333_0_2356} />
          <View style={styles.View_I0_1333_0_2357} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_1333_0_2360}
        />
        <View style={styles.View_I0_1333_0_2362}>
          <View style={styles.View_I0_1333_0_2362_0_2341} />
          <View style={styles.View_I0_1333_0_2362_0_2342}>
            <Text style={styles.Text_I0_1333_0_2362_0_2342}>Wedstimate</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e36d/93be/532f6e09be2b5797170ce63b206b9b6b"
          }}
          style={styles.ImageBackground_I0_1333_0_2363}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff44/fa8f/7f5777859feb9dac514c69d6658e7071"
          }}
          style={styles.ImageBackground_I0_1333_0_2367}
        />
        <View style={styles.View_I0_1333_0_2368}>
          <Text style={styles.Text_I0_1333_0_2368}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5b2/9b6e/9f4ebddedf0a67e048844bd03492656b"
          }}
          style={styles.ImageBackground_I0_1333_0_2369}
        />
        <View style={styles.View_I0_1333_0_2370}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_1333_0_2371}
          />
          <View style={styles.View_I0_1333_0_2374}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_1333_0_2372}
            />
            <View style={styles.View_I0_1333_0_2373} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_1333_0_2375}
          />
        </View>
        <View style={styles.View_I0_1333_0_2378}>
          <View style={styles.View_I0_1333_0_2376} />
          <View style={styles.View_I0_1333_0_2377} />
          <View style={styles.View_I0_1333_0_2379} />
          <View style={styles.View_I0_1333_0_2380} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_1333_0_2383}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ba3/ba5d/2d625418195b0be1c064b13ca6ba4152"
        }}
        style={styles.ImageBackground_0_1334}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b046/c469/7553bd939647de5b293b1cdce42c74d2"
        }}
        style={styles.ImageBackground_0_1335}
      />
      <View style={styles.View_0_1336}>
        <Text style={styles.Text_0_1336}>200 Venues in your zip</Text>
      </View>
      <View style={styles.View_0_1337}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d0a/ba46/80bbc4c19fac858d2386b1a544115ddd"
          }}
          style={styles.ImageBackground_0_1338}
        />
        <View style={styles.View_0_1339}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c80/d075/8b14527a6ed8ace70c6f698175579415"
            }}
            style={styles.ImageBackground_0_1340}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df60/6483/6bebc96b63d2f9e3ec9080508020a505"
            }}
            style={styles.ImageBackground_0_1343}
          />
        </View>
      </View>
      <View style={styles.View_0_1346}>
        <Text style={styles.Text_0_1346}>Venues</Text>
      </View>
      <View style={styles.View_0_1347}>
        <Text style={styles.Text_0_1347}>Set your Preferences &gt;</Text>
      </View>
      <View style={styles.View_0_1348}>
        <Text style={styles.Text_0_1348}>Set your Preferences &gt;</Text>
      </View>
      <View style={styles.View_0_1349}>
        <Text style={styles.Text_0_1349}>Set your Preferences &gt;</Text>
      </View>
      <View style={styles.View_0_1350}>
        <Text style={styles.Text_0_1350}>Set your Preferences &gt;</Text>
      </View>
      <View style={styles.View_0_1351}>
        <Text style={styles.Text_0_1351}>200 Caterers in your zip</Text>
      </View>
      <View style={styles.View_0_1352}>
        <Text style={styles.Text_0_1352}>Caterers</Text>
      </View>
      <View style={styles.View_0_1353}>
        <Text style={styles.Text_0_1353}>200 Planers in your zip</Text>
      </View>
      <View style={styles.View_0_1354}>
        <Text style={styles.Text_0_1354}>Planners</Text>
      </View>
      <View style={styles.View_0_1355}>
        <Text style={styles.Text_0_1355}>200 DJs in your zip</Text>
      </View>
      <View style={styles.View_0_1356}>
        <Text style={styles.Text_0_1356}>DJs</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5d5/3d73/f86755209c6a9db1f692ddc5219e7f6b"
        }}
        style={styles.ImageBackground_0_1357}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5d5/3d73/f86755209c6a9db1f692ddc5219e7f6b"
        }}
        style={styles.ImageBackground_0_1358}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5d5/3d73/f86755209c6a9db1f692ddc5219e7f6b"
        }}
        style={styles.ImageBackground_0_1359}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5d5/3d73/f86755209c6a9db1f692ddc5219e7f6b"
        }}
        style={styles.ImageBackground_0_1360}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5d5/3d73/f86755209c6a9db1f692ddc5219e7f6b"
        }}
        style={styles.ImageBackground_0_1361}
      />
      <View style={styles.View_0_1362}>
        <Text style={styles.Text_0_1362}>200 Venues in your zip</Text>
      </View>
      <View style={styles.View_0_1363}>
        <Text style={styles.Text_0_1363}>Photographers</Text>
      </View>
      <View style={styles.View_0_1364}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a013/fc3c/c2ce6fe87ec39737644e5ef4ce8a3ca5"
          }}
          style={styles.ImageBackground_0_1365}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1300/4bc1/2769b5d2353dd90560d4547c4a1bcbf5"
          }}
          style={styles.ImageBackground_0_1366}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7115/ea95/069dfc7ad0ef7bdf8249b396c0a76703"
          }}
          style={styles.ImageBackground_0_1367}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55fc/7016/7fa89499db6a32f0284f3d7f7ff72b5b"
          }}
          style={styles.ImageBackground_0_1370}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec7b/2503/353d0eec972ea900afa98dfc531072dd"
          }}
          style={styles.ImageBackground_0_1371}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eca/0de9/a0e86d7c6d506b3043b7ec3c1acbfdbe"
          }}
          style={styles.ImageBackground_0_1372}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bc9/f478/15bcb17b421054d531d81864fde24fc3"
          }}
          style={styles.ImageBackground_0_1373}
        />
        <View style={styles.View_0_1374}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e490/89a5/da15fa0af177e7551d09f8ed9deb71f6"
            }}
            style={styles.ImageBackground_0_1375}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a75/e8d3/d9912becf8773a780aaa9cadfdfc36c3"
            }}
            style={styles.ImageBackground_0_1378}
          />
        </View>
      </View>
      <View style={styles.View_0_1381}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5c7/d2c9/8107aa39ad775a9dc5353e820d0a4a70"
          }}
          style={styles.ImageBackground_0_1382}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebe5/f40f/36d9ebe71efa99a0ba902d374e27e8c7"
          }}
          style={styles.ImageBackground_0_1385}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19fc/cbf9/1d65ab382d60484265c525c62181cdf0"
          }}
          style={styles.ImageBackground_0_1386}
        />
        <View style={styles.View_0_1387}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f91/626a/72addb471b17af5db5070ad669eb90d9"
            }}
            style={styles.ImageBackground_0_1388}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72d3/fc80/b77f088c62ef0abe824f3e20d7d9a700"
            }}
            style={styles.ImageBackground_0_1391}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb35/d8c0/5191d26989ce245519c48abd88547352"
          }}
          style={styles.ImageBackground_0_1392}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d5b/9af3/4168c418a63ed7de8896f64605b0e645"
          }}
          style={styles.ImageBackground_0_1393}
        />
      </View>
      <View style={styles.View_0_1394}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f302/ce97/9ec2391a52f148c8f8cf25341be76e75"
          }}
          style={styles.ImageBackground_0_1395}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40d1/b3ba/6b1dfe62ea8db275542c33574adc1eeb"
          }}
          style={styles.ImageBackground_0_1398}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ca6/3545/ce28cfdfd579ce85921ef2adcd5f81f7"
          }}
          style={styles.ImageBackground_0_1401}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c9b/fe7d/99a2ce4ceaa7c8ab1df64814eb51d5f3"
          }}
          style={styles.ImageBackground_0_1404}
        />
      </View>
      <View style={styles.View_0_1406}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e28a/a15b/b6964515e2cea66457d45d32a6aeb762"
          }}
          style={styles.ImageBackground_0_1409}
        />
        <View style={styles.View_0_1410}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d00/5ddc/1cde4a65a9851bdc9b760a8a16ab98a8"
            }}
            style={styles.ImageBackground_0_1411}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f09/5bb3/cec36e43941689b4f00dbba5ffeb81bd"
            }}
            style={styles.ImageBackground_0_1414}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66bd/b105/a6a1dc7ec16b66115a7523d15c3df2b0"
          }}
          style={styles.ImageBackground_0_1423}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3655/3194/31ea34c44004004863321f91c4e5e686"
          }}
          style={styles.ImageBackground_0_1424}
        />
      </View>
      <View style={styles.View_0_1425} />
      <View style={styles.View_0_1426}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/470d/fd84/ffb33267a7252c77c285dfbdaf8b062a"
          }}
          style={styles.ImageBackground_0_1427}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/922f/faf2/3071f693147682a25383e4096b3f4500"
          }}
          style={styles.ImageBackground_0_1428}
        />
        <View style={styles.View_0_1429} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a06a/ebd3/83c9941fefe3f8cc427a9dd0a49f9149"
          }}
          style={styles.ImageBackground_0_1432}
        />
        <View style={styles.View_0_1440}>
          <Text style={styles.Text_0_1440}>DASHBOARD</Text>
        </View>
        <View style={styles.View_0_1441}>
          <Text style={styles.Text_0_1441}>prefs</Text>
        </View>
        <View style={styles.View_0_1442}>
          <Text style={styles.Text_0_1442}>Next</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fc7/ef6f/45a7d328b015ddbc5c17fbc18f30273a"
          }}
          style={styles.ImageBackground_0_1443}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e75/74c2/63a37adbb05d2b02d5d87c55076cc362"
          }}
          style={styles.ImageBackground_0_1446}
        />
        <View style={styles.View_0_1451}>
          <Text style={styles.Text_0_1451}>BACK</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9386/64fc/edb875b006e2a8fcb798700395efc937"
          }}
          style={styles.ImageBackground_0_1452}
        />
      </View>
      <View style={styles.View_0_1453}>
        <Text style={styles.Text_0_1453}>
          Add more vendor  types at anytime
        </Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_0_1332: {
    width: 2335,
    minWidth: 2335,
    height: 654,
    minHeight: 654,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -525,
    top: 78
  },
  View_0_1333: {
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
  ImageBackground_I0_1333_0_2344: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_1333_0_2345: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.679931640625,
    top: 11
  },
  Text_I0_1333_0_2345: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_1333_0_2346: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1201171875,
    top: 0
  },
  View_I0_1333_0_2347: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.760009765625,
    top: 6.09375
  },
  ImageBackground_I0_1333_0_2348: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_1333_0_2351: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_1333_0_2349: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.076904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.60009765625
  },
  View_I0_1333_0_2350: {
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
  ImageBackground_I0_1333_0_2352: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.080078125
  },
  View_I0_1333_0_2355: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.919921875,
    top: 4.875
  },
  View_I0_1333_0_2353: {
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
  View_I0_1333_0_2354: {
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
  View_I0_1333_0_2356: {
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
  View_I0_1333_0_2357: {
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
  ImageBackground_I0_1333_0_2360: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8798828125,
    top: 6.09375
  },
  View_I0_1333_0_2362: {
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
  View_I0_1333_0_2362_0_2341: {
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
  View_I0_1333_0_2362_0_2342: {
    flexGrow: 1,
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I0_1333_0_2362_0_2342: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_I0_1333_0_2363: {
    flexGrow: 1,
    width: 30.68000030517578,
    height: 20.109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.679931640625,
    top: 45.09375
  },
  ImageBackground_I0_1333_0_2367: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_1333_0_2368: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.679931640625,
    top: 11
  },
  Text_I0_1333_0_2368: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_1333_0_2369: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1201171875,
    top: 0
  },
  View_I0_1333_0_2370: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.760009765625,
    top: 6.09375
  },
  ImageBackground_I0_1333_0_2371: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_1333_0_2374: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_1333_0_2372: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.076904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.60009765625
  },
  View_I0_1333_0_2373: {
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
  ImageBackground_I0_1333_0_2375: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.080078125
  },
  View_I0_1333_0_2378: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.919921875,
    top: 4.875
  },
  View_I0_1333_0_2376: {
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
  View_I0_1333_0_2377: {
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
  View_I0_1333_0_2379: {
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
  View_I0_1333_0_2380: {
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
  ImageBackground_I0_1333_0_2383: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8798828125,
    top: 6.09375
  },
  ImageBackground_0_1334: {
    width: 390,
    minWidth: 390,
    height: 576,
    minHeight: 576,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 170
  },
  ImageBackground_0_1335: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 200
  },
  View_0_1336: {
    width: 163,
    minWidth: 163,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 302
  },
  Text_0_1336: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1337: {
    width: 34,
    minWidth: 34,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 272
  },
  ImageBackground_0_1338: {
    width: 3,
    minWidth: 3,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 11
  },
  View_0_1339: {
    width: 34,
    minWidth: 34,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1340: {
    width: 33.6448974609375,
    minWidth: 33.6448974609375,
    height: 37.38802719116211,
    minHeight: 37.38802719116211,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.175048828125
  },
  ImageBackground_0_1343: {
    width: 33.6448974609375,
    minWidth: 33.6448974609375,
    height: 37.38802719116211,
    minHeight: 37.38802719116211,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.175048828125
  },
  View_0_1346: {
    width: 86,
    minWidth: 86,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 273
  },
  Text_0_1346: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1347: {
    width: 165,
    minWidth: 165,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 202,
    top: 333
  },
  Text_0_1347: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1348: {
    width: 165,
    minWidth: 165,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 202,
    top: 420
  },
  Text_0_1348: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1349: {
    width: 165,
    minWidth: 165,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 202,
    top: 534
  },
  Text_0_1349: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1350: {
    width: 165,
    minWidth: 165,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 202,
    top: 623
  },
  Text_0_1350: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1351: {
    width: 171,
    minWidth: 171,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 501
  },
  Text_0_1351: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1352: {
    width: 98,
    minWidth: 98,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 472
  },
  Text_0_1352: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1353: {
    width: 163,
    minWidth: 163,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 591
  },
  Text_0_1353: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1354: {
    width: 102,
    minWidth: 102,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 562
  },
  Text_0_1354: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1355: {
    width: 137,
    minWidth: 137,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 685
  },
  Text_0_1355: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1356: {
    width: 45,
    minWidth: 45,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 656
  },
  Text_0_1356: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1357: {
    width: 343,
    minWidth: 343,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 327
  },
  ImageBackground_0_1358: {
    width: 343,
    minWidth: 343,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 618
  },
  ImageBackground_0_1359: {
    width: 343,
    minWidth: 343,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 712
  },
  ImageBackground_0_1360: {
    width: 343,
    minWidth: 343,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 414
  },
  ImageBackground_0_1361: {
    width: 343,
    minWidth: 343,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 528
  },
  View_0_1362: {
    width: 163,
    minWidth: 163,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 389
  },
  Text_0_1362: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1363: {
    width: 171,
    minWidth: 171,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 360
  },
  Text_0_1363: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1364: {
    width: 37,
    minWidth: 37,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 310,
    top: 665
  },
  ImageBackground_0_1365: {
    width: 27,
    minWidth: 27,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 8
  },
  ImageBackground_0_1366: {
    width: 23,
    minWidth: 23,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 9
  },
  ImageBackground_0_1367: {
    width: 18,
    minWidth: 18,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 12
  },
  ImageBackground_0_1370: {
    width: 12,
    minWidth: 12,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 15
  },
  ImageBackground_0_1371: {
    width: 2,
    minWidth: 2,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 20
  },
  ImageBackground_0_1372: {
    width: 3,
    minWidth: 3,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 8
  },
  ImageBackground_0_1373: {
    width: 3,
    minWidth: 3,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 8
  },
  View_0_1374: {
    width: 35,
    minWidth: 35,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1375: {
    width: 34.93479919433594,
    minWidth: 34.93479919433594,
    height: 37.223819732666016,
    minHeight: 37.223819732666016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.182373046875
  },
  ImageBackground_0_1378: {
    width: 34.93479919433594,
    minWidth: 34.93479919433594,
    height: 37.223819732666016,
    minHeight: 37.223819732666016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.182373046875
  },
  View_0_1381: {
    width: 31,
    minWidth: 31,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316,
    top: 580
  },
  ImageBackground_0_1382: {
    width: 22,
    minWidth: 22,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 14
  },
  ImageBackground_0_1385: {
    width: 12,
    minWidth: 12,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 1
  },
  ImageBackground_0_1386: {
    width: 2,
    minWidth: 2,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 3
  },
  View_0_1387: {
    width: 31,
    minWidth: 31,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1388: {
    width: 30.87886619567871,
    minWidth: 30.87886619567871,
    height: 26.854360580444336,
    minHeight: 26.854360580444336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.145751953125
  },
  ImageBackground_0_1391: {
    width: 30.87886619567871,
    minWidth: 30.87886619567871,
    height: 26.854360580444336,
    minHeight: 26.854360580444336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.145751953125
  },
  ImageBackground_0_1392: {
    width: 4,
    minWidth: 4,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 4
  },
  ImageBackground_0_1393: {
    width: 3,
    minWidth: 3,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 5
  },
  View_0_1394: {
    width: 42,
    minWidth: 42,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309,
    top: 481
  },
  ImageBackground_0_1395: {
    width: 26,
    minWidth: 26,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 0
  },
  ImageBackground_0_1398: {
    width: 18,
    minWidth: 18,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 4
  },
  ImageBackground_0_1401: {
    width: 7,
    minWidth: 7,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1404: {
    width: 6,
    minWidth: 6,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36,
    top: 0
  },
  View_0_1406: {
    width: 35,
    minWidth: 35,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 310,
    top: 366
  },
  ImageBackground_0_1409: {
    width: 14,
    minWidth: 14,
    height: 14,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 10
  },
  View_0_1410: {
    width: 35,
    minWidth: 35,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1411: {
    width: 34.8819580078125,
    minWidth: 34.8819580078125,
    height: 29.997987747192383,
    minHeight: 29.997987747192383,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.001953125
  },
  ImageBackground_0_1414: {
    width: 34.8819580078125,
    minWidth: 34.8819580078125,
    height: 29.997987747192383,
    minHeight: 29.997987747192383,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.001953125
  },
  ImageBackground_0_1423: {
    width: 5,
    minWidth: 5,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 13
  },
  ImageBackground_0_1424: {
    width: 5,
    minWidth: 5,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 2
  },
  View_0_1425: {
    width: 390,
    minWidth: 390,
    height: 99,
    minHeight: 99,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 746,
    backgroundColor: "rgba(239, 239, 239, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1426: {
    width: 391,
    minWidth: 391,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 746,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_1427: {
    width: 391,
    height: 1,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_1428: {
    width: 24,
    height: 23,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185
  },
  View_0_1429: {
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
  ImageBackground_0_1432: {
    width: 24,
    height: 21,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252.5
  },
  View_0_1440: {
    width: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 48.5
  },
  Text_0_1440: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_1441: {
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 48.5
  },
  Text_0_1441: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_1442: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 339,
    top: 48.5
  },
  Text_0_1442: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_1443: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345
  },
  ImageBackground_0_1446: {
    width: 26,
    height: 21,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113
  },
  View_0_1451: {
    width: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 48.5
  },
  Text_0_1451: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_1452: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  View_0_1453: {
    width: 137,
    minWidth: 137,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57,
    top: 193
  },
  Text_0_1453: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 13,
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
