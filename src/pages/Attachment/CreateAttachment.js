import React, { memo, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  CheckBox,
} from "react-native";
import Background from "../../components/Background";

import Header from "../../components/Header";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";

import { theme } from "../../core/theme";
import Selector from "react-native-easy-select";
import { dropDownConstants } from "../../Constants/Constants";
import { ScrollView } from "react-native-gesture-handler";


const CreateAttachment = ({ navigation }) => {
  const [cases, setCases] = useState({ value: "" });
  const [description, setDescription] = useState({ value: "" });

  const [isSelected, setSelection] = useState(true);

  const _onCreatePressed = () => {
    navigation.navigate("Home");
  };

  const _onCancelPressed = () => {
    navigation.navigate("Home");
  };

  return (
    <Background>
      <Header>Add Attachment</Header>
      <ScrollView>
        <Button mode="contained" onPress={}>
          SELECT IMAGE FILE
        </Button>
        <Text>File size should be less than 10 MB</Text>

        <TextInput
          label="Description*"
          returnKeyType="done"
          value={description.value}
          onChangeText={(text) => setDescription({ value: text })}
        />
        <Selector
          theme="dropdown" // Default: 'simple'
          items={dropDownConstants.cases}
          // Specify key
          valueKey="value" // Default: 'value'
          labelKey="text" // Default: 'label'
          defaultValue={cases} // Set default value
          placeholder="Select a case" // Placeholder for dropdown UI
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

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Overwrite</Text>
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

export default memo(CreateAttachment);
