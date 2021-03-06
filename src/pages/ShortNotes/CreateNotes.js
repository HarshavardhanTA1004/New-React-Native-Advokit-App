import React, { memo, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  CheckBox,
  ScrollView,
} from "react-native";
import Background from "../../components/Background";

import Header from "../../components/Header";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import BackButton from "../../components/BackButton";
import { theme } from "../../core/theme";
import Selector from "react-native-easy-select";
import { dropDownConstants } from "../../Constants/Constants";
// import { emailValidator, passwordValidator } from '../../core/utils';

const CreateNotesScreen = ({ navigation }) => {
  const [cases, setCases] = useState({ value: "" });
  const [content, setContent] = useState({ value: "" });
  const [isSelected, setSelection] = useState(true);

  const _onCreatePressed = () => {
    navigation.navigate("Home");
  };

  const _onCancelPressed = () => {
    navigation.navigate("Home");
  };

  return (
    <Background>
      <Header>Add ShortNotes</Header>
      <ScrollView>
        <TextInput
          label="Type Content"
          returnKeyType="done"
          value={content.value}
          onChangeText={(text) => setContent({ value: text })}
        />

        <Selector
          theme="dropdown" // Default: 'simple'
          items={dropDownConstants.cases}
          // Specify key
          valueKey="value" // Default: 'value'
          labelKey="text" // Default: 'label'
          defaultValue={cases} // Set default value
          placeholder="Select a cases*" // Placeholder for dropdown UI
          // Styles
          textOptionStyle={{ color: "black" }}
          placeholderContainerStyle={{ paddingVertical: 20 }}
          placeholderStyle={{ color: "black" }}
          optionContainerStyle={{ backgroundColor: "white" }}
          iconStyle={{ tintColor: "black" }}
          loadingStyle={{ marginBottom: 10 }}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Private</Text>
        </View>

        <Button mode="contained" onPress={_onCreatePressed}>
          Create
        </Button>

        <Button mode="contained" onPress={_onCancelPressed}>
          Cancel
        </Button>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },

  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default memo(CreateNotes);
