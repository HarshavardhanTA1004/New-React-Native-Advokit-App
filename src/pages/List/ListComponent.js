import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import { Avatar, Card, IconButton } from "react-native-paper";
import BackButton from "../../components/BackButton/BackButton";
import CreateButton from "../../components/ViewIngredientsButton/CreateButton";

const { width: viewportWidth } = Dimensions.get("window");

export default class RecipeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: "false",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    return (
      <ScrollView style={styles.container}>
        <View style={styles.infoContainer}>
          <CreateButton
            onPress={() => {
              let createPage = item.create;

              navigation.navigate(createPage);
            }}
          />
          <IconButton
            icon="plus"
            onPress={() => {
              let createPage = item.create;

              navigation.navigate(createPage);
            }}
          />
        </View>
      </ScrollView>
    );
  }
}
