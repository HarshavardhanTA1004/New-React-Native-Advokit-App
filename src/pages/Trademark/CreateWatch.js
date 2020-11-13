import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, CheckBox } from 'react-native';
import Background from '../../components/Background';

import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import { theme } from '../../core/theme';
import Selector from 'react-native-easy-select';
import {dropDownConstants} from '../../Constants/Constants';
// import { emailValidator, passwordValidator } from '../../core/utils';

const CreateWatch = ({ navigation }) => { 
  const [checked, setChecked] = React.useState('irdi');
  const [cases, setCases] = useState({ value: ''});
  const [appno, setAppno] = useState({ value: ''});
  const [isSelected, setSelection] = useState(true);

  const _onCreatePressed = () => {
    
    navigation.navigate('Home');
  };

  const _onCancelPressed = () => {
    
    navigation.navigate('Home');
  };

  return (
    <Background>
    <BackButton goBack={() => navigation.navigate('Home')} />



      <Header>Add Watch</Header>
    
      
      <TextInput
        label="Watch Word"
        returnKeyType="done"
        value={watch.value}
        onChangeText={text => setWatch({ value: text})}        
      />

      <TextInput
      label="TM Application No"
      returnKeyType="done"
      value={appno.value}
      onChangeText={text => setAppno({ value: text})}        
    />


      
    <Selector
      theme="dropdown" // Default: 'simple'
      items={dropDownConstants.frequency}
      // Specify key
      valueKey="value" // Default: 'value'
      labelKey="text" // Default: 'label'
      defaultValue={frequency} // Set default value
      placeholder="Watch Freqency check*" // Placeholder for dropdown UI
      // Styles
      textOptionStyle={{ color: 'black' }}
      placeholderContainerStyle={{ paddingVertical: 20 }}
      placeholderStyle={{ color: 'black' }}
      optionContainerStyle={{ backgroundColor: 'white' }}
      iconStyle={{ tintColor: 'black' }}
      loadingStyle={{ marginBottom: 10 }}
      
    />

    <Selector
      theme="dropdown" // Default: 'simple'
      items={dropDownConstants.class}
      // Specify key
      valueKey="value" // Default: 'value'
      labelKey="text" // Default: 'label'
      defaultValue={cls} // Set default value
      placeholder="Watch Class" // Placeholder for dropdown UI
      // Styles
      textOptionStyle={{ color: 'black' }}
      placeholderContainerStyle={{ paddingVertical: 20 }}
      placeholderStyle={{ color: 'black' }}
      optionContainerStyle={{ backgroundColor: 'white' }}
      iconStyle={{ tintColor: 'black' }}
      loadingStyle={{ marginBottom: 10 }}
      
    />
    

    <Selector
      theme="dropdown" // Default: 'simple'
      items={dropDownConstants.client}
      // Specify key
      valueKey="value" // Default: 'value'
      labelKey="text" // Default: 'label'
      defaultValue={client} // Set default value
      placeholder="Select cilent" // Placeholder for dropdown UI
      // Styles
      textOptionStyle={{ color: 'black' }}
      placeholderContainerStyle={{ paddingVertical: 20 }}
      placeholderStyle={{ color: 'black' }}
      optionContainerStyle={{ backgroundColor: 'white' }}
      iconStyle={{ tintColor: 'black' }}
      loadingStyle={{ marginBottom: 10 }}
      
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

export default memo(CreateWatch);
