import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, Input, Button, CardSection } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, pass } = this.props;
    this.props.loginUser({ email, pass });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ background: 'white' }}>
          <Text style={styles.errorTextStyle}>
           {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.pass}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    pass: state.auth.pass,
    error: state.auth.error
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
