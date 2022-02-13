import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.cardContainer}>
          <View style={styles.StoryImage}>
            <Image source={require("../assets/story_image_1.png")} style={{resizeMode:"contain",width:Dimensions.get("window").width-60,
          height:250,borderRadius:10
          }} />
          </View>
          <View style={styles.titleContainer}>
            <View style={styles.titleTextContainer}>
              <View style={styles.StoryTitle}>
            <Text  style={styles.StoryTitleText}>
              {this.props.story.title}
            </Text>
              </View>
              <View style={styles.StoryAuthor}>
              <Text  style={styles.StoryAuthorText}>
              {this.props.story.author}
            </Text>
              </View>
            </View>
          </View>
          <View styles={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
          {this.props.story.description}
            </Text>
          </View>
          <View styles={styles.actionContainer}>
            <View styles={styles.likeButton}>
              <View styles={styles.likeIcon}>
            <Ionicons name={"heart"} size={30} color={"white"} style={{with:30,height:30,marginLeft:20,marginTop:5}}/>
              </View>
              <View>
                <Text styles={styles.likeText}>
                  12k
                </Text>
              </View>
            </View>
          </View>
        </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1},
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  storyTitleText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});
