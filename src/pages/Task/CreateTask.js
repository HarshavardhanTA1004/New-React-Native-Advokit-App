import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../../components/Background';

import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import { theme } from '../../core/theme';
// import { emailValidator, passwordValidator } from '../../core/utils';

const CreateTaskScreen = ({ navigation }) => {
  const [type, setType] = useState({ value: ''});
  const [owner, setOwner] = useState({ value: ''});
  const [associates, setAssociates] = useState({ value: ''});
  const [senior, setSenior] = useState({ value: ''});
  const [cases, setCases] = useState({ value: ''});
  const [description, setDescription] = useState({ value: ''});
  const [timeOfCompletion, setTimeOfCompletion] = useState({ value: ''});

  const _onCreatePressed = () => {
    
    navigation.navigate('Home');
  };

  const _onCancelPressed = () => {
    
    navigation.navigate('Home');
  };

  return (
    <Background>



      <Header>Add Event</Header>

      <TextInput
        label="Type"
        returnKeyType="next"
        value={type.value}
        onChangeText={text => setType({ value: text})}
        autoCapitalize="none"
        autoCompleteType="type"
        textContentType="type"
        
      />

      <TextInput
        label="Select Owner"
        returnKeyType="done"
        value={owner.value}
        onChangeText={text => setOwner({ value: text})}        
      />

      <TextInput
        label="Select Associates"
        returnKeyType="done"
        value={associates.value}
        onChangeText={text => setAssociates({ value: text})}        
      />

      <TextInput
        label="Select Senior"
        returnKeyType="done"
        value={senior.value}
        onChangeText={text => setSenior({ value: text})}        
      />
      <TextInput
        label="Select Cases"
        returnKeyType="done"
        value={cases.value}
        onChangeText={text => setCases({ value: text})}        
      />
      <TextInput
        label="Description"
        returnKeyType="done"
        value={description.value}
        onChangeText={text => setDescription({ value: text})}        
      />
      <TextInput
        label="Estimated time of completion"
        returnKeyType="done"
        value={timeOfCompletion.value}
        onChangeText={text => setTimeOfCompletion({ value: text})}        
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
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(CreateTaskScreen);
