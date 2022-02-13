import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import StoryCard from "./StoryCard";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList, ScrollView } from "react-native-gesture-handler";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage:"image1"
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
        let previewImages={
          "image1":require("../assets/story_image_1.png"),
          "image2":require("../assets/story_image_2.png"),
          "image3":require("../assets/story_image_3.png"),
          "image4":require("../assets/story_image_4.png"),
          "image5":require("../assets/story_image_5.png"),
        }
        return(
          <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>New Story</Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
          <ScrollView>
            <Image source={previewImages[this.state.previewImage]} style={styles.previewImage}/>
            <View style={{height:RFValue(this.state.dropdownHeight)}}>
              <DropDownPicker items={[
                {label:"image1",value:"image1"},
                {label:"image2",value:"image2"},
                {label:"image3",value:"image3"},
                {label:"image4",value:"image4"},
                {label:"image5",value:"image5"},
              ]}
              defaultValue={this.state.previewImage}
              containerStyle={{height:40,borderRadius:20,marginBottom:10}}
              onOpen={()=>{
                
              }}
              />
            </View>
          </ScrollView>
          </View>
          </View>
        )
      }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93
  }
});
