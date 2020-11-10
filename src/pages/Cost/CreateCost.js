import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../../components/Background';

import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import { theme } from '../../core/theme';
// import { emailValidator, passwordValidator } from '../../core/utils';

const CreateCostScreen = ({ navigation }) => {
  const [type, setType] = useState({ value: ''});
  const [amount, setAmount] = useState({ value: ''}); 
  const [task, setTask] = useState({ value: ''});
  const [cases, setCases] = useState({ value: ''});
  const [description, setDescription] = useState({ value: ''});
  const [date, setDate] = useState({ value: ''});

  const _onCreatePressed = () => {
    
    navigation.navigate('Home');
  };

  const _onCancelPressed = () => {
    
    navigation.navigate('Home');
  };

  return (
    <Background>
    <BackButton goBack={() => navigation.navigate('Home')} />



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
        label="Amount"
        returnKeyType="done"
        value={amount.value}
        onChangeText={text => setAmount({ value: text})}        
      />

      <TextInput
        label=""
        returnKeyType="done"
        value={a.value}
        onChangeText={text => setAssociates({ value: text})}        
      />

      <TextInput
        label="Select Task"
        returnKeyType="done"
        value={task.value}
        onChangeText={text => setTask({ value: text})}        
      />
      <TextInput
        label="Select Cases"
        returnKeyType="done"
        value={cases.value}
        onChangeText={text => setCases({ value: text})}        
      />
      <TextInput
        label="Description of Cost"
        returnKeyType="done"
        value={description.value}
        onChangeText={text => setDescription({ value: text})}        
      />
      <TextInput
        label="Date of cost"
        returnKeyType="done"
        value={date.value}
        onChangeText={text => setDate({ value: text})}        
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

export default memo(CreateCostScreen);
