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
        style={styles.ImageBackground_0_1783}
      />
      <View style={styles.View_0_1784}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b069/0ae3/68fae350e431101b20922c47905901f0"
          }}
          style={styles.ImageBackground_I0_1784_0_2344}
        />
        <View style={styles.View_I0_1784_0_2345}>
          <Text style={styles.Text_I0_1784_0_2345}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf66/929a/0191c1692978ae983b32bfa9712a556d"
          }}
          style={styles.ImageBackground_I0_1784_0_2346}
        />
        <View style={styles.View_I0_1784_0_2347}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_1784_0_2348}
          />
          <View style={styles.View_I0_1784_0_2351}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_1784_0_2349}
            />
            <View style={styles.View_I0_1784_0_2350} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_1784_0_2352}
          />
        </View>
        <View style={styles.View_I0_1784_0_2355}>
          <View style={styles.View_I0_1784_0_2353} />
          <View style={styles.View_I0_1784_0_2354} />
          <View style={styles.View_I0_1784_0_2356} />
          <View style={styles.View_I0_1784_0_2357} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_1784_0_2360}
        />
        <View style={styles.View_I0_1784_0_2362}>
          <View style={styles.View_I0_1784_0_2362_0_2341} />
          <View style={styles.View_I0_1784_0_2362_0_2342}>
            <Text style={styles.Text_I0_1784_0_2362_0_2342}>Wedstimate</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e36d/93be/532f6e09be2b5797170ce63b206b9b6b"
          }}
          style={styles.ImageBackground_I0_1784_0_2363}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff44/fa8f/7f5777859feb9dac514c69d6658e7071"
          }}
          style={styles.ImageBackground_I0_1784_0_2367}
        />
        <View style={styles.View_I0_1784_0_2368}>
          <Text style={styles.Text_I0_1784_0_2368}>9:41 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf66/929a/0191c1692978ae983b32bfa9712a556d"
          }}
          style={styles.ImageBackground_I0_1784_0_2369}
        />
        <View style={styles.View_I0_1784_0_2370}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/4607/80724245ffc614d8102bf772d05e0345"
            }}
            style={styles.ImageBackground_I0_1784_0_2371}
          />
          <View style={styles.View_I0_1784_0_2374}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f98/cc59/30772f318baaef5ce069548f03e5c9c6"
              }}
              style={styles.ImageBackground_I0_1784_0_2372}
            />
            <View style={styles.View_I0_1784_0_2373} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a71/a9ca/ed39fb83956723adc92f2a1932fa5a4b"
            }}
            style={styles.ImageBackground_I0_1784_0_2375}
          />
        </View>
        <View style={styles.View_I0_1784_0_2378}>
          <View style={styles.View_I0_1784_0_2376} />
          <View style={styles.View_I0_1784_0_2377} />
          <View style={styles.View_I0_1784_0_2379} />
          <View style={styles.View_I0_1784_0_2380} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdaf/1493/599c215dbe141ec4e36bdcce1628d2e4"
          }}
          style={styles.ImageBackground_I0_1784_0_2383}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1785}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1786}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1787}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9cac/90af/97414dbabcb10a2061ece11b9141afb4"
        }}
        style={styles.ImageBackground_0_1788}
      />
      <View style={styles.View_0_1789}>
        <Text style={styles.Text_0_1789}>Venues</Text>
      </View>
      <View style={styles.View_0_1790}>
        <Text style={styles.Text_0_1790}>Photographers</Text>
      </View>
      <View style={styles.View_0_1791}>
        <Text style={styles.Text_0_1791}>Caterers</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1792}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1793}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1794}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1795}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1796}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1797}
      />
      <View style={styles.View_0_1798}>
        <Text style={styles.Text_0_1798}>Planners</Text>
      </View>
      <View style={styles.View_0_1799}>
        <Text style={styles.Text_0_1799}>DJ’s</Text>
      </View>
      <View style={styles.View_0_1800}>
        <Text style={styles.Text_0_1800}>Flowers</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1801}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1802}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1803}
      />
      <View style={styles.View_0_1804}>
        <Text style={styles.Text_0_1804}>Photo Booths</Text>
      </View>
      <View style={styles.View_0_1805}>
        <Text style={styles.Text_0_1805}>Live Music</Text>
      </View>
      <View style={styles.View_0_1806}>
        <Text style={styles.Text_0_1806}>Invitations</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1807}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1808}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1809}
      />
      <View style={styles.View_0_1810}>
        <Text style={styles.Text_0_1810}>Event Rentals</Text>
      </View>
      <View style={styles.View_0_1811}>
        <Text style={styles.Text_0_1811}>Cakes</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1812}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1813}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0941/3e21/81940d6d8710f479f0422c09219dd917"
        }}
        style={styles.ImageBackground_0_1814}
      />
      <View style={styles.View_0_1815}>
        <Text style={styles.Text_0_1815}>Attire</Text>
      </View>
      <View style={styles.View_0_1816}>
        <Text style={styles.Text_0_1816}>Videographers</Text>
      </View>
      <View style={styles.View_0_1817}>
        <Text style={styles.Text_0_1817}>Transportation</Text>
      </View>
      <View style={styles.View_0_1818}>
        <Text style={styles.Text_0_1818}>Make-up Artists</Text>
      </View>
      <View style={styles.View_0_1819}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2044/811a/0da734e452e542fe155dadfc8d314897"
          }}
          style={styles.ImageBackground_0_1820}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cee3/f841/8573f1816bb917a7a044defee96ec5c1"
          }}
          style={styles.ImageBackground_0_1823}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c745/cb51/e76f8db85d24ee5af5f278d869d847dd"
          }}
          style={styles.ImageBackground_0_1826}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98ed/93a9/897f3cc0b0e3e127d46019c753dfbc33"
          }}
          style={styles.ImageBackground_0_1829}
        />
      </View>
      <View style={styles.View_0_1831}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d542/d333/b96c66cbcfdbb5d678cf14f50b0bf5be"
          }}
          style={styles.ImageBackground_0_1834}
        />
        <View style={styles.View_0_1835}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee78/079b/2f8aa704801f95e9032e5b4763f617da"
            }}
            style={styles.ImageBackground_0_1836}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41e0/0812/afbe38269c5f85f160e1bd18a3c26024"
            }}
            style={styles.ImageBackground_0_1839}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23ca/175a/9cccbae667e976cf0618d050ea158042"
          }}
          style={styles.ImageBackground_0_1848}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a29/94c0/e79cdf47c9d035af7213b78e747804d9"
          }}
          style={styles.ImageBackground_0_1849}
        />
      </View>
      <View style={styles.View_0_1850}>
        <View style={styles.View_0_1851}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a776/20d4/73b47b2c4092bc3814ef701bd6d95b18"
            }}
            style={styles.ImageBackground_0_1852}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2635/eaf5/7814f9d73727486a403c821fda265c8d"
            }}
            style={styles.ImageBackground_0_1855}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67e5/f9e1/7bd92cca66c4a817c0153a2a8f17a87b"
          }}
          style={styles.ImageBackground_0_1860}
        />
        <View style={styles.View_0_1861}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a680/1ba9/83b99abf4c93c705c81c2271eaf61a9e"
            }}
            style={styles.ImageBackground_0_1862}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d88a/dc0b/5d5fd952c9878d82b2e4f4647c97f17d"
            }}
            style={styles.ImageBackground_0_1865}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/752a/2c53/1a10baf44f441b949ac4bdaee1964531"
          }}
          style={styles.ImageBackground_0_1866}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a1d/c603/f4960d114a6b6abe29e41005b6612b53"
          }}
          style={styles.ImageBackground_0_1869}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a5f/2e7e/5169c0f437172d7c9de661cc48c13317"
          }}
          style={styles.ImageBackground_0_1870}
        />
      </View>
      <View style={styles.View_0_1871}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8557/ae87/16c4109bad1c164ce1b8461a3b4ffae9"
          }}
          style={styles.ImageBackground_0_1872}
        />
        <View style={styles.View_0_1873}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5759/cb0b/a0562adbbd2ae5e1f42894008f64c284"
            }}
            style={styles.ImageBackground_0_1874}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/509b/0945/65112ccdb98ee7e1effceacd1c5e7904"
            }}
            style={styles.ImageBackground_0_1877}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef74/4cc6/36ae738509eff2f104be22f57d94ab11"
          }}
          style={styles.ImageBackground_0_1894}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/08f3/aed7ef02103bbb757ad9145eee37d3a6"
          }}
          style={styles.ImageBackground_0_1897}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdd6/647d/374786a0c0cb0903eb57fcf71ef07c37"
          }}
          style={styles.ImageBackground_0_1900}
        />
      </View>
      <View style={styles.View_0_1901}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d507/0fa0/398b387efdc8de013a9ecc9d36cfff3b"
          }}
          style={styles.ImageBackground_0_1904}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d25/39b1/1fa34d6dbc3c60b67b253828e2ef6feb"
          }}
          style={styles.ImageBackground_0_1907}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba60/5a66/f30419c5bd0c6678dd55d8ed8f7abbc3"
          }}
          style={styles.ImageBackground_0_1910}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd47/598f/5fb934074e1bdc49d4fb0fa8b2093a17"
          }}
          style={styles.ImageBackground_0_1913}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d21/2ef4/717985f684ba88d507b42a3b76219d0a"
          }}
          style={styles.ImageBackground_0_1914}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c13c/643b/aa63cefe20238b714cc18496e0260d68"
          }}
          style={styles.ImageBackground_0_1917}
        />
      </View>
      <View style={styles.View_0_1918}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/248b/d30c/e2ab587f953db0979d43dc0f2ca4866e"
          }}
          style={styles.ImageBackground_0_1919}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fc5/4a3b/b025471229ccb0e9bc36f3f4a52abb15"
          }}
          style={styles.ImageBackground_0_1922}
        />
      </View>
      <View style={styles.View_0_1926}>
        <View style={styles.View_0_1927}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2809/e70a/6006898176fd7e3c0e1f4339910be546"
            }}
            style={styles.ImageBackground_0_1928}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/148d/8a55/c5feb51f6dd5168057d196cfb5b8e9a0"
            }}
            style={styles.ImageBackground_0_1931}
          />
        </View>
        <View style={styles.View_0_1932}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bca/de52/0650ad96a55263e1f989d7a3cf4ce878"
            }}
            style={styles.ImageBackground_0_1933}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4891/172d/28e4b9928356c1958279943f443a1b24"
            }}
            style={styles.ImageBackground_0_1936}
          />
        </View>
      </View>
      <View style={styles.View_0_1939}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89d9/4377/2747ab518c17209b36d958ae37d3b742"
          }}
          style={styles.ImageBackground_0_1942}
        />
        <View style={styles.View_0_1945}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e809/7638/b6bfb1e5e8ffab20853313394bfae3a7"
            }}
            style={styles.ImageBackground_0_1946}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f63/959b/8e96b42e9d8c0814a489faf0ddfd2ba1"
            }}
            style={styles.ImageBackground_0_1949}
          />
        </View>
      </View>
      <View style={styles.View_0_1951}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cb0/18c7/2d0377c166cddb53c8b977a0afbfc04a"
          }}
          style={styles.ImageBackground_0_1952}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b328/0b10/94d072a9803c0907f3fd4961ce0fdb62"
          }}
          style={styles.ImageBackground_0_1955}
        />
      </View>
      <View style={styles.View_0_1957}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac13/818e/1f0b481bffd6f299c8350933df8c5451"
          }}
          style={styles.ImageBackground_0_1958}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d98f/f10a/1733811f8649fa150453cfaf78603963"
          }}
          style={styles.ImageBackground_0_1961}
        />
      </View>
      <View style={styles.View_0_1971}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c6b/b977/c3e23636f519592e6be43a0373777f3a"
          }}
          style={styles.ImageBackground_0_1972}
        />
        <View style={styles.View_0_1973}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cda8/406f/da14a26c10419eff36d44b6e6041b0de"
            }}
            style={styles.ImageBackground_0_1974}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/611b/a3c7/d9afed4ac349a899d38fae62c42d2759"
            }}
            style={styles.ImageBackground_0_1977}
          />
        </View>
      </View>
      <View style={styles.View_0_1980}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f18a/55ad/83d08a77ebc7a8bcb31206079e5b0c1d"
          }}
          style={styles.ImageBackground_0_1981}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85bb/b50d/c901bac422e564d86a7ad1f3607d69dc"
          }}
          style={styles.ImageBackground_0_1984}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef57/cdcd/e2da6d036741a70f7062e83b0964ae1d"
          }}
          style={styles.ImageBackground_0_1985}
        />
        <View style={styles.View_0_1986}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee78/079b/2f8aa704801f95e9032e5b4763f617da"
            }}
            style={styles.ImageBackground_0_1987}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b84/ea29/0ddae891c3e495663e60201878719f02"
            }}
            style={styles.ImageBackground_0_1990}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b6a/34f4/f8162f5f242854e3bee6dd3ddde121d5"
          }}
          style={styles.ImageBackground_0_1991}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1bd/9060/e8d2fcdd75e8b5fb539faa1e5d796382"
          }}
          style={styles.ImageBackground_0_1992}
        />
      </View>
      <View style={styles.View_0_1993}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed35/715e/cf47e508482c9d8be1c67f4317aad7f7"
          }}
          style={styles.ImageBackground_0_1994}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d3a/3092/b345a9ac60c5c4a97832b85dcd0b41aa"
          }}
          style={styles.ImageBackground_0_1995}
        />
        <View style={styles.View_0_1998}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/589f/ce70/eb7e6eaf70ca074af744ed46d88b4e1a"
            }}
            style={styles.ImageBackground_0_1999}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/927e/55c4/6add371d4f74df53acc0e368fd754ed3"
            }}
            style={styles.ImageBackground_0_2002}
          />
        </View>
      </View>
      <View style={styles.View_0_2008}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64c/2508/8e3a079e2f83af0cd398392694f8219b"
          }}
          style={styles.ImageBackground_0_2009}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/319b/2abe/cdf90c50ca8dc32f268bd869e02e375a"
          }}
          style={styles.ImageBackground_0_2010}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7faf/8439/56e9643a4afade996bf9c792103fefe6"
          }}
          style={styles.ImageBackground_0_2011}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5465/ce40/0b1d27a0ec67cb8919e4c0edcea70867"
          }}
          style={styles.ImageBackground_0_2014}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a96b/b055/7e85ceee3ef5b2ad8086735b0185b92d"
          }}
          style={styles.ImageBackground_0_2015}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/518b/86f0/290ea47d606eee472720e419767e91c4"
          }}
          style={styles.ImageBackground_0_2016}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be9e/55f7/bbac5c34b5698bb2ecc7b859996c67fd"
          }}
          style={styles.ImageBackground_0_2017}
        />
        <View style={styles.View_0_2018}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e27/ae14/478559d06bf951570ccba9894a49fa1b"
            }}
            style={styles.ImageBackground_0_2019}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/850a/77ea/2256172a0279ba0b6218f633f4bd2b8c"
            }}
            style={styles.ImageBackground_0_2022}
          />
        </View>
      </View>
      <View style={styles.View_0_2025}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9448/8e03/ce5f30fbfbd60135a28e6fa91bed1f77"
          }}
          style={styles.ImageBackground_0_2026}
        />
        <View style={styles.View_0_2029}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1c1/b496/8952715dc61104964a2c8434ee22483b"
            }}
            style={styles.ImageBackground_0_2030}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/384a/f810/b3b38545c63546b1bde7a90cb46ae9b0"
            }}
            style={styles.ImageBackground_0_2033}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f63/38d3/5f3cabf17a012bfbc0730c8e15e37aa3"
          }}
          style={styles.ImageBackground_0_2039}
        />
      </View>
      <View style={styles.View_0_2041}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f72/242e/24e51d90ba948b69b5bd546d9d6f8dab"
          }}
          style={styles.ImageBackground_0_2042}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9de5/9afd/e7106df85321b38202d1d2c2577019e5"
          }}
          style={styles.ImageBackground_0_2043}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e55/066a/7339009df39e68953e7043f560f7d4d2"
          }}
          style={styles.ImageBackground_0_2044}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aedd/8179/661141e8f2a68d3244032448229870ed"
          }}
          style={styles.ImageBackground_0_2047}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00b7/1f2b/8fbf6422f55cddb33680cf798e64164a"
          }}
          style={styles.ImageBackground_0_2050}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99c0/1550/60312407f2a8a669abcea30fb3cf644a"
          }}
          style={styles.ImageBackground_0_2051}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3e3/7a11/f103ff1147835ffe8709cfc5173f3ee6"
          }}
          style={styles.ImageBackground_0_2054}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9de/710a/135b7e46cdf5709e65ff24d74c5c2f53"
          }}
          style={styles.ImageBackground_0_2057}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61d0/5e32/7a64ab7b66361f6b4957b374cd18c1bb"
          }}
          style={styles.ImageBackground_0_2058}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/557a/65e2/6cfc695539f9f4bb8bcda56fc680bcd1"
          }}
          style={styles.ImageBackground_0_2059}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/557a/65e2/6cfc695539f9f4bb8bcda56fc680bcd1"
          }}
          style={styles.ImageBackground_0_2060}
        />
      </View>
      <View style={styles.View_0_2061}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f81/e6c5/062959022c8dc9c38dd2f8f8f114221c"
          }}
          style={styles.ImageBackground_0_2064}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caa2/a5a8/38f1007ea166de01b893a6db724e93ba"
          }}
          style={styles.ImageBackground_0_2067}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b558/7d1d/07d8414370c55e29763f84ede1a58a78"
          }}
          style={styles.ImageBackground_0_2070}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04e5/f1b9/56b9cff26ab3cb243b54f886385782a4"
          }}
          style={styles.ImageBackground_0_2073}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2218/dc9f/98d68544e6050dcc6385303c47068665"
          }}
          style={styles.ImageBackground_0_2074}
        />
        <View style={styles.View_0_2075}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/754e/9f7b/ac6466000910d675faead474db481fc5"
            }}
            style={styles.ImageBackground_0_2076}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5d5/5c64/a0edc1ca1ae53706f7fcf23814d33674"
            }}
            style={styles.ImageBackground_0_2079}
          />
        </View>
      </View>
      <View style={styles.View_0_2080}>
        <Text style={styles.Text_0_2080}>Select your area of expertise</Text>
      </View>
      <View style={styles.View_0_2081} />
      <View style={styles.View_0_2082}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/470d/fd84/ffb33267a7252c77c285dfbdaf8b062a"
          }}
          style={styles.ImageBackground_0_2083}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/922f/faf2/3071f693147682a25383e4096b3f4500"
          }}
          style={styles.ImageBackground_0_2084}
        />
        <View style={styles.View_0_2085} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a06a/ebd3/83c9941fefe3f8cc427a9dd0a49f9149"
          }}
          style={styles.ImageBackground_0_2088}
        />
        <View style={styles.View_0_2096}>
          <Text style={styles.Text_0_2096}>DASHBOARD</Text>
        </View>
        <View style={styles.View_0_2097}>
          <Text style={styles.Text_0_2097}>prefs</Text>
        </View>
        <View style={styles.View_0_2098}>
          <Text style={styles.Text_0_2098}>Next</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fc7/ef6f/45a7d328b015ddbc5c17fbc18f30273a"
          }}
          style={styles.ImageBackground_0_2099}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e75/74c2/63a37adbb05d2b02d5d87c55076cc362"
          }}
          style={styles.ImageBackground_0_2102}
        />
        <View style={styles.View_0_2107}>
          <Text style={styles.Text_0_2107}>BACK</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9386/64fc/edb875b006e2a8fcb798700395efc937"
          }}
          style={styles.ImageBackground_0_2108}
        />
      </View>
      <View style={styles.View_0_2109}>
        <Text style={styles.Text_0_2109}>What type of  Vendor are you?</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_0_1783: {
    width: 2335,
    minWidth: 2335,
    height: 654,
    minHeight: 654,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1137,
    top: 77
  },
  View_0_1784: {
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
  ImageBackground_I0_1784_0_2344: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_1784_0_2345: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.67999267578125,
    top: 11
  },
  Text_I0_1784_0_2345: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_1784_0_2346: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1199951171875,
    top: 0
  },
  View_I0_1784_0_2347: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.7599792480469,
    top: 6.09375
  },
  ImageBackground_I0_1784_0_2348: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_1784_0_2351: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.000030517578125
  },
  ImageBackground_I0_1784_0_2349: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.0767822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.600006103515625
  },
  View_I0_1784_0_2350: {
    width: 2.600006103515625,
    height: 4.875,
    top: -0.0767822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.600006103515625,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_1784_0_2352: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.08001708984375
  },
  View_I0_1784_0_2355: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.91998291015625,
    top: 4.875
  },
  View_I0_1784_0_2353: {
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
  View_I0_1784_0_2354: {
    width: 3.1199951171875,
    height: 7.3125,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.680023193359375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_1784_0_2356: {
    width: 3.1199951171875,
    height: 9.75,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.360015869140625,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_1784_0_2357: {
    width: 3.120025634765625,
    height: 12.1875,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.040008544921875,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_1784_0_2360: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8800048828125,
    top: 6.09375
  },
  View_I0_1784_0_2362: {
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
  View_I0_1784_0_2362_0_2341: {
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
  View_I0_1784_0_2362_0_2342: {
    flexGrow: 1,
    width: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I0_1784_0_2362_0_2342: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_I0_1784_0_2363: {
    flexGrow: 1,
    width: 30.68000030517578,
    height: 20.109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.67999267578125,
    top: 45.09375
  },
  ImageBackground_I0_1784_0_2367: {
    flexGrow: 1,
    width: 390,
    height: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_I0_1784_0_2368: {
    flexGrow: 1,
    width: 48.87999725341797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.67999267578125,
    top: 11
  },
  Text_I0_1784_0_2368: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_1784_0_2369: {
    flexGrow: 1,
    width: 227.760009765625,
    height: 37.78125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.1199951171875,
    top: 0
  },
  View_I0_1784_0_2370: {
    flexGrow: 1,
    width: 27.55999755859375,
    height: 14.015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 357.7599792480469,
    top: 6.09375
  },
  ImageBackground_I0_1784_0_2371: {
    width: 24.96002197265625,
    height: 14.015625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_1784_0_2374: {
    width: 1.559967041015625,
    height: 4.721416473388672,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.000030517578125
  },
  ImageBackground_I0_1784_0_2372: {
    width: 4.15997314453125,
    height: 4.875,
    top: -0.0767822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.600006103515625
  },
  View_I0_1784_0_2373: {
    width: 2.600006103515625,
    height: 4.875,
    top: -0.0767822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2.600006103515625,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_1784_0_2375: {
    width: 20.800018310546875,
    height: 9.140625,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.08001708984375
  },
  View_I0_1784_0_2378: {
    flexGrow: 1,
    width: 17.1600341796875,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.91998291015625,
    top: 4.875
  },
  View_I0_1784_0_2376: {
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
  View_I0_1784_0_2377: {
    width: 3.1199951171875,
    height: 7.3125,
    top: 4.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.680023193359375,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_1784_0_2379: {
    width: 3.1199951171875,
    height: 9.75,
    top: 2.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.360015869140625,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  View_I0_1784_0_2380: {
    width: 3.120025634765625,
    height: 12.1875,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.040008544921875,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_1784_0_2383: {
    flexGrow: 1,
    width: 14.914490699768066,
    height: 12.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334.8800048828125,
    top: 6.09375
  },
  ImageBackground_0_1785: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 268
  },
  ImageBackground_0_1786: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 152,
    top: 268
  },
  ImageBackground_0_1787: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 280,
    top: 268
  },
  ImageBackground_0_1788: {
    width: 390,
    minWidth: 390,
    height: 891,
    minHeight: 891,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 170
  },
  View_0_1789: {
    width: 41,
    minWidth: 41,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 365
  },
  Text_0_1789: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1790: {
    width: 80,
    minWidth: 80,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 155,
    top: 365
  },
  Text_0_1790: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1791: {
    width: 47,
    minWidth: 47,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 365
  },
  Text_0_1791: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1792: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 400
  },
  ImageBackground_0_1793: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 152,
    top: 400
  },
  ImageBackground_0_1794: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 280,
    top: 400
  },
  ImageBackground_0_1795: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 268
  },
  ImageBackground_0_1796: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 152,
    top: 268
  },
  ImageBackground_0_1797: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 280,
    top: 268
  },
  View_0_1798: {
    width: 47,
    minWidth: 47,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 497
  },
  Text_0_1798: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1799: {
    width: 24,
    minWidth: 24,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 183,
    top: 497
  },
  Text_0_1799: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1800: {
    width: 42,
    minWidth: 42,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 305.5,
    top: 497
  },
  Text_0_1800: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1801: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 796
  },
  ImageBackground_0_1802: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 152,
    top: 796
  },
  ImageBackground_0_1803: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 280,
    top: 796
  },
  View_0_1804: {
    width: 72,
    minWidth: 72,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.5,
    top: 893
  },
  Text_0_1804: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1805: {
    width: 58,
    minWidth: 58,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 893
  },
  Text_0_1805: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1806: {
    width: 55,
    minWidth: 55,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 299,
    top: 893
  },
  Text_0_1806: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1807: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 532
  },
  ImageBackground_0_1808: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 152,
    top: 532
  },
  ImageBackground_0_1809: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 280,
    top: 532
  },
  View_0_1810: {
    width: 74,
    minWidth: 74,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 158,
    top: 629
  },
  Text_0_1810: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1811: {
    width: 35,
    minWidth: 35,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309,
    top: 629
  },
  Text_0_1811: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1812: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 664
  },
  ImageBackground_0_1813: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 152,
    top: 664
  },
  ImageBackground_0_1814: {
    width: 87,
    minWidth: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 280,
    top: 664
  },
  View_0_1815: {
    width: 29,
    minWidth: 29,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48,
    top: 761
  },
  Text_0_1815: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1816: {
    width: 80,
    minWidth: 80,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 155,
    top: 761
  },
  Text_0_1816: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1817: {
    width: 78,
    minWidth: 78,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 287.5,
    top: 761
  },
  Text_0_1817: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1818: {
    width: 85,
    minWidth: 85,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 629
  },
  Text_0_1818: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1819: {
    width: 57,
    minWidth: 57,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 295,
    top: 292
  },
  ImageBackground_0_1820: {
    width: 35,
    minWidth: 35,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 0
  },
  ImageBackground_0_1823: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 5
  },
  ImageBackground_0_1826: {
    width: 10,
    minWidth: 10,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1829: {
    width: 8,
    minWidth: 8,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49,
    top: 0
  },
  View_0_1831: {
    width: 51,
    minWidth: 51,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 170,
    top: 287
  },
  ImageBackground_0_1834: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 15
  },
  View_0_1835: {
    width: 51,
    minWidth: 51,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1836: {
    width: 50.82799530029297,
    minWidth: 50.82799530029297,
    height: 43.997047424316406,
    minHeight: 43.997047424316406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.0029296875
  },
  ImageBackground_0_1839: {
    width: 50.82799530029297,
    minWidth: 50.82799530029297,
    height: 43.997047424316406,
    minHeight: 43.997047424316406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.0029296875
  },
  ImageBackground_0_1848: {
    width: 7,
    minWidth: 7,
    height: 7,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 19
  },
  ImageBackground_0_1849: {
    width: 8,
    minWidth: 8,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 3
  },
  View_0_1850: {
    width: 34,
    minWidth: 34,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 809
  },
  View_0_1851: {
    width: 16,
    minWidth: 16,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 0
  },
  ImageBackground_0_1852: {
    width: 15.589517593383789,
    minWidth: 15.589517593383789,
    height: 38.5825309753418,
    minHeight: 38.5825309753418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.224700927734375,
    top: 0.2122802734375
  },
  ImageBackground_0_1855: {
    width: 15.589517593383789,
    minWidth: 15.589517593383789,
    height: 38.5825309753418,
    minHeight: 38.5825309753418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.224700927734375,
    top: 0.2122802734375
  },
  ImageBackground_0_1860: {
    width: 7,
    minWidth: 7,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 43
  },
  View_0_1861: {
    width: 26,
    minWidth: 26,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  ImageBackground_0_1862: {
    width: 25.815156936645508,
    minWidth: 25.815156936645508,
    height: 38.77906799316406,
    minHeight: 38.77906799316406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.220947265625
  },
  ImageBackground_0_1865: {
    width: 25.815156936645508,
    minWidth: 25.815156936645508,
    height: 38.77906799316406,
    minHeight: 38.77906799316406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.220947265625
  },
  ImageBackground_0_1866: {
    width: 34,
    minWidth: 34,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1869: {
    width: 34,
    minWidth: 34,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1870: {
    width: 1,
    minWidth: 1,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 5
  },
  View_0_1871: {
    width: 51,
    minWidth: 51,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298,
    top: 688
  },
  ImageBackground_0_1872: {
    width: 38,
    minWidth: 38,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 0
  },
  View_0_1873: {
    width: 51,
    minWidth: 51,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 20
  },
  ImageBackground_0_1874: {
    width: 50.99885940551758,
    minWidth: 50.99885940551758,
    height: 18.98740005493164,
    minHeight: 18.98740005493164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000152587890625,
    top: 0.0125732421875
  },
  ImageBackground_0_1877: {
    width: 50.99885940551758,
    minWidth: 50.99885940551758,
    height: 18.98740005493164,
    minHeight: 18.98740005493164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000152587890625,
    top: 0.0125732421875
  },
  ImageBackground_0_1894: {
    width: 9,
    minWidth: 9,
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 4
  },
  ImageBackground_0_1897: {
    width: 9,
    minWidth: 9,
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 4
  },
  ImageBackground_0_1900: {
    width: 12,
    minWidth: 12,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 3
  },
  View_0_1901: {
    width: 47,
    minWidth: 47,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 173,
    top: 683
  },
  ImageBackground_0_1904: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 0
  },
  ImageBackground_0_1907: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 7
  },
  ImageBackground_0_1910: {
    width: 18,
    minWidth: 18,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 4
  },
  ImageBackground_0_1913: {
    width: 7,
    minWidth: 7,
    height: 7,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 10
  },
  ImageBackground_0_1914: {
    width: 47,
    minWidth: 47,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1917: {
    width: 47,
    minWidth: 47,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1918: {
    width: 62,
    minWidth: 62,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 548
  },
  ImageBackground_0_1919: {
    width: 62,
    minWidth: 62,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1922: {
    width: 62,
    minWidth: 62,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1926: {
    width: 32,
    minWidth: 32,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 554
  },
  View_0_1927: {
    width: 14,
    minWidth: 14,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1928: {
    width: 13.82863998413086,
    minWidth: 13.82863998413086,
    height: 42.56441116333008,
    minHeight: 42.56441116333008,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.00030517578125,
    top: 0.4354248046875
  },
  ImageBackground_0_1931: {
    width: 13.82863998413086,
    minWidth: 13.82863998413086,
    height: 42.56441116333008,
    minHeight: 42.56441116333008,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.00030517578125,
    top: 0.4354248046875
  },
  View_0_1932: {
    width: 15,
    minWidth: 15,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 1
  },
  ImageBackground_0_1933: {
    width: 14.356607437133789,
    minWidth: 14.356607437133789,
    height: 42.78724670410156,
    minHeight: 42.78724670410156,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.4259033203125,
    top: 0.2127685546875
  },
  ImageBackground_0_1936: {
    width: 14.356607437133789,
    minWidth: 14.356607437133789,
    height: 42.78724670410156,
    minHeight: 42.78724670410156,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.4259033203125,
    top: 0.2127685546875
  },
  View_0_1939: {
    width: 24,
    minWidth: 24,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 687
  },
  ImageBackground_0_1942: {
    width: 16,
    minWidth: 16,
    height: 9,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 28
  },
  View_0_1945: {
    width: 24,
    minWidth: 24,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1946: {
    width: 23.558399200439453,
    minWidth: 23.558399200439453,
    height: 27.6003475189209,
    minHeight: 27.6003475189209,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.00006103515625,
    top: 0.0509033203125
  },
  ImageBackground_0_1949: {
    width: 23.558399200439453,
    minWidth: 23.558399200439453,
    height: 27.6003475189209,
    minHeight: 27.6003475189209,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.00006103515625,
    top: 0.0509033203125
  },
  View_0_1951: {
    width: 22,
    minWidth: 22,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 691
  },
  ImageBackground_0_1952: {
    width: 22,
    minWidth: 22,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1955: {
    width: 22,
    minWidth: 22,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1957: {
    width: 47,
    minWidth: 47,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 418
  },
  ImageBackground_0_1958: {
    width: 47,
    minWidth: 47,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1961: {
    width: 47,
    minWidth: 47,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1971: {
    width: 51,
    minWidth: 51,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 278
  },
  ImageBackground_0_1972: {
    width: 4,
    minWidth: 4,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 17
  },
  View_0_1973: {
    width: 51,
    minWidth: 51,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1974: {
    width: 50.46734619140625,
    minWidth: 50.46734619140625,
    height: 56.08203887939453,
    minHeight: 56.08203887939453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.2626953125
  },
  ImageBackground_0_1977: {
    width: 50.46734619140625,
    minWidth: 50.46734619140625,
    height: 56.08203887939453,
    minHeight: 56.08203887939453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.2626953125
  },
  View_0_1980: {
    width: 51,
    minWidth: 51,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 420
  },
  ImageBackground_0_1981: {
    width: 37,
    minWidth: 37,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 23
  },
  ImageBackground_0_1984: {
    width: 20,
    minWidth: 20,
    height: 10,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 1
  },
  ImageBackground_0_1985: {
    width: 4,
    minWidth: 4,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 5
  },
  View_0_1986: {
    width: 51,
    minWidth: 51,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1987: {
    width: 50.800716400146484,
    minWidth: 50.800716400146484,
    height: 43.76266098022461,
    minHeight: 43.76266098022461,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.2373046875
  },
  ImageBackground_0_1990: {
    width: 50.800716400146484,
    minWidth: 50.800716400146484,
    height: 43.76266098022461,
    minHeight: 43.76266098022461,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.2373046875
  },
  ImageBackground_0_1991: {
    width: 6,
    minWidth: 6,
    height: 7,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 7
  },
  ImageBackground_0_1992: {
    width: 5,
    minWidth: 5,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 7
  },
  View_0_1993: {
    width: 47,
    minWidth: 47,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 552
  },
  ImageBackground_0_1994: {
    width: 9,
    minWidth: 9,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 36
  },
  ImageBackground_0_1995: {
    width: 47,
    minWidth: 47,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 27
  },
  View_0_1998: {
    width: 47,
    minWidth: 47,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_1999: {
    width: 46.862831115722656,
    minWidth: 46.862831115722656,
    height: 41.7436408996582,
    minHeight: 41.7436408996582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.1212158203125
  },
  ImageBackground_0_2002: {
    width: 46.862831115722656,
    minWidth: 46.862831115722656,
    height: 41.7436408996582,
    minHeight: 41.7436408996582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.1212158203125
  },
  View_0_2008: {
    width: 56,
    minWidth: 56,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 169,
    top: 415
  },
  ImageBackground_0_2009: {
    width: 41,
    minWidth: 41,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 12
  },
  ImageBackground_0_2010: {
    width: 35,
    minWidth: 35,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 14
  },
  ImageBackground_0_2011: {
    width: 28,
    minWidth: 28,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 18
  },
  ImageBackground_0_2014: {
    width: 18,
    minWidth: 18,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 23
  },
  ImageBackground_0_2015: {
    width: 3,
    minWidth: 3,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 30
  },
  ImageBackground_0_2016: {
    width: 4,
    minWidth: 4,
    height: 9,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 12
  },
  ImageBackground_0_2017: {
    width: 4,
    minWidth: 4,
    height: 9,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 12
  },
  View_0_2018: {
    width: 53,
    minWidth: 53,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_2019: {
    width: 52.901268005371094,
    minWidth: 52.901268005371094,
    height: 55.83572769165039,
    minHeight: 55.83572769165039,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.273681640625
  },
  ImageBackground_0_2022: {
    width: 52.901268005371094,
    minWidth: 52.901268005371094,
    height: 55.83572769165039,
    minHeight: 55.83572769165039,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.273681640625
  },
  View_0_2025: {
    width: 41,
    minWidth: 41,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 815
  },
  ImageBackground_0_2026: {
    width: 13,
    minWidth: 13,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_0_2029: {
    width: 41,
    minWidth: 41,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8
  },
  ImageBackground_0_2030: {
    width: 40.90228271484375,
    minWidth: 40.90228271484375,
    height: 39.27695083618164,
    minHeight: 39.27695083618164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.342041015625
  },
  ImageBackground_0_2033: {
    width: 40.90228271484375,
    minWidth: 40.90228271484375,
    height: 39.27695083618164,
    minHeight: 39.27695083618164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.342041015625
  },
  ImageBackground_0_2039: {
    width: 20,
    minWidth: 20,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 14
  },
  View_0_2041: {
    width: 45,
    minWidth: 45,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 816.904296875
  },
  ImageBackground_0_2042: {
    width: 10,
    minWidth: 10,
    height: 7,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 12.095703125
  },
  ImageBackground_0_2043: {
    width: 12,
    minWidth: 12,
    height: 10,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 3.095703125
  },
  ImageBackground_0_2044: {
    width: 19,
    minWidth: 19,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 2.095703125
  },
  ImageBackground_0_2047: {
    width: 10,
    minWidth: 10,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 24.095703125
  },
  ImageBackground_0_2050: {
    width: 9,
    minWidth: 9,
    height: 10,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 14.095703125
  },
  ImageBackground_0_2051: {
    width: 9,
    minWidth: 9,
    height: 10,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 5.095703125
  },
  ImageBackground_0_2054: {
    width: 10,
    minWidth: 10,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 24.095703125
  },
  ImageBackground_0_2057: {
    width: 9,
    minWidth: 9,
    height: 10,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 14.095703125
  },
  ImageBackground_0_2058: {
    width: 35,
    minWidth: 35,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 0
  },
  ImageBackground_0_2059: {
    width: 0.18987341225147247,
    minWidth: 0.18987341225147247,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39.90509033203125,
    top: 0.095703125
  },
  ImageBackground_0_2060: {
    width: 0.18987341225147247,
    minWidth: 0.18987341225147247,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.90509033203125,
    top: 0.095703125
  },
  View_0_2061: {
    width: 16,
    minWidth: 16,
    height: 14,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55,
    top: 837
  },
  ImageBackground_0_2064: {
    width: 5,
    minWidth: 5,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 1
  },
  ImageBackground_0_2067: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 4
  },
  ImageBackground_0_2070: {
    width: 6,
    minWidth: 6,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 5
  },
  ImageBackground_0_2073: {
    width: 2,
    minWidth: 2,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 4
  },
  ImageBackground_0_2074: {
    width: 1,
    minWidth: 1,
    height: 9,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 4
  },
  View_0_2075: {
    width: 16,
    minWidth: 16,
    height: 14,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_2076: {
    width: 15.969511032104492,
    minWidth: 15.969511032104492,
    height: 13.741497039794922,
    minHeight: 13.741497039794922,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.07421875
  },
  ImageBackground_0_2079: {
    width: 15.969511032104492,
    minWidth: 15.969511032104492,
    height: 13.741497039794922,
    minHeight: 13.741497039794922,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.07421875
  },
  View_0_2080: {
    width: 218,
    minWidth: 218,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 193
  },
  Text_0_2080: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2081: {
    width: 390,
    minWidth: 390,
    height: 99,
    minHeight: 99,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 933,
    backgroundColor: "rgba(239, 239, 239, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_2082: {
    width: 391,
    minWidth: 391,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 933,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_2083: {
    width: 391,
    height: 1,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_2084: {
    width: 24,
    height: 23,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185
  },
  View_0_2085: {
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
  ImageBackground_0_2088: {
    width: 24,
    height: 21,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252.5
  },
  View_0_2096: {
    width: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 48.5
  },
  Text_0_2096: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_2097: {
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 48.5
  },
  Text_0_2097: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  View_0_2098: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 339,
    top: 48.5
  },
  Text_0_2098: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_2099: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 345
  },
  ImageBackground_0_2102: {
    width: 26,
    height: 21,
    top: 15.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113
  },
  View_0_2107: {
    width: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 48.5
  },
  Text_0_2107: {
    color: "rgba(115, 114, 114, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.061198890209198,
    textTransform: "uppercase"
  },
  ImageBackground_0_2108: {
    width: 15,
    height: 15,
    top: 19.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  View_0_2109: {
    width: 187,
    minWidth: 187,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 90
  },
  Text_0_2109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 1032 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
