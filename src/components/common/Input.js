import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = (props) => {
  const { inputStyle, labelStyle, textContainerStyel} = styles;
  return (
    <View style={textContainerStyel}>
      <Text style={labelStyle}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  textContainerStyel: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export { Input };
