import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Background from "../../components/Background";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Header from "../../components/Header";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";import { theme } from "../../core/theme";

const CreateTask = ({ navigation }) => {
  const [type, setType] = useState({ value: "" });
  const [owner, setOwner] = useState({ value: "" });
  const [associates, setAssociates] = useState({ value: "" });
  const [senior, setSenior] = useState({ value: "" });
  const [cases, setCases] = useState({ value: "" });
  const [description, setDescription] = useState({ value: "" });
  const [timeOfCompletion, setTimeOfCompletion] = useState({ value: "" });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const _onCreatePressed = () => {
    navigation.navigate("Home");
  };

  const _onCancelPressed = () => {
    navigation.navigate("Home");
  };

  return (
    <Background>
      <Header>Add Event</Header>

      <Selector
        theme="dropdown" // Default: 'simple'
        items={dropDownConstants.types}
        // Specify key
        valueKey="value" // Default: 'value'
        labelKey="text" // Default: 'label'
        defaultValue={types} // Set default value
        placeholder="Select a type*" // Placeholder for dropdown UI
        // Styles
        textOptionStyle={{ color: "black" }}
        placeholderContainerStyle={{ paddingVertical: 20 }}
        placeholderStyle={{ color: "black" }}
        optionContainerStyle={{ backgroundColor: "white" }}
        iconStyle={{ tintColor: "black" }}
        loadingStyle={{ marginBottom: 10 }}
      />

      <Selector
        theme="dropdown" // Default: 'simple'
        items={dropDownConstants.owners}
        // Specify key
        valueKey="value" // Default: 'value'
        labelKey="text" // Default: 'label'
        defaultValue={owners} // Set default value
        placeholder="Select a owner*" // Placeholder for dropdown UI
        // Styles
        textOptionStyle={{ color: "black" }}
        placeholderContainerStyle={{ paddingVertical: 20 }}
        placeholderStyle={{ color: "black" }}
        optionContainerStyle={{ backgroundColor: "white" }}
        iconStyle={{ tintColor: "black" }}
        loadingStyle={{ marginBottom: 10 }}
      />

      <Selector
        theme="dropdown" // Default: 'simple'
        items={dropDownConstants.associate}
        // Specify key
        valueKey="value" // Default: 'value'
        labelKey="text" // Default: 'label'
        defaultValue={associate} // Set default value
        placeholder="Select a associate*" // Placeholder for dropdown UI
        // Styles
        textOptionStyle={{ color: "black" }}
        placeholderContainerStyle={{ paddingVertical: 20 }}
        placeholderStyle={{ color: "black" }}
        optionContainerStyle={{ backgroundColor: "white" }}
        iconStyle={{ tintColor: "black" }}
        loadingStyle={{ marginBottom: 10 }}
      />

      <Selector
        theme="dropdown" // Default: 'simple'
        items={dropDownConstants.seniors}
        // Specify key
        valueKey="value" // Default: 'value'
        labelKey="text" // Default: 'label'
        defaultValue={seniors} // Set default value
        placeholder="Select a senior*" // Placeholder for dropdown UI
        // Styles
        textOptionStyle={{ color: "black" }}
        placeholderContainerStyle={{ paddingVertical: 20 }}
        placeholderStyle={{ color: "black" }}
        optionContainerStyle={{ backgroundColor: "white" }}
        iconStyle={{ tintColor: "black" }}
        loadingStyle={{ marginBottom: 10 }}
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
      <TextInput
        label="Description"
        returnKeyType="done"
        value={description.value}
        onChangeText={(text) => setDescription({ value: text })}
      />

      <Button title="Estimated time of completion" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Button mode="contained" onPress={_onCreatePressed}>
        Create
      </Button>

      <Button mode="contained" onPress={_onCancelPressed}>
        Cancel
      </Button>
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

export default memo(CreateTask);
