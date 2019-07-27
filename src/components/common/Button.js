import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { buttonContainerStyle, buttonTextSyle } = styles;
  return (
    <TouchableOpacity style={buttonContainerStyle} onPress={props.onPress}>
      <Text style={buttonTextSyle}>{props.children} </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonContainerStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  buttonTextSyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export  { Button };
