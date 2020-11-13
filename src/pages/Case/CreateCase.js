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
import BackButton from "../../components/BackButton";
import { theme } from "../../core/theme";
import Selector from "react-native-easy-select";
import { dropDownConstants } from "../../Constants/Constants";
// import { emailValidator, passwordValidator } from '../../core/utils';

const CreateCase = ({ navigation }) => {
  const [category, setCategory] = useState({ value: "" });
  const [courtType, setCourtType] = useState({ value: "" });
  const [stage, setStage] = useState({ value: "" });
  const [cases, setCases] = useState({ value: "" });
  const [des, setDescription] = useState({ value: "" });
  const [state, setState] = useState({ value: "" });
  const [cc, setCC] = useState({ value: "" });
  const [casetype, setCasetype] = useState({ value: "" });
  const [district, setDistrict] = useState({ value: "" });
  const [year, setYear] = useState({ value: "" });
  const [roc, setRoc] = useState({ value: "" });
  const [rankno, setRankno] = useState({ value: "" });
  const [owner, setOwner] = useState({ value: "" });
  const [partner, setPartner] = useState({ value: "" });
  const [client, setClient] = useState({ value: "" });
  const [opponent, setOpponent] = useState({ value: "" });
  const [opponentAdvocate, setOpponentAdvocate] = useState({ value: "" });
  const [relevent, setRelevent] = useState({ value: "" });
  const [place, setPlace] = useState({ value: "" });
  const [pac, setPac] = useState({ value: "" });

  const _onCreatePressed = () => {
    navigation.navigate("Home");
  };

  const _onCancelPressed = () => {
    navigation.navigate("Home");
  };

  return (
    <Background>
      <Header>Add Case</Header>
      <ScrollView>
        <Selector
          theme="dropdown" // Default: 'simple'
          items={dropDownConstants.Category}
          // Specify key
          valueKey="value" // Default: 'value'
          labelKey="text" // Default: 'label'
          defaultValue={category} // Set default value
          placeholder="Category*" // Placeholder for dropdown UI
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
          items={dropDownConstants.Stage}
          // Specify key
          valueKey="value" // Default: 'value'
          labelKey="text" // Default: 'label'
          defaultValue={stage} // Set default value
          placeholder="Stage*" // Placeholder for dropdown UI
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
          items={dropDownConstants.CourtType}
          // Specify key
          valueKey="value" // Default: 'value'
          labelKey="text" // Default: 'label'
          defaultValue={type} // Set default value
          placeholder="Court type*" // Placeholder for dropdown UI
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
          items={dropDownConstants.State}
          // Specify key
          valueKey="value" // Default: 'value'
          labelKey="text" // Default: 'label'
          defaultValue={state} // Set default value
          placeholder="State*" // Placeholder for dropdown UI
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
          items={dropDownConstants.district}
          // Specify key
          valueKey="value" // Default: 'value'
          labelKey="text" // Default: 'label'
          defaultValue={district} // Set default value
          placeholder="District*" // Placeholder for dropdown UI
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
          items={dropDownConstants.CourtComplex}
          // Specify key
          valueKey="value" // Default: 'value'
          labelKey="text" // Default: 'label'
          defaultValue={cc} // Set default value
          placeholder="Court Complex*" // Placeholder for dropdown UI
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
          items={dropDownConstants.Casetype}
          // Specify key
          valueKey="value" // Default: 'value'
          labelKey="text" // Default: 'label'
          defaultValue={casetype} // Set default value
          placeholder="Case type*" // Placeholder for dropdown UI
          // Styles
          textOptionStyle={{ color: "black" }}
          placeholderContainerStyle={{ paddingVertical: 20 }}
          placeholderStyle={{ color: "black" }}
          optionContainerStyle={{ backgroundColor: "white" }}
          iconStyle={{ tintColor: "black" }}
          loadingStyle={{ marginBottom: 10 }}
        />

        <TextInput
          label="Case number"
          returnKeyType="done"
          value={cases.value}
          onChangeText={(text) => setCases({ value: text })}
        />

        <Selector
          theme="dropdown" // Default: 'simple'
          items={dropDownConstants.year}
          // Specify key
          valueKey="value" // Default: 'value'
          labelKey="text" // Default: 'label'
          defaultValue={year} // Set default value
          placeholder="Year*" // Placeholder for dropdown UI
          // Styles
          textOptionStyle={{ color: "black" }}
          placeholderContainerStyle={{ paddingVertical: 20 }}
          placeholderStyle={{ color: "black" }}
          optionContainerStyle={{ backgroundColor: "white" }}
          iconStyle={{ tintColor: "black" }}
          loadingStyle={{ marginBottom: 10 }}
        />
        <TextInput
          label="Rank Of Client"
          returnKeyType="done"
          value={roc.value}
          onChangeText={(text) => setRoc({ value: text })}
        />
        <TextInput
          label="Rank Number"
          returnKeyType="done"
          value={rankno.value}
          onChangeText={(text) => setRankno({ value: text })}
        />

        <Selector
          theme="dropdown" // Default: 'simple'
          items={dropDownConstants.owner}
          // Specify key
          valueKey="value" // Default: 'value'
          labelKey="text" // Default: 'label'
          defaultValue={owner} // Set default value
          placeholder="Owner*" // Placeholder for dropdown UI
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
          items={dropDownConstants.client}
          // Specify key
          valueKey="value" // Default: 'value'
          labelKey="text" // Default: 'label'
          defaultValue={client} // Set default value
          placeholder="Client" // Placeholder for dropdown UI
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
          items={dropDownConstants.partners}
          // Specify key
          valueKey="value" // Default: 'value'
          labelKey="text" // Default: 'label'
          defaultValue={partner} // Set default value
          placeholder="Partner" // Placeholder for dropdown UI
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
          items={dropDownConstants.opponent}
          // Specify key
          valueKey="value" // Default: 'value'
          labelKey="text" // Default: 'label'
          defaultValue={opponent} // Set default value
          placeholder="Opponent" // Placeholder for dropdown UI
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
          items={dropDownConstants.opponentAdvocate}
          // Specify key
          valueKey="value" // Default: 'value'
          labelKey="text" // Default: 'label'
          defaultValue={opponentAdvocate} // Set default value
          placeholder="Opposite Advocate" // Placeholder for dropdown UI
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
          value={des.value}
          onChangeText={(text) => setDescription({ value: text })}
        />

        <TextInput
          label="Relevent Acts/ Judgement"
          returnKeyType="done"
          value={relevent.value}
          onChangeText={(text) => setRelevent({ value: text })}
        />

        <TextInput
          label="Place"
          returnKeyType="done"
          value={place.value}
          onChangeText={(text) => setPlace({ value: text })}
        />

        <TextInput
          label="Per apperance charge"
          returnKeyType="done"
          value={pac.value}
          onChangeText={(text) => setPac({ value: text })}
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

export default memo(CreateCase);
