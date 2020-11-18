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

const CreateTrademark = ({ navigation }) => { 
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



      <Header>Add Trademerk</Header>
    
      <View>
      <RadioButton
        value="irdi"
        status={ checked === 'irdi' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('irdi')}
      />
      <Text>National/ IRDI Number</Text>
      <RadioButton
        value="irn"
        status={ checked === 'irn' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('irn')}
      />
      <Text>International Registration Number</Text>
     
    </View>

      <TextInput
        label="TM Application No"
        returnKeyType="done"
        value={appno.value}
        onChangeText={text => setAppno({ value: text})}        
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
      textOptionStyle={{ color: 'black' }}
      placeholderContainerStyle={{ paddingVertical: 20 }}
      placeholderStyle={{ color: 'black' }}
      optionContainerStyle={{ backgroundColor: 'white' }}
      iconStyle={{ tintColor: 'black' }}
      loadingStyle={{ marginBottom: 10 }}
      
    />
    <Selector
      theme="dropdown" // Default: 'simple'
      items={dropDownConstants.frequency}
      // Specify key
      valueKey="value" // Default: 'value'
      labelKey="text" // Default: 'label'
      defaultValue={frequency} // Set default value
      placeholder="Freqyency of Status check*" // Placeholder for dropdown UI
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
    <Selector
      theme="dropdown" // Default: 'simple'
      items={dropDownConstants.submit}
      // Specify key
      valueKey="value" // Default: 'value'
      labelKey="text" // Default: 'label'
      defaultValue={submit} // Set default value
      placeholder="Submit/opposed" // Placeholder for dropdown UI
      // Styles
      textOptionStyle={{ color: 'black' }}
      placeholderContainerStyle={{ paddingVertical: 20 }}
      placeholderStyle={{ color: 'black' }}
      optionContainerStyle={{ backgroundColor: 'white' }}
      iconStyle={{ tintColor: 'black' }}
      loadingStyle={{ marginBottom: 10 }}
      
    />
    
    
    <View style={styles.checkboxContainer}>
    <CheckBox
      value={isSelected}
      onValueChange={setSelection}
      style={styles.checkbox}
    />
    
  </View>
 

 
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

export default memo(CreateTrademark);
