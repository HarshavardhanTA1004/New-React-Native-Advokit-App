import React, { memo, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import Background from "../../components/Background";

import Header from "../../components/Header";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { theme } from "../../core/theme";
import Selector from "react-native-easy-select";
import { dropDownConstants } from "../../Constants/Constants";

const CreateTimeSheet = ({ navigation }) => {
  const [hours, setHours] = useState({ value: "" });
  const [cases, setCases] = useState({ value: "" });
  const [description, setDescription] = useState({ value: "" });
  const [date, setDate] = useState({ value: "" });

  const _onCreatePressed = () => {
    navigation.navigate("Home");
  };

  const _onCancelPressed = () => {
    navigation.navigate("Home");
  };

  return (
    <Background>
      <Header>Add Timesheet</Header>
      <ScrollView>
        <TextInput
          label="Description of work"
          returnKeyType="done"
          value={description.value}
          onChangeText={(text) => setDescription({ value: text })}
        />
        <TextInput
          label="Enter the hours"
          returnKeyType="done"
          value={hours.value}
          onChangeText={(text) => setHours({ value: text })}
        />
        <TextInput
          label="Select Cases"
          returnKeyType="done"
          value={cases.value}
          onChangeText={(text) => setCases({ value: text })}
        />

        <TextInput
          label="Date of cost"
          returnKeyType="done"
          value={date.value}
          onChangeText={(text) => setDate({ value: text })}
        />

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

export default memo(CreateTimeSheet);
