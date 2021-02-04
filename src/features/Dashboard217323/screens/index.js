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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13c6/6180/5219b98d21cbddf8b186b9e1b1d7b9ca"
        }}
        style={styles.ImageBackground_0_3}
      />
      <View style={styles.View_0_4}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2b4/bd02/f9536bf0cca7d246725f3bd0fa3317fb"
          }}
          style={styles.ImageBackground_I0_4_0_2344}
        />
        <View style={styles.View_I0_4_0_2345}>
          <Text style={styles.Text_I0_4_0_2345}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d6/9634/ba7c10ccfea81b2a44522930760c78f4"
          }}
          style={styles.ImageBackground_I0_4_0_2346}
        />
        <View style={styles.View_I0_4_0_2347}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_4_0_2348}
          />
          <View style={styles.View_I0_4_0_2351}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_4_0_2349}
            />
            <View style={styles.View_I0_4_0_2350} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_4_0_2352}
          />
        </View>
        <View style={styles.View_I0_4_0_2355}>
          <View style={styles.View_I0_4_0_2353} />
          <View style={styles.View_I0_4_0_2354} />
          <View style={styles.View_I0_4_0_2356} />
          <View style={styles.View_I0_4_0_2357} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_4_0_2360}
        />
        <View style={styles.View_I0_4_0_2362}>
          <View style={styles.View_I0_4_0_2362_0_2341} />
          <View style={styles.View_I0_4_0_2362_0_2342}>
            <Text style={styles.Text_I0_4_0_2362_0_2342}>Wedstimate</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e36d/93be/532f6e09be2b5797170ce63b206b9b6b"
          }}
          style={styles.ImageBackground_I0_4_0_2363}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff44/fa8f/7f5777859feb9dac514c69d6658e7071"
          }}
          style={styles.ImageBackground_I0_4_0_2367}
        />
        <View style={styles.View_I0_4_0_2368}>
          <Text style={styles.Text_I0_4_0_2368}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d6/9634/ba7c10ccfea81b2a44522930760c78f4"
          }}
          style={styles.ImageBackground_I0_4_0_2369}
        />
        <View style={styles.View_I0_4_0_2370}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_4_0_2371}
          />
          <View style={styles.View_I0_4_0_2374}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_4_0_2372}
            />
            <View style={styles.View_I0_4_0_2373} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_4_0_2375}
          />
        </View>
        <View style={styles.View_I0_4_0_2378}>
          <View style={styles.View_I0_4_0_2376} />
          <View style={styles.View_I0_4_0_2377} />
          <View style={styles.View_I0_4_0_2379} />
          <View style={styles.View_I0_4_0_2380} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_4_0_2383}
        />
      </View>
      <View style={styles.View_0_5} />
      <View style={styles.View_0_6}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/470d/fd84/ffb33267a7252c77c285dfbdaf8b062a"
          }}
          style={styles.ImageBackground_0_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/922f/faf2/3071f693147682a25383e4096b3f4500"
          }}
          style={styles.ImageBackground_0_8}
        />
        <View style={styles.View_0_9} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a06a/ebd3/83c9941fefe3f8cc427a9dd0a49f9149"
          }}
          style={styles.ImageBackground_0_12}
        />
        <View style={styles.View_0_20}>
          <Text style={styles.Text_0_20}>DASHBOARD</Text>
        </View>
        <View style={styles.View_0_21}>
          <Text style={styles.Text_0_21}>prefs</Text>
        </View>
        <View style={styles.View_0_22}>
          <Text style={styles.Text_0_22}>Next</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fc7/ef6f/45a7d328b015ddbc5c17fbc18f30273a"
          }}
          style={styles.ImageBackground_0_23}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e75/74c2/63a37adbb05d2b02d5d87c55076cc362"
          }}
          style={styles.ImageBackground_0_26}
        />
        <View style={styles.View_0_31}>
          <Text style={styles.Text_0_31}>BACK</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9386/64fc/edb875b006e2a8fcb798700395efc937"
          }}
          style={styles.ImageBackground_0_32}
        />
      </View>
      <View style={styles.View_0_33}>
        <Text style={styles.Text_0_33}>Jane Doe Dashboard</Text>
      </View>
      <View style={styles.View_0_34} />
      <View style={styles.View_0_35}>
        <Text style={styles.Text_0_35}>Zip Code</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c21b/d73b/c923ffc5094129006d53c3b085572baa"
        }}
        style={styles.ImageBackground_0_36}
      />
      <View style={styles.View_0_37}>
        <Text style={styles.Text_0_37}>Date of Event</Text>
      </View>
      <View style={styles.View_0_38}>
        <Text style={styles.Text_0_38}>Estimated Event Cost</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57cd/204e/ae1117db5ed9bd90a02d399b9a9d44ca"
        }}
        style={styles.ImageBackground_0_39}
      />
      <View style={styles.View_0_40}>
        <Text style={styles.Text_0_40}>Share</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04dd/1141/6e5d7b1f1cad87aadf6eeaea6c83b1df"
        }}
        style={styles.ImageBackground_0_41}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04dd/1141/6e5d7b1f1cad87aadf6eeaea6c83b1df"
        }}
        style={styles.ImageBackground_0_42}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04dd/1141/6e5d7b1f1cad87aadf6eeaea6c83b1df"
        }}
        style={styles.ImageBackground_0_43}
      />
      <View style={styles.View_0_44}>
        <Text style={styles.Text_0_44}>94607</Text>
      </View>
      <View style={styles.View_0_45}>
        <Text style={styles.Text_0_45}>05/10/21</Text>
      </View>
      <View style={styles.View_0_46}>
        <Text style={styles.Text_0_46}>PERSONALIZED</Text>
      </View>
      <View style={styles.View_0_47}>
        <Text style={styles.Text_0_47}># of Guests</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c21b/d73b/c923ffc5094129006d53c3b085572baa"
        }}
        style={styles.ImageBackground_0_48}
      />
      <View style={styles.View_0_49}>
        <Text style={styles.Text_0_49}>150</Text>
      </View>
      <View style={styles.View_0_50}>
        <Text style={styles.Text_0_50}>$0.00</Text>
      </View>
      <View style={styles.View_0_51}>
        <Text style={styles.Text_0_51}>$25,000.00</Text>
      </View>
      <View style={styles.View_0_52}>
        <Text style={styles.Text_0_52}>$25,000.00</Text>
      </View>
      <View style={styles.View_0_53}>
        <Text style={styles.Text_0_53}>St. Croix’s Chapel</Text>
      </View>
      <View style={styles.View_0_54}>
        <Text style={styles.Text_0_54}>$10,000.00</Text>
      </View>
      <View style={styles.View_0_55}>
        <View style={styles.View_0_57} />
        <View style={styles.View_0_56} />
      </View>
      <View style={styles.View_0_58}>
        <Text style={styles.Text_0_58}>Details &gt;</Text>
      </View>
      <View style={styles.View_0_59}>
        <Text style={styles.Text_0_59}>Venue</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/8223/0a7c1b9438c1d30411a7317253e73684"
        }}
        style={styles.ImageBackground_0_60}
      />
      <View style={styles.View_0_61}>
        <Text style={styles.Text_0_61}>Amaze Events</Text>
      </View>
      <View style={styles.View_0_62}>
        <Text style={styles.Text_0_62}>$4,500.00</Text>
      </View>
      <View style={styles.View_0_63}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee45/38b6/061515dbaf4e83342cc0354588d59b47"
          }}
          style={styles.ImageBackground_0_64}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79f0/2546/182fd85e081e419bf999845cda5cd51a"
          }}
          style={styles.ImageBackground_0_65}
        />
      </View>
      <View style={styles.View_0_66}>
        <Text style={styles.Text_0_66}>Details &gt;</Text>
      </View>
      <View style={styles.View_0_67}>
        <Text style={styles.Text_0_67}>Planning</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/8223/0a7c1b9438c1d30411a7317253e73684"
        }}
        style={styles.ImageBackground_0_68}
      />
      <View style={styles.View_0_69}>
        <Text style={styles.Text_0_69}>Total DJ</Text>
      </View>
      <View style={styles.View_0_70}>
        <Text style={styles.Text_0_70}>$1,500.00</Text>
      </View>
      <View style={styles.View_0_71}>
        <View style={styles.View_0_73} />
        <View style={styles.View_0_72} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2daa/6faa/b3bd9fc07edbc839a3bb1c77f4a66bc2"
          }}
          style={styles.ImageBackground_0_74}
        />
      </View>
      <View style={styles.View_0_75}>
        <Text style={styles.Text_0_75}>Details &gt;</Text>
      </View>
      <View style={styles.View_0_76}>
        <Text style={styles.Text_0_76}>DJ</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/8223/0a7c1b9438c1d30411a7317253e73684"
        }}
        style={styles.ImageBackground_0_77}
      />
      <View style={styles.View_0_78}>
        <Text style={styles.Text_0_78}>Super Chicken</Text>
      </View>
      <View style={styles.View_0_79}>
        <Text style={styles.Text_0_79}>$3,800.00</Text>
      </View>
      <View style={styles.View_0_80}>
        <View style={styles.View_0_82} />
        <View style={styles.View_0_81} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e02a/b808/4b6eb172055d7d1b2b90165bb96532bd"
          }}
          style={styles.ImageBackground_0_83}
        />
      </View>
      <View style={styles.View_0_84}>
        <Text style={styles.Text_0_84}>Details &gt;</Text>
      </View>
      <View style={styles.View_0_85}>
        <Text style={styles.Text_0_85}>Catering</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/8223/0a7c1b9438c1d30411a7317253e73684"
        }}
        style={styles.ImageBackground_0_86}
      />
      <View style={styles.View_0_87}>
        <Text style={styles.Text_0_87}>Jay’s Photography</Text>
      </View>
      <View style={styles.View_0_88}>
        <Text style={styles.Text_0_88}>$2,500.00</Text>
      </View>
      <View style={styles.View_0_89}>
        <View style={styles.View_0_91} />
        <View style={styles.View_0_90} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8725/fd54/7e089e59a925ad747629bb9c7a1a8cc6"
          }}
          style={styles.ImageBackground_0_92}
        />
      </View>
      <View style={styles.View_0_93}>
        <Text style={styles.Text_0_93}>Details &gt;</Text>
      </View>
      <View style={styles.View_0_94}>
        <Text style={styles.Text_0_94}>Photography</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/8223/0a7c1b9438c1d30411a7317253e73684"
        }}
        style={styles.ImageBackground_0_95}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1968/a23b/cde439f4d23b5a7a4f24a0df5408b629"
        }}
        style={styles.ImageBackground_0_96}
      />
      <View style={styles.View_0_102}>
        <Text style={styles.Text_0_102}>DJ  $1,500.00 6%</Text>
      </View>
      <View style={styles.View_0_103}>
        <Text style={styles.Text_0_103}>Planning  $4,500.00 18%</Text>
      </View>
      <View style={styles.View_0_104}>
        <Text style={styles.Text_0_104}>Photo  $2,500.00 10%</Text>
      </View>
      <View style={styles.View_0_105}>
        <Text style={styles.Text_0_105}>Catering  $3,800.00 15.2%</Text>
      </View>
      <View style={styles.View_0_106}>
        <Text style={styles.Text_0_106}>Venue  $10,000.00 40%</Text>
      </View>
      <View style={styles.View_0_107}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ff8/fcaa/ecfe0a50e75b992d44236293886ce4c7"
          }}
          style={styles.ImageBackground_0_108}
        />
        <View style={styles.View_0_109}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75c2/8866/ac82e8fba7a031f77fb3ff1b650feb1c"
            }}
            style={styles.ImageBackground_0_110}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e09/50cb/20438801d77f0b9cc93ccb260fe354e0"
            }}
            style={styles.ImageBackground_0_111}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de52/fbb2/33013e7d489dccea7f865218fc486303"
        }}
        style={styles.ImageBackground_0_112}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_0_3: {
    width: 853,
    minWidth: 853,
    height: 239,
    minHeight: 239,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -20,
    top: -43
  },
  View_0_4: {
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
  ImageBackground_I0_4_0_2344: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_4_0_2345: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.67999267578125,
    top: 11
  },
  Text_I0_4_0_2345: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_4_0_2346: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1199951171875,
    top: 0
  },
  View_I0_4_0_2347: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.760009765625,
    top: 6.09375
  },
  ImageBackground_I0_4_0_2348: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_4_0_2351: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_4_0_2349: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.07666015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375
  },
  View_I0_4_0_2350: {
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
  ImageBackground_I0_4_0_2352: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.08001708984375
  },
  View_I0_4_0_2355: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.91998291015625,
    top: 4.875
  },
  View_I0_4_0_2353: {
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
  View_I0_4_0_2354: {
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
  View_I0_4_0_2356: {
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
  View_I0_4_0_2357: {
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
  ImageBackground_I0_4_0_2360: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8800048828125,
    top: 6.09375
  },
  View_I0_4_0_2362: {
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
  View_I0_4_0_2362_0_2341: {
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
  View_I0_4_0_2362_0_2342: {
    flexGrow: 1,
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I0_4_0_2362_0_2342: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_I0_4_0_2363: {
    flexGrow: 1,
    width: 30.68000030517578,
    height: 20.109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.67999267578125,
    top: 45.09375
  },
  ImageBackground_I0_4_0_2367: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_4_0_2368: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.67999267578125,
    top: 11
  },
  Text_I0_4_0_2368: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_4_0_2369: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1199951171875,
    top: 0
  },
  View_I0_4_0_2370: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.760009765625,
    top: 6.09375
  },
  ImageBackground_I0_4_0_2371: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_4_0_2374: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  ImageBackground_I0_4_0_2372: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.07666015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.5999755859375
  },
  View_I0_4_0_2373: {
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
  ImageBackground_I0_4_0_2375: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.08001708984375
  },
  View_I0_4_0_2378: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.91998291015625,
    top: 4.875
  },
  View_I0_4_0_2376: {
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
  View_I0_4_0_2377: {
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
  View_I0_4_0_2379: {
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
  View_I0_4_0_2380: {
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
  ImageBackground_I0_4_0_2383: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8800048828125,
    top: 6.09375
  },
  View_0_5: {
    width: 390,
    minWidth: 390,
    height: 99,
    minHeight: 99,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1129,
    backgroundColor: "rgba(239, 239, 239, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_6: {
    width: 391,
    minWidth: 391,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1129,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_7: {
    width: 391,
    height: 1,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_8: {
    width: 24,
    height: 23,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185
  },
  View_0_9: {
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
  ImageBackground_0_12: {
    width: 24,
    height: 21,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252.5
  },
  View_0_20: {
    width: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 48.5
  },
  Text_0_20: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_21: {
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 48.5
  },
  Text_0_21: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_22: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 339,
    top: 48.5
  },
  Text_0_22: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_23: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345
  },
  ImageBackground_0_26: {
    width: 26,
    height: 21,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113
  },
  View_0_31: {
    width: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 48.5
  },
  Text_0_31: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_32: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  View_0_33: {
    width: 189,
    minWidth: 189,
    minHeight: 86,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 219
  },
  Text_0_33: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_34: {
    width: 343,
    minWidth: 343,
    height: 182,
    minHeight: 182,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 320,
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_35: {
    width: 53,
    minWidth: 53,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 355
  },
  Text_0_35: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_36: {
    width: 1,
    minWidth: 1,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 325
  },
  View_0_37: {
    width: 81,
    minWidth: 81,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 165,
    top: 355
  },
  Text_0_37: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_38: {
    width: 152,
    minWidth: 152,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 395
  },
  Text_0_38: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_39: {
    width: 102,
    minWidth: 102,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 154,
    top: 1078
  },
  View_0_40: {
    width: 80,
    minWidth: 80,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 165,
    top: 1076
  },
  Text_0_40: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_0_41: {
    width: 342,
    minWidth: 342,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 388
  },
  ImageBackground_0_42: {
    width: 342,
    minWidth: 342,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 502
  },
  ImageBackground_0_43: {
    width: 342,
    minWidth: 342,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 319
  },
  View_0_44: {
    width: 67,
    minWidth: 67,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 334
  },
  Text_0_44: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_45: {
    width: 98,
    minWidth: 98,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 153,
    top: 334
  },
  Text_0_45: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_46: {
    width: 103,
    minWidth: 103,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 196
  },
  Text_0_46: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_0_47: {
    width: 64,
    minWidth: 64,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 286,
    top: 355
  },
  Text_0_47: {
    color: "rgba(9, 55, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_48: {
    width: 1,
    minWidth: 1,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 325
  },
  View_0_49: {
    width: 41,
    minWidth: 41,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297,
    top: 334
  },
  Text_0_49: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_50: {
    width: 31,
    minWidth: 31,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 610
  },
  Text_0_50: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_51: {
    width: 61,
    minWidth: 61,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309,
    top: 610
  },
  Text_0_51: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_52: {
    width: 236,
    minWidth: 236,
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 92,
    top: 417
  },
  Text_0_52: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_53: {
    width: 162,
    minWidth: 162,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 671
  },
  Text_0_53: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_54: {
    width: 93,
    minWidth: 93,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 672
  },
  Text_0_54: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_55: {
    width: 64,
    minWidth: 64,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 663
  },
  View_0_57: {
    width: 64,
    minWidth: 64,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_56: {
    width: 64,
    minWidth: 64,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_58: {
    width: 48,
    minWidth: 48,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315,
    top: 702
  },
  Text_0_58: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_59: {
    width: 37,
    minWidth: 37,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99,
    top: 702
  },
  Text_0_59: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_60: {
    width: 266,
    minWidth: 266,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 696
  },
  View_0_61: {
    width: 127,
    minWidth: 127,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 756
  },
  Text_0_61: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_62: {
    width: 80,
    minWidth: 80,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 288,
    top: 756
  },
  Text_0_62: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_63: {
    width: 66,
    minWidth: 66,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 831
  },
  ImageBackground_0_64: {
    width: 66,
    minWidth: 66,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_65: {
    width: 66,
    minWidth: 66,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_66: {
    width: 48,
    minWidth: 48,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315,
    top: 786
  },
  Text_0_66: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_67: {
    width: 51,
    minWidth: 51,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99,
    top: 786
  },
  Text_0_67: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_68: {
    width: 266,
    minWidth: 266,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 780
  },
  View_0_69: {
    width: 102,
    minWidth: 102,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 837
  },
  Text_0_69: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_70: {
    width: 80,
    minWidth: 80,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 288,
    top: 837
  },
  Text_0_70: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_71: {
    width: 64,
    minWidth: 64,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 749
  },
  View_0_73: {
    width: 64,
    minWidth: 64,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_72: {
    width: 64,
    minWidth: 64,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_74: {
    width: 64,
    minWidth: 64,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_75: {
    width: 48,
    minWidth: 48,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315,
    top: 867
  },
  Text_0_75: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_76: {
    width: 16,
    minWidth: 16,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99,
    top: 867
  },
  Text_0_76: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_77: {
    width: 266,
    minWidth: 266,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 861
  },
  View_0_78: {
    width: 141,
    minWidth: 141,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 921
  },
  Text_0_78: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_79: {
    width: 80,
    minWidth: 80,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 288,
    top: 921
  },
  Text_0_79: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_80: {
    width: 64,
    minWidth: 64,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 912
  },
  View_0_82: {
    width: 64,
    minWidth: 64,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_81: {
    width: 64,
    minWidth: 64,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_83: {
    width: 64,
    minWidth: 64,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_84: {
    width: 48,
    minWidth: 48,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315,
    top: 951
  },
  Text_0_84: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_85: {
    width: 49,
    minWidth: 49,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99,
    top: 951
  },
  Text_0_85: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_86: {
    width: 266,
    minWidth: 266,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 945
  },
  View_0_87: {
    width: 162,
    minWidth: 162,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 1002
  },
  Text_0_87: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_88: {
    width: 80,
    minWidth: 80,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 288,
    top: 1002
  },
  Text_0_88: {
    color: "rgba(2, 56, 102, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_89: {
    width: 64,
    minWidth: 64,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 993
  },
  View_0_91: {
    width: 64,
    minWidth: 64,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_90: {
    width: 64,
    minWidth: 64,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_92: {
    width: 64,
    minWidth: 64,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_93: {
    width: 48,
    minWidth: 48,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315,
    top: 1032
  },
  Text_0_93: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_94: {
    width: 74,
    minWidth: 74,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99,
    top: 1032
  },
  Text_0_94: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_95: {
    width: 266,
    minWidth: 266,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 1026
  },
  ImageBackground_0_96: {
    width: 346,
    minWidth: 346,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 578
  },
  View_0_102: {
    width: 53,
    minWidth: 53,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225,
    top: 539
  },
  Text_0_102: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_103: {
    width: 53,
    minWidth: 53,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 539
  },
  Text_0_103: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_104: {
    width: 53,
    minWidth: 53,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 328,
    top: 539
  },
  Text_0_104: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_105: {
    width: 53,
    minWidth: 53,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 275,
    top: 539
  },
  Text_0_105: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_106: {
    width: 53,
    minWidth: 53,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 78,
    top: 539
  },
  Text_0_106: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_107: {
    width: 83,
    minWidth: 83,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.83331298828125,
    top: 663
  },
  ImageBackground_0_108: {
    width: 82,
    minWidth: 82,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.16668701171875,
    top: 0
  },
  View_0_109: {
    width: 82,
    minWidth: 82,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.16668701171875,
    top: 0
  },
  ImageBackground_0_110: {
    width: 91,
    minWidth: 91,
    height: 73,
    minHeight: 73,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.83331298828125,
    top: 0.16162109375
  },
  ImageBackground_0_111: {
    width: 91,
    minWidth: 91,
    height: 73,
    minHeight: 73,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.83331298828125,
    top: 0.16162109375
  },
  ImageBackground_0_112: {
    width: 86,
    minWidth: 86,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 153,
    top: 114
  },
  View_2: { height: 1228 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
