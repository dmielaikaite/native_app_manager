import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
import { Card, Input, Button, CardSection } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>

        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={(text) => { this.props.employeeUpdate({ key: 'name', value: text }) }}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="3333"
            value={this.props.phone}
            onChangeText={(text) => { this.props.employeeUpdate({ key: 'phone', value: text }) }}
          />
        </CardSection>

        <CardSection>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({ key: 'shift', value: day })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift,
  };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
