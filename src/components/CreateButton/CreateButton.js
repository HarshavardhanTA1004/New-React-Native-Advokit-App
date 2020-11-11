import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class CreateButton extends React.Component {
  render() {
    return (
      <TouchableHighlight underlayColor='rgba(33,154,67,0.9)' onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>create</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

CreateButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
